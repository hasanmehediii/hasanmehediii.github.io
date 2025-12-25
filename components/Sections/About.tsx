import React from 'react';
import { User, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cyber-dark/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Terminal Window Graphic */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono flex items-center">
                  <Terminal size={12} className="mr-2" /> about_me.txt
                </div>
              </div>
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-gray-300">
                <p>
                  <span className="text-pink-500">const</span> <span className="text-blue-400">mehedi</span> = <span className="text-yellow-300">new</span> <span className="text-green-400">Developer</span>();
                </p>
                <br />
                <p>
                  <span className="text-blue-400">mehedi</span>.<span className="text-yellow-300">passion</span> = [<span className="text-orange-300">"Web Dev"</span>, <span className="text-orange-300">"App Dev"</span>, <span className="text-orange-300">"Game Design"</span>];
                </p>
                <br />
                <p className="text-gray-400">
                  // I am a passionate software engineer eager to create innovative solutions.
                  // Always learning, always coding.
                </p>
                <br />
                <p>
                  <span className="text-purple-400">while</span>(alive) &#123;<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">mehedi</span>.code();<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">mehedi</span>.learn();<br/>
                  &#125;
                </p>
                <div className="mt-4 animate-pulse">_</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
             <div className="flex items-center mb-6">
                <span className="text-cyber-primary font-mono text-xl mr-4">01.</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white relative">
                  About Me
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-cyber-primary"></span>
                </h2>
             </div>
             
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               I am currently pursuing a BSc in Computer Science and Engineering at the University of Dhaka. 
               My journey in tech is driven by curiosity and the satisfaction of solving complex problems.
             </p>
             
             <p className="text-gray-400 text-lg leading-relaxed">
               I specialize in building scalable web applications and engaging mobile experiences. 
               When I'm not coding, you can find me exploring game development logic or keeping up with the latest tech trends.
             </p>

             <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="flex items-center text-gray-300">
                 <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                 Problem Solver
               </div>
               <div className="flex items-center text-gray-300">
                 <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                 Fast Learner
               </div>
               <div className="flex items-center text-gray-300">
                 <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                 Team Player
               </div>
               <div className="flex items-center text-gray-300">
                 <span className="w-2 h-2 bg-cyber-primary rounded-full mr-3"></span>
                 Creative Thinker
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;