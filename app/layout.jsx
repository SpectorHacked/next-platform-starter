import '../styles/globals.css';

export const metadata = {
    title: 'QueueUp - Smart Content Queue Management',
    description: 'Manage your content queue intelligently. Add videos, articles, and more to your queue and let QueueUp suggest the perfect time to consume them based on your schedule.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <script src="https://cdn.tailwindcss.com" async></script>
            </head>
            <body className="antialiased">
                <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
                    <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                                <span className="text-white font-bold">Q</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">QueueUp</span>
                        </div>

                        <nav className="flex items-center space-x-8">
                            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-800">Home</a>
                            <a href="/privacy" className="text-sm font-medium text-gray-600 hover:text-gray-800">Privacy Policy</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="text-sm font-medium text-gray-600 hover:text-gray-800 px-4 py-2">Log in</button>
                            <button className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-4 py-2 rounded-lg">Get Started</button>
                        </div>
                    </div>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
