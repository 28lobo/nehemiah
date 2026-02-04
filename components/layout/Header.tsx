
import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200  bg-white/80 backdrop-blur-md px-6 md:px-20 py-3">
      <div className="max-w-300 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              
            </div>
            <h2 className="text-xl font-bold tracking-tight">Nehemiah&apos;s House</h2>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Manifesto</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Leadership</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Politics</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Religion</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <label className="hidden md:flex items-center bg-gray-100  rounded-lg px-3 py-1.5 w-48 lg:w-64">
            <span className="material-symbols-outlined text-gray-500 text-xl"></span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-500" placeholder="Search insights..." type="text"/>
          </label>
          <button className="bg-primary hover:bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all">
            Subscribe
          </button>
          <div className="size-9 rounded-full bg-cover bg-center border-2 border-primary/20" data-alt="User profile avatar" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRM4FuFRabhTxrpzqE_lJixhZTsFfLbBOCDRelaASiGCmKEBX0NgWLStOLJNvOqozyfl1wOiyaKTEU3GZ0Mfji8D-BGhcdrf67SjYYZF0F1yaEk8a5nXPTi1BEe9B0Z8He92QuciMYS6V4Gkaq4uIhr9WGem2zHJxFOe6NtSrVsnw6uFCudwKhtuDRY8hlkHiwI4iVgFc3eOOFjY_8GrdNtkkjs6YhQAY9bCkoC70BWiLf21qSrHuB1dWHJhGmLfPk6UDh6U4iJQo")'}}></div>
        </div>
      </div>
    </header>
  );
};