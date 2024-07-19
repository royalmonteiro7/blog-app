import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostList from '../components/BlogPostList';

test('renders blog post list', async () => {
    render(
        <BrowserRouter>
            <BlogPostList />
        </BrowserRouter>
    );
    expect(await screen.findByText(/Previous/)).toBeInTheDocument();
    expect(await screen.findByText(/Next/)).toBeInTheDocument();
});
