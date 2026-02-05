import prisma  from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown' // <--- Import

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await prisma.post.findUnique({
    where: { slug: slug },
  })

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/" 
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <header className="mb-8 border-b pb-8">
        <div className="flex gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
            {post.category || 'General'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        {post.createdAt && (
            <p className="text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
            </p>
        )}
      </header>

      {/* The 'prose' class now works because of the @plugin line in globals.css */}
      <div className="prose prose-lg prose-blue max-w-none">
        <ReactMarkdown>
          {post.content || ''}
        </ReactMarkdown>
      </div>

    </article>
  )
}