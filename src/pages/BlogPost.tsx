import type { BlogPost } from "@/loaders/blog";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

export default function BlogPost() {
  const post = useLoaderData<BlogPost>();

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl text-white">Post not found</h1>
      </div>
    );
  }

  return (
    <main data-testid="blogpost" className="py-12 md:py-24 text-white">
      <PostMetaData post={post} />
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-extrabold tracking-tight text-white mb-4">
              {post.title}
            </h1>
            <div className="text-neutral-400">
              <span>By {post.author}</span>
              <span className="mx-2">&middot;</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div
            className="prose prose-invert lg:prose-xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}

function PostMetaData({ post }: { post: BlogPost }) {
  const siteUrl = "https://zaplytic.dev";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Zaplytic", // Replace with your company name
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png` // Your logo URL
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl
    },
    keywords: post.tags.join(", ")
  };

  return (
    <Helmet>
      <title>{post.title} | Your Blog Name</title>
      <meta name="description" content={post.description} />
      <meta name="keywords" content={post.tags.join(", ")} />
      <meta name="author" content={post.author} />
      <link rel="canonical" href={postUrl} />
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.description} />
      <meta property="og:url" content={postUrl} />
      <meta property="og:site_name" content="Your Company Name" />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:author" content={post.author} />
      {post.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.description} />
      <meta name="twitter:creator" content="@nullscribe" /> {/* Your Twitter handle */}
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
