import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/BlogPostItem.css';

function BlogPostItem({ post }) {
    return (
        <div className="post-item">
            <img src={post.urlToImage} alt='' />
            <div>
                <Link to={`/post/${post.title}`} >
                    <h2>{post.title}</h2>
                </Link>
                <p>{post.description}</p>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
        </div>
    )
}

export default BlogPostItem