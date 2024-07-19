import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import BlogPostItem from '../components/BlogPostItem';

const mockPost = {
    title: 'This Ancient Technology Is Helping Millions Stay Cool',
    urlToImage: 'https://media.wired.com/photos/6672c421e0704c563b4e7b77/191:100/w_1280,c_limit/GettyImages-80973767.jpg',
    description: 'Cheap, low-energy evaporative cooling devices are keeping water, food, people, and even whole buildings cool across India.',
    publishedAt: '2024-07-09T15:42:42Z',
};

describe('BlogPostItem Component', () => {
    test('renders the blog post item with correct content', () => {
        render(
            <Router>
                <BlogPostItem post={mockPost} />
            </Router>
        );

        expect(screen.getByText(/This Ancient Technology Is Helping Millions Stay Cool/i)).toBeInTheDocument();

        const image = screen.getByAltText('');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockPost.urlToImage);

        expect(screen.getByText(/Cheap, low-energy evaporative cooling devices are keeping water, food, people, and even whole buildings cool across India./i)).toBeInTheDocument();

        const link = screen.getByRole('link', { name: /This Ancient Technology Is Helping Millions Stay Cool/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', `/post/${mockPost.title}`);
    });
});
