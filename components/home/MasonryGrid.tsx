import React from 'react';
import Link from 'next/link';

export const MasonryGrid = () => {
  return (
    <div className="masonry-grid">
      {/* Card 1 */}
      <Link href="/blog/theology-of-governance">
        <div className="masonry-item group cursor-pointer bg-white  border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-cover bg-center" data-alt="Open old book on a wooden desk" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa4fEcVWBa5JZRVO9DKRDW8gs6itDuZ6T96WQBPSunnvGdoTxKyAeYO_SrOvaQ_hcxxfQBDD3FvyDIOkJu5R2YJwidp7nMVm7Sy1EBJXYAFoNs3C6nuQ0mjQVzaN3ja9hbrZtgl12vY_kOPVVd-i7dY09E_tGgroR1qy-i18prbSEbSuiQOHLbWxd-1isfHG_XwzE9F1zJlhO4bwe9S2jpfkWeqwnCyGdi-oWuZupA0_7Yuz_jQmaBvLO2IDKJtzqDjUfNPuNTJaY")'}}></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Theology</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-500">8 min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">The Theology of Governance: Founding Principles</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">Exploring the historical and spiritual roots of modern administration and the call to righteous leadership.</p>
          <div className="flex items-center gap-3">
            <div className="size-6 rounded-full bg-gray-200" data-alt="Author portrait"></div>
            <span className="text-xs font-semibold">Dr. Mary Carroll</span>
          </div>
        </div>
      </div>
      </Link>
      {/* Card 2 */}
      <Link href="/blog/urban-planning-new-age">
      
        <div className="masonry-item group cursor-pointer bg-white border border-gray-100  rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="aspect-square bg-cover bg-center" data-alt="Modern architectural blueprint" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBokil-DrZ68oNl5WX5QITh_dSRBKneMCLFinsXQWH8yuwdF8oi5jSCcyq3j8G4Tc_Mklbo_FSyJbY15Ear5Nhv2YcCroSWh2TWnVKXr5CROjDQhZLAsBy7KCOfZK8zh7YmqwFleuDo6_4fy24ryuvDne_NsFpokfv7AmMvtMX03zi4siXTvY9HOmAb71YzsQggLC0T2jXzV11fK9dbyJq-Iy13DleqLQpwHeZfrCMpaMDFRCeY8X5oAqkJMXmhDMGI6RZdQMic4uk")'}}></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Urbanism</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-500">12 min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Urban Planning for the New Age</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">Architectural visions for 2025: How design influences community spirit and safety.</p>
          <div className="flex items-center gap-3">
            <div className="size-6 rounded-full bg-gray-200" data-alt="Author portrait"></div>
            <span className="text-xs font-semibold">Dr. Mary Carroll</span>
          </div>
        </div>
      </div>
      </Link>
      {/* Card 3 */}
      <Link href="/blog/civic-duty">
        <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="p-8 dark:bg-primary/20 border-b border-primary/10">
          <span className="material-symbols-outlined text-primary text-4xl mb-4"></span>
          <blockquote className="text-2xl font-bold italic leading-tight text-gray-800 dark:text-gray-200">
            &quot;A city is only as strong as the integrity of its builders and the vision of its watchmen.&quot;
          </blockquote>
        </div>
        <div className="p-6">
          <h3 className="text-lg text-white font-bold mb-2">A Call to Civic Duty</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Engaging the next generation in the noble art of public service.</p>
        </div>
      </div>
      </Link>
      {/* Card 4 */}
      <Link href="/blog/prophetic-voices">
        <div className="masonry-item group cursor-pointer bg-white  border border-gray-100  rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="aspect-3/4 bg-cover bg-center" data-alt="Protestors silhouette against a sunset" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCziuMMPIPHlj8kQzrdOJUnCqzMKzwnj8Tj8HJ2gSjJrnv_ZsSddwlniFm8GapE66lZnf_eLF-uCvtY7IPHoVjvcSCzTolXihbUvCNvKqTvV7oddHogoORZgXDr3-g-k-dtbuQJfxK01LTSvVg5hZUfkUGjqeaKKIrAiVp6JmGfV_2agHLNFxX83m-OK7ObSEaUGFxZKPeu2_vOmeynwm_3QoXCBIYwLLd4jRT5AMjMFpbgQd7h4gQKvRXov4VmkOEYNmpaC7P8H6E")'}}></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Politics</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-500">5 min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Prophetic Voices in Modernity</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">Who are the voices that matter today? A study of influence and truth in the digital era.</p>
        </div>
      </div>
      </Link>
      {/* Card 5 */}
      <Link href="/blog/security-divided-world">
        <div className="masonry-item group cursor-pointer bg-white border border-gray-100  rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-cover bg-center" data-alt="High tech security wall" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpg62KyR47jZK5xPcTzAIpTl0JMMvbkNn7txFzg3vdmKt7osEuOLF4JRkn-PyGgjPiEttChOG-4rT4um8B-FSjB4kNGjhI7pnOsxN7X0ZGnjhNSFattpCAWrytsA4gkJXw_OVSd8mYIoMXQKMgKa3H-XYjDSCsbHLsovHJyvXPGyZD07b4BY6bLLjRC6fRvWeWOOCgf5Pb1dvlLy5slF8jkEBRqbJ0owq9d3uGbUbzZStZ9qI43FVStIcS389_nypm8aXz1Do6KU4")'}}></div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Security</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-500">15 min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Security in a Divided World</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">Protecting our heritage while fostering open dialogue across borders.</p>
        </div>
      </div>
      </Link>
      {/* Card 6 */}
      <Link href="/blog/ethics-future">
         <div className="masonry-item group cursor-pointer bg-white border border-gray-100  rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] uppercase font-bold text-primary tracking-widest">Ethics</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="text-[10px] text-gray-500">10 min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Ethics of the Future</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">Where faith meets policy: A new framework for ethical decision-making in the AI age.</p>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-xs text-gray-400">Published Jan 12, 2025</span>
            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
          </div>
        </div>
      </div>   
      </Link>
    </div>
  );
};