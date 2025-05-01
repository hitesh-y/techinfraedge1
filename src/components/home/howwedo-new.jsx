import Link from "next/link";

const Howwedo = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img src="/assets/imgs/bg-shape-1.svg" alt="Shape" className="absolute -left-20 top-20 w-96 h-96 animate-pulse" />
          </div>
          <div className="w-full md:w-1/3 relative z-10">
            <div className="mb-8">
              <h5 className="text-indigo-400 font-medium mb-3 uppercase">Our Model</h5>
              <h1 className="text-4xl font-bold mb-4 text-white">How we do</h1>
              <p className="text-gray-300">Save time and money with our powerful method.</p>
            </div>
            <Link href="/how-we-do" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="w-full md:w-2/3 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-1.svg" alt="Brainstorming" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">Brainstorming</h4>
                  <p className="text-indigo-400">Ideas</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-2.svg" alt="Product" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">Product</h4>
                  <p className="text-indigo-400">Design</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-3.svg" alt="Front-End" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">Front-End</h4>
                  <p className="text-indigo-400">Development</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-4.svg" alt="SEO" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">SEO</h4>
                  <p className="text-indigo-400">Optimization</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-5.svg" alt="Back-End" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">Back-End</h4>
                  <p className="text-indigo-400">Development</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-indigo-900/50 mx-auto">
                  <img src="/assets/imgs/hwd-icon-6.svg" alt="Testing" className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 text-white">Testing</h4>
                  <p className="text-indigo-400">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howwedo;