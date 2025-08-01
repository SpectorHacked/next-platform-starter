export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-400 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Save Now, Watch When It Makes Sense
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Queue videos and articles with one tap — we&apos;ll offer them back at the right time, when you&apos;re free and looking for something worthwhile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 rounded-lg font-medium">
              Download Free App
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg font-medium">
              Get Browser Extension
            </button>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Simple. Smart. Free.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No trials, no credit cards, no premium features behind paywalls
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">One-Tap Save</h3>
              <p className="text-gray-600 leading-relaxed">
                From Chrome or any app, save links, videos, or articles into your private queue instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Timing</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand when you&apos;re between tasks or just browsing aimlessly. We quietly offer a saved video or article — no pushy nudges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless Handoff</h3>
              <p className="text-gray-600 leading-relaxed">
                Save on Chrome. View on mobile. Or the other way around — it&apos;s all synced.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🧭</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Thoughtful Use of Free Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Scrolling with no goal? We step in with something you actually cared about earlier.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Stop Losing Track of Good Content?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Download the app, add the browser extension, and start building your queue. Everything is completely free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4 rounded-lg font-medium">
                Download Free App
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-lg font-medium">
                Get Browser Extension
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>✨</span>
              <span>Completely free • No registration required • No ads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}