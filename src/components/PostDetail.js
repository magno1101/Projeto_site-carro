import styles from './postDetail.module.css'

import { useState } from 'react'

import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {

    const [mouseOpen, setMouseOpen] = useState(false)

    const handleMouseOpen = () => {

        setMouseOpen(true)

    }

    const handleMouseLeave = () => {

        setMouseOpen(false)

    }

    return (
        <div className={styles.post_detail}>
            <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <h2 key={tag}><p>{tag}</p></h2>
                ))}
            </div>
            <div className={styles.box_car} onMouseEnter={handleMouseOpen} onMouseLeave={handleMouseLeave}>
                <span className={styles.span_title}>{post.title}</span>
                <div className={styles.box_img}>
                    <img src={post.image} alt="imagem carro" />
                </div>
                {mouseOpen &&
                    <div className={styles.box_visible}>
                        <div className={styles.box_contato}>
                            <span>{post.price} - R$</span>
                            <span>@{post.createdBy}</span>
                        </div>
                        <Link to={`/posts/${post.id}`}>Ver mais</Link>
                    </div>
                }
                
            </div>
        
        </div>
    )
}

export default PostDetail