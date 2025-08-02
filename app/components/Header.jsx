'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
                <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
                    {/* Logo - Hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                            <span className="text-white font-bold">Q</span>
                        </div>
                        <span className="text-xl font-bold text-gray-800">QueueUp</span>
                    </div>

                    {/* Mobile: Empty div to push hamburger to the right */}
                    <div className="md:hidden"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-800">Home</Link>
                        <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-gray-800">Privacy Policy</Link>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-800 px-4 py-2">Log in</button>
                        <button className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-4 py-2 rounded-lg">Get Started</button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button 
                        className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-gray-600 transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                    onClick={closeMobileMenu}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-lg">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <span className="text-lg font-bold text-gray-800">QueueUp</span>
                        </div>
                        <button 
                            onClick={closeMobileMenu}
                            className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100"
                            aria-label="Close mobile menu"
                        >
                            <span className="text-gray-500 text-xl">×</span>
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link 
                            href="/" 
                            className="text-base font-medium text-gray-600 hover:text-gray-800 py-2"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/privacy" 
                            className="text-base font-medium text-gray-600 hover:text-gray-800 py-2"
                            onClick={closeMobileMenu}
                        >
                            Privacy Policy
                        </Link>
                    </nav>

                    {/* Sidebar Buttons */}
                    <div className="mt-auto p-4 space-y-3 border-t">
                        <button className="w-full text-base font-medium text-gray-600 hover:text-gray-800 py-3 text-left">
                            Log in
                        </button>
                        <button className="w-full bg-blue-600 text-white hover:bg-blue-700 text-base font-medium py-3 rounded-lg">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}