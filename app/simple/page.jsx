export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-400 py-20">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart content management that learns your schedule
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Add videos, articles, podcasts, and more to your queue. QueueUp analyzes your calendar and suggests the perfect time to consume your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 rounded-lg font-medium">
              Get Started Free
            </button>
            <button className="border border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How QueueUp Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform how you consume content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Content</h3>
              <p className="text-gray-600">
                Use our mobile app or Chrome extension to quickly add videos, articles, podcasts, and books to your queue from anywhere.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your calendar, preferences, and free time patterns to understand when you're most likely to engage with content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Suggestions</h3>
              <p className="text-gray-600">
                Get personalized notifications when you have the perfect window to consume specific content based on duration and type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}