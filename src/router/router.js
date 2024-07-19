import BlogPostDetails from "../components/BlogPostDetails";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogPostList from "../components/BlogPostList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <BlogPostList /> },
            { path: '/post/:id', element: <BlogPostDetails /> },
        ]
    }
]);