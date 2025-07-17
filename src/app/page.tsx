import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Nidum AI</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-400">Features</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Revolutionizing AI Development
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Nidum AI empowers developers to build, deploy, and scale AI solutions with unprecedented ease and efficiency.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg">
            Try Demo
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Fast Development</h3>
            <p className="text-gray-300">Build and deploy AI models in minutes, not months</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">Scale your AI applications with ease</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Enterprise Security</h3>
            <p className="text-gray-300">Built-in security and compliance features</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the future of AI development. Contact us to learn more about how Nidum AI can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Nidum AI</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400">Privacy</a>
              <a href="#" className="hover:text-blue-400">Terms</a>
              <a href="#" className="hover:text-blue-400">Contact</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            © 2025 Nidum AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
