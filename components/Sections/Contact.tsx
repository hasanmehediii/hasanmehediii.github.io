import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cyber-dark/50 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <span className="text-cyber-primary font-mono text-lg block mb-4">05. What's Next?</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:mehedihasan@example.com" 
          className="inline-flex items-center px-8 py-4 border border-cyber-primary text-cyber-primary font-mono rounded hover:bg-cyber-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]"
        >
          <Mail className="mr-2 w-5 h-5" />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;