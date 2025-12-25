import React from 'react';
import { EDUCATION } from '../../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center mb-12 justify-center">
          <span className="text-cyber-primary font-mono text-xl mr-4">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Education
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative pl-8 md:pl-0 py-6 group">

              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 group-last:bottom-auto group-last:h-1/2"></div>
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800"></div>

              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-8 w-3 h-3 rounded-full bg-cyber-primary shadow-[0_0_10px_#00ff41] z-10"></div>

              <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="md:w-5/12"></div>

                <div className="md:w-5/12 bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-cyber-primary/50 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,65,0.1)] group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyber-primary font-mono text-xs px-2 py-1 bg-cyber-primary/10 rounded">
                      {edu.year}
                    </span>
                    <GraduationCap className="text-gray-500 w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-1">{edu.degree}</h3>
                  <p className="text-gray-400 font-mono text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-xs border-t border-gray-800 pt-2 mt-2">
                    {edu.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;