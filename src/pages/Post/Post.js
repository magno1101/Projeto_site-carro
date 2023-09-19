import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument2 } from '../../hooks/useFetchDocument2';
import { useState } from 'react';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument2("posts", id)
  const [mouseOpen, setMouseOpen] = useState(false)

  const handleMouseOpen = () => {

    setMouseOpen(true)

  }

  const handleMouseLeave = () => {

    setMouseOpen(false)

  }
  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post</p>}
      {post && (
        <>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <h1 key={tag}>{tag}</h1>
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

              </div>
            }

          </div>
          <div className={styles.post_spec}>
            <h2>Especificações:</h2>
            <p>{post.body}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Post;