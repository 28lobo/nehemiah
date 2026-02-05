import Link from 'next/link'

// Define what a Post looks like for this component
type PostProps = {
  id: number;          // <--- CHANGE THIS from 'string' to 'number'
  title: string;
  slug: string;
  category: string | null;
  content: string | null;
}

export function MasonryGrid({ posts }: { posts: PostProps[] }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="break-inside-avoid">
          <Link href={`/blog/${post.slug}`} className="block group">
            <div className="border rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                {post.category || 'General'}
              </span>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              
              {post.content && (
                <p className="text-gray-600 line-clamp-3">
                  {post.content}
                </p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}