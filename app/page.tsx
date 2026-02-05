import React from 'react';
import  prisma  from '@/lib/prisma'
// Use relative paths if your aliases aren't set up yet
import { Header } from '../components/layout/Header';
import { MasonryGrid } from '../components/home/MasonryGrid';
import { NewsTicker } from '../components/home/NewsTicker';
import { CategoryChips } from '../components/home/CategoryChips';
import { Footer } from '../components/layout/Footer';


export const revalidate = 60 // Optional: Cache data for 60 seconds

export default async function Home() {
  // 1. Fetch the posts from the database
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 20, // Limit to recent posts
  })
  return (
    <div className="relative flex flex-col w-full">
      <Header />
      
      <main className="max-w-300 mx-auto w-full px-6 md:px-10 py-10">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200 ">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Featured Manifesto</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                The Vision for Restoration: Protective & Visionary Leadership
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-light">
                Building a foundation for the future through political wisdom and religious integrity. Explore our architectural blueprint for the modern soul and city.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:scale-105 transition-transform">
                  Read the Manifesto
                </button>
                <button className="border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-100 bg-cover bg-center relative" data-alt="Modern city skyline at dawn with golden light" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYBeLXK-fLAaxfQcmq7XHLQZzIcgi9lNlYSS9MhyqqkQSr65FPU-r1Qu9b0YujVC-6XDFfKZ4VAAoqR8Op0DQgLstIvlZ3hyp5F-HakjQwEJ7pzLpYr2Siphd3J6lXpP6pNIUa2pATCIzdQlVvuZ-k0kfcJ0yuzvqdDBTFa0Hs58jGskaXkpK6NF22hBFz_5dn7bvakx5-7Blz5hjYh42GJ70CGoKJ1DU3OXZTcI3Io43rb0EzeI5WbFJeBXBsrcmooo_c6JI6EWc")'}}>
              <div className="absolute inset-0 bg-linear-to-r from-white dark:from-gray-900 to-transparent lg:block hidden opacity-20"></div>
            </div>
          </div>
        </section>

        <NewsTicker />
        <CategoryChips />
        <div className="container mx-auto px-4 py-8">
         <MasonryGrid posts={posts} />
       </div>
      </main>

      {/* Add Footer when you are ready */}
      <Footer />
    </div>
  );
};