import styles from './CreatePost.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';



const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [tags, setTags] = useState("");
    const [price, setPrice] = useState("");
    const [body, setBody] = useState([]);
    const [formError, setFormError] = useState("");

    const { insertDocument, response } = useInsertDocument("posts");
    const { user } = useAuthValue();
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        setFormError("");

        // Validar a URL da imagem
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.");
        }

        // Converter a primeira letra da marca do carro para minúscula
        const convertFirstLetterToLower = (string) => {
            return string.charAt(0).toLowerCase() + string.slice(1);
        };

        // Converter a primeira letra da marca do carro para minúscula
        const convertedTags = convertFirstLetterToLower(tags);

        // Criar o array de tags com a primeira letra maiúscula
        const tagsArray = convertedTags.split(",").map((tag) => tag.trim());

        // Checar todos os valores
        if (!title || !image || !tags || !body || !price) {
            setFormError("Por favor, preencha todos os campos!");
        }

        if (formError) return;

        const data = {
            title,
            image,
            body,
            price,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        };

        insertDocument(data);

        // Redirect para a página inicial
        navigate("/");
    };

    return (
        <div className={styles.create_post}>
            <h2>Criar anúncio</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Marca:</span>
                    <input
                        type="text"
                        name='tags'
                        required
                        placeholder='Insira marca do veículo'
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                <label>
                    <span>Modelo:</span>
                    <input
                        type="text"
                        name='title'
                        required
                        placeholder='Insira modelo do veículo'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>Imagem do veículo:</span>
                    <input
                        type="text"
                        name='Image'
                        required
                        placeholder='Insira uma imagem do seu veículo'
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Preço:</span>
                    <input
                        type="text"
                        name='price'
                        required
                        placeholder='Insira o preço do veículo'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </label>
                <label>
                    <span>Especificações do veículo:</span>
                    <textarea
                        name="body"
                        required
                        placeholder='Insira as especificações do veículo'
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    >
                    </textarea>
                </label>
                {!response.loading && <button className='btn'>Criar Anúncio</button>}
                {response.loading && <button className='btn' disabled>Aguarde...</button>}
                {response.error && <p className='error'>{response.error}</p>}
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost;