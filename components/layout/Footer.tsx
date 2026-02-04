import React from 'react';

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 py-16 px-6 md:px-20 bg-white ">
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            
            <h2 className="text-xl font-bold tracking-tight">Nehemiah&apos;s House</h2>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Dedicated to the restoration of leadership through the intersection of visionary political thought and grounded religious integrity.
          </p>
        </div>

        {/* Column 2: Resources */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition-colors" href="#">Manifesto Library</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Leadership Frameworks</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Policy Whitepapers</a></li>
          </ul>
        </div>

        {/* Column 3: Community */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Community</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li><a className="hover:text-primary transition-colors" href="#">Discussion Forums</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Global Summits</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Local Chapters</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Get the weekly digest of prophetic insights.</p>
          <div className="flex gap-2">
            <input 
              className="bg-gray-100  border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary outline-none transition-all" 
              placeholder="Email address" 
              type="email"
            />
            <button className="bg-primary hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="max-w-300 mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© 2025 Nehemiah&apos;s House. Built for the builders of tomorrow.</p>
        <div className="flex gap-6">
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-xl"></span>
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-xl"></span>
          </a>
          <a className="text-gray-400 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-xl"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};