import React from 'react';
import { notFound } from 'next/navigation';
import prisma from "@/lib/prisma"; // Ensure this path matches your project
import { Header } from '../../../components/layout/Header';
import { Footer } from '../../../components/layout/Footer';

// Next.js 16: Define params as a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  // 1. Await the params (Next.js 16 requirement)
  const { slug } = await params;

  // 2. Fetch the specific post from the database
  const post = await prisma.post.findUnique({
    where: { 
      slug: slug 
    },
    include: {
      author: true, // Includes author details if you need them
    },
  });

  // 3. Handle 404 if post doesn't exist
  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="max-w-200 mx-auto w-full px-6 py-20 grow">
        <div className="mb-8">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">
            {post.category || "Blog Post"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4 capitalize leading-tight">
            {post.title}
          </h1>
          {post.author && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>By {post.author.name}</span>
              <span>•</span>
              {/* Format date if createdAt exists */}
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Render the content */}
        <div className="prose dark:prose-invert prose-lg">
          {/* If your content is Markdown/HTML, you might need a parser here later */}
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}