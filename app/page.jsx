import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Play, BookOpen, Headphones, FileText, Clock, Brain, Smartphone, Chrome, Calendar, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0073ea] via-[#0073ea] to-[#00c3f5] py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Smart content management that learns your schedule
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Add videos, articles, podcasts, and more to your queue. QueueUp analyzes your calendar and suggests the perfect time to consume your content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#0073ea] hover:bg-gray-50 text-lg px-8 py-4 h-auto">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f6f7fb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323338] mb-4">
              How QueueUp Works
            </h2>
            <p className="text-lg text-[#676879] max-w-2xl mx-auto">
              Three simple steps to transform how you consume content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0073ea] rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#323338] mb-4">Add Content</h3>
              <p className="text-[#676879] leading-relaxed">
                Use our mobile app or Chrome extension to quickly add videos, articles, podcasts, and books to your queue from anywhere.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00c3f5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#323338] mb-4">AI Analysis</h3>
              <p className="text-[#676879] leading-relaxed">
                Our AI analyzes your calendar, preferences, and free time patterns to understand when you&apos;re most likely to engage with content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#323338] mb-4">Smart Suggestions</h3>
              <p className="text-[#676879] leading-relaxed">
                Get personalized notifications when you have the perfect window to consume specific content based on duration and type.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323338] mb-4">
              Support for All Your Content
            </h2>
            <p className="text-lg text-[#676879] max-w-2xl mx-auto">
              From quick reads to deep dives, manage every type of content in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Play className="h-12 w-12 text-[#ff0000] mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Videos</CardTitle>
                <CardDescription>YouTube, educational content, tutorials, and entertainment</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-[#0073ea] mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Articles</CardTitle>
                <CardDescription>Blog posts, news, research papers, and long-form content</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Headphones className="h-12 w-12 text-[#1db954] mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Podcasts</CardTitle>
                <CardDescription>Episodes, interviews, educational series, and audio content</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-[#ff6b35] mx-auto mb-4" />
                <CardTitle className="text-lg mb-2">Books</CardTitle>
                <CardDescription>E-books, audiobooks, chapters, and reading materials</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f6f7fb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323338] mb-4">
              Access Everywhere
            </h2>
            <p className="text-lg text-[#676879] max-w-2xl mx-auto">
              Add content seamlessly across all your devices and platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <CardHeader>
                <Smartphone className="h-16 w-16 text-[#0073ea] mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Native iOS and Android apps with share integration. Add content directly from any app on your phone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardHeader>
                <Chrome className="h-16 w-16 text-[#4285f4] mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Browser Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  One-click saving for Chrome, Firefox, and Safari. Add any webpage, video, or article instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardHeader>
                <Calendar className="h-16 w-16 text-[#ff6b35] mx-auto mb-4" />
                <CardTitle className="text-xl mb-2">Calendar Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connects with Google Calendar, Outlook, and Apple Calendar to find your perfect content moments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323338] mb-6">
              Ready to Take Control of Your Content Queue?
            </h2>
            <p className="text-lg text-[#676879] mb-8 leading-relaxed">
              Join thousands of users who have transformed their content consumption with smart scheduling and AI-powered suggestions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto">
                Schedule Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-[#676879]">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-2">Free 14-day trial • No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
