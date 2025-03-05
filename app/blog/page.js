import React from "react";
import Head from "next/head";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Quantum Revolution in Electronics",
      excerpt:
        "Discover how quantum technology is reshaping electronics design.",
    },
    {
      id: 2,
      title: "The Future of Semiconductors",
      excerpt: "An in-depth look at next-gen semiconductor innovation.",
    },
    {
      id: 3,
      title: "Designing with Quantum Precision",
      excerpt:
        "Exploring the intersection of art and engineering in electronics.",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - MFSemi LLC</title>
        <meta
          name="description"
          content="Read our latest articles on electronics design and quantum innovation."
        />
      </Head>
      <section className="blog">
        <h1>Our Blog</h1>
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button>Read More</button>
          </article>
        ))}
      </section>
    </>
  );
}
