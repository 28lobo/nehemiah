import React from 'react';

const Home = () => {
  return (
    <div className="relative flex flex-col w-full">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-3">
        <div className="max-w-300 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">fort</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">Nehemiah's House</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Manifesto</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Leadership</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Politics</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Religion</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <label className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 w-48 lg:w-64">
              <span className="material-symbols-outlined text-gray-500 text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-500" placeholder="Search insights..." type="text"/>
            </label>
            <button className="bg-primary hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all">
              Subscribe
            </button>
            <div className="size-9 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="User profile avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRM4FuFRabhTxrpzqE_lJixhZTsFfLbBOCDRelaASiGCmKEBX0NgWLStOLJNvOqozyfl1wOiyaKTEU3GZ0Mfji8D-BGhcdrf67SjYYZF0F1yaEk8a5nXPTi1BEe9B0Z8He92QuciMYS6V4Gkaq4uIhr9WGem2zHJxFOe6NtSrVsnw6uFCudwKhtuDRY8hlkHiwI4iVgFc3eOOFjY_8GrdNtkkjs6YhQAY9bCkoC70BWiLf21qSrHuB1dWHJhGmLfPk6UDh6U4iJQo")'}}></div>
          </div>
        </div>
      </header>
      <main className="max-w-300 mx-auto w-full px-6 md:px-10 py-10">
        {/* Hero Section: Split Screen */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Featured Manifesto</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                The Vision for Restoration: Protective &amp; Visionary Leadership
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
        {/* News Ticker / Latest Updates */}
        <div className="mb-12 flex items-center gap-4 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
          <span className="flex items-center gap-2 text-primary font-bold text-sm shrink-0">
            <span className="material-symbols-outlined text-lg">bolt</span>
            LATEST UPDATES:
          </span>
          <div className="overflow-hidden whitespace-nowrap relative w-full">
            <p className="text-sm font-medium animate-pulse">
              New political reform bill proposes increased oversight for local governing bodies... • Prophetic voices convening in Brussels for the 2025 Summit... • Urban planning initiatives prioritized for heritage sites...
            </p>
          </div>
        </div>
        {/* Category Chips */}
        <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium">
            All News
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Political Briefs
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Religious Insights
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Community Updates
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-colors">
            Global Trends
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
        {/* Masonry Content Feed */}
        <div className="masonry-grid">
          {/* Card 1 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
                <span className="text-xs font-semibold">Dr. Julian Vance</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
                <span className="text-xs font-semibold">Sarah L. Miller</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8 bg-primary/5 dark:bg-primary/20 border-b border-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
              <blockquote className="text-2xl font-bold italic leading-tight text-gray-800 dark:text-gray-200">
                "A city is only as strong as the integrity of its builders and the vision of its watchmen."
              </blockquote>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">A Call to Civic Duty</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Engaging the next generation in the noble art of public service.</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
          {/* Card 5 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
          {/* Card 6 */}
          <div className="masonry-item group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
        </div>
      </main>
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 py-16 px-6 md:px-20 bg-white dark:bg-background-dark">
        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">fort</span>
              <h2 className="text-xl font-bold tracking-tight">Nehemiah's House</h2>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Dedicated to the restoration of leadership through the intersection of visionary political thought and grounded religious integrity.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><a className="hover:text-primary" href="#">Manifesto Library</a></li>
              <li><a className="hover:text-primary" href="#">Leadership Frameworks</a></li>
              <li><a className="hover:text-primary" href="#">Policy Whitepapers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><a className="hover:text-primary" href="#">Discussion Forums</a></li>
              <li><a className="hover:text-primary" href="#">Global Summits</a></li>
              <li><a className="hover:text-primary" href="#">Local Chapters</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Get the weekly digest of prophetic insights.</p>
            <div className="flex gap-2">
              <input className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full" placeholder="Email address" type="email"/>
              <button className="bg-primary text-white p-2 rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-300 mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2025 Nehemiah's House. Built for the builders of tomorrow.</p>
          <div className="flex gap-6">
            <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
            <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
            <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">mail</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;