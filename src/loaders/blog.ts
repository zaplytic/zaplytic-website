import type { LoaderFunctionArgs } from "react-router-dom";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  featured: string;
  content: string;
}

let blogPosts: null | BlogPost[] = null;

export async function loadBlogs() {
  if (blogPosts) return blogPosts;

  const response = await fetch("/blogs.json");
  blogPosts = await response.json();
  return blogPosts;
}

export async function loadBlog({ params }: LoaderFunctionArgs) {
  const blogs = await loadBlogs();

  if (!blogs || blogs.length === 0) {
    console.error("There is no blog to see");
    return;
  }

  const post = blogs.find((blog) => blog.slug === params.slug);

  if (!post) {
    console.error("There is no blog to see");
    return;
  }

  return post;
}
