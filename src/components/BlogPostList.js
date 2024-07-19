import React, { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import '../styles/BlogPostList.css';

function BlogPostList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 5;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=technology&pageSize=${pageSize}&page=${page}&apiKey=97cf4b6aafbe481e974ff5ba1d3e034f`);
                const data = await response.json();
                setPosts(data.articles);
                setTotalResults(data.totalResults);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [page]);

    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <BlogPostItem key={index} post={post} />
            ))}
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <button disabled={(page * pageSize) >= totalResults} onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
}

export default BlogPostList;
