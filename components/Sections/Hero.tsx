import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, Github, Linkedin, Facebook, Twitter, Terminal } from 'lucide-react';

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Snippets of "hacker" code
    const snippets = [
      "void hack(System s) { s.breach(); }",
      "while(true) { encrypt(data); }",
      "const secret = process.env.SECRET;",
      "root@server:~$ sudo rm -rf /",
      "Access Granted...",
      "Connecting to mainframe...",
      "Downloading payload...",
      "0x1A4F89C",
      "System.out.println('Hacked');",
      "import cyber.security.*;",
      "SELECT * FROM users WHERE admin=true;",
      "buffer_overflow_attack()",
      "decrypting_firewall...",
      "SSH connection established"
    ];

    const particles: { x: number; y: number; text: string; speed: number; opacity: number }[] = [];

    // Increased particle count
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        speed: 0.5 + Math.random() * 2.0, // varied speed
        opacity: 0.3 + Math.random() * 0.7 // Increased base opacity (min 0.3, max 1.0)
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.font = "16px 'JetBrains Mono'"; // Slightly larger font

      particles.forEach(p => {
        ctx.fillStyle = `rgba(0, 255, 65, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);

        p.y += p.speed;
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
          p.text = snippets[Math.floor(Math.random() * snippets.length)];
          p.speed = 0.5 + Math.random() * 2.0;
        }
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Removed opacity-30 class to make it fully visible (opacity controlled by canvas draw)
  // Added a very slight blur filter for depth, but kept it sharp enough to read
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />;
}

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Aspiring Software Engineer | Full Stack Developer | System Designer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    // Increased pt-16 to pt-32 to create more space between navbar and content
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-cyber-black">

      {/* Background Code Animation */}
      <CodeRain />

      {/* Radial Gradient Overlay to focus center */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-cyber-black/50 to-cyber-black z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.9) 100%)' }} />

      <div className="container mx-auto px-6 relative z-10 text-center">

        <div className="mb-10 relative inline-block group mt-8">
          {/* Glitch Effect on Image Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur-md"></div>
          <img
            src="/assets/mehedi.jpg"
            alt="Mehedi Hasan"
            className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-cyber-black object-cover mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute -bottom-2 -right-2 bg-cyber-black border border-cyber-primary rounded-full p-2 text-cyber-primary animate-bounce">
            <Terminal size={20} />
          </div>
        </div>

        <p className="font-mono text-cyber-primary mb-4 tracking-widest text-sm md:text-base animate-pulse">
          &lt;Hello_World /&gt; I am
        </p>

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-tech tracking-tighter shadow-cyber-primary drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">
          MEHEDI HASAN
        </h1>

        <div className="h-16 md:h-12 flex items-center justify-center mb-10">
          <div className="bg-cyber-dark/80 backdrop-blur-sm border border-cyber-dim px-6 py-2 rounded-md">
            <p className="font-mono text-gray-300 text-sm md:text-xl">
              <span className="text-cyber-secondary mr-2">$</span>
              {text}
              <span className="animate-pulse text-cyber-primary">_</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="resume.pdf"
            download
            className="relative overflow-hidden px-8 py-3 bg-cyber-primary text-black font-bold font-mono rounded hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
            <Download className="w-4 h-4" />
            Download_CV.exe
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-cyber-primary text-cyber-primary font-mono rounded hover:bg-cyber-primary/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300 flex items-center gap-2"
          >
            Contact Me <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex justify-center space-x-8">
          {[
            { Icon: Github, href: "https://github.com/hasanmehediii" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mehedi-hasan-146a77307/" },
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=100066649462473" },
            { Icon: Twitter, href: "https://x.com/MehediHasa4780" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyber-primary hover:scale-125 transition-all duration-300"
            >
              <social.Icon size={28} />
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <span className="text-gray-500 font-mono text-xs tracking-[0.3em]">SCROLL_DOWN</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;