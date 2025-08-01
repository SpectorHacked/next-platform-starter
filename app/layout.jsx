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
                {children}
            </body>
        </html>
    );
}
