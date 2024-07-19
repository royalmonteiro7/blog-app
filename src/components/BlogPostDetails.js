import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/BlogPostDetails.css';

export default function BlogPostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=97cf4b6aafbe481e974ff5ba1d3e034f`);
      const data = await response.json();
      const post = data.articles.find(article => article.title === id);
      setPost(post)
    }
    )();
  }, [id])

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{post.title}</h1>
      <img src={post.urlToImage} alt='' />
      <p>{post.content}</p>
    </div>
  )
}
