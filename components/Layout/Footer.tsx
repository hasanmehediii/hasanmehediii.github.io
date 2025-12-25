import React from 'react';
import { Star, GitFork } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-cyber-black text-center font-mono text-xs md:text-sm text-gray-500">
      <div className="container mx-auto px-6">
        <a 
          href="https://github.com/hasanmehediii" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-cyber-primary transition-colors mb-2 inline-block"
        >
          Designed & Built by Mehedi Hasan
        </a>
        <div className="flex justify-center items-center gap-4 mt-2">
           <div className="flex items-center gap-1">
             <Star size={12} />
             <span>32</span>
           </div>
           <div className="flex items-center gap-1">
             <GitFork size={12} />
             <span>14</span>
           </div>
        </div>
        <p className="mt-4 opacity-50">&copy; 2025 Mehedi Hasan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;