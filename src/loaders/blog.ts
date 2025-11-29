import type { LoaderFunctionArgs } from "react-router-dom";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  featured: boolean;
  content: string;
}

let blogPosts: null | BlogPost[] = null;

export async function loadBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch("/blogs.json");
    if (!response.ok) {
      console.error(`Failed to fetch blogs: ${response.status}`);
      return [];
    }
    blogPosts = await response.json();
    return blogPosts ?? [];
  } catch (error) {
    console.error("Error loading blogs:", error);
    return [];
  }
}

export async function loadBlog({ params }: LoaderFunctionArgs): Promise<BlogPost | null> {
  const blogs = await loadBlogs();

  if (!blogs || blogs.length === 0) {
    console.error("There is no blog to see");
    return null;
  }

  const post = blogs.find((blog) => blog.slug === params.slug);

  if (!post) {
    console.error("There is no blog to see");
    return null;
  }

  return post;
}
