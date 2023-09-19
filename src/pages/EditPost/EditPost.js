import styles from './EditPost.module.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument2 } from '../../hooks/useFetchDocument2'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

const EditPost = () => {

    const { id } = useParams()
    const { document: post } = useFetchDocument2("posts", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [price, setPrice] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {

        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)
            setPrice(post.price)

            const textTags = post.tagsArray.join(", ")

            setTags(textTags)

        }

    }, [post])

    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument("posts")

    const navigate = useNavigate()

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

        updateDocument(id, data);

        // Redirect para a página do dashboard
        navigate("/dashboard");
    };

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como prefirir</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Marca:</span>
                            <input
                                type="text"
                                name='tags'
                                required
                                placeholder='Insira marca do seu veículo'
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
                                placeholder='Insira o modelo vo veículo'
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <div></div>
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

                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <div className={styles.box_img}>
                            <img src={post.image} alt="imagem carro" />
                        </div>
                        <div>
                            <label>
                                <span>Preço:</span>
                                <input
                                    type="text"
                                    name='price'
                                    required
                                    placeholder='Insira preço do veículo'
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                />
                            </label>
                        </div>

                        <label>
                            <span>Especificações:</span>
                            <textarea
                                name="body"
                                required
                                placeholder='Insira especificações do veículo'
                                onChange={(e) => setBody(e.target.value)}
                                value={body}
                            >
                            </textarea>
                        </label>

                        {!response.loading && <button className='btn'>Editar anúncio</button>}
                        {response.loading && <button className='btn' disabled>Aguarde...</button>}
                        {response.error && <p className='error'>{response.error}</p>}
                        {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost;