import styles from './Search.module.css'
import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

const Search = () => {
    const query = useQuery()
    const search = query.get("q").toLowerCase(); // Converter para minúsculas

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div className={styles.search_container}>
            <h2>Anúncios encontrados para sua busca.</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">Voltar</Link>
                    </div>
                )}
                <div className={styles.container_cars}>
                    {posts && posts.map((post) => (
                        <PostDetail key={post.id} post={post} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Search;
