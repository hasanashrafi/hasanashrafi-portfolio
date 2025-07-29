'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for saved theme preference or default to 'light'
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        
        // Apply theme to document
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="w-full bg-white dark:bg-black shadow fixed top-0 left-0 z-50">
            <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-7xl">
                <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hasan Ashrafi
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 text-lg font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-sky-500 transition">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Theme Toggle Button */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? (
                                <Moon className="size-6 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Sun className="size-6 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    )}
                </div>
                {/* Hamburger for Mobile */}
                <button
                    className="md:hidden text-gray-900 dark:text-white focus:outline-none"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu className="size-8" />
                </button>
            </nav>
            {/* Mobile Overlay Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transition-all">
                    <button
                        className="absolute top-6 right-6 text-white focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="size-10" />
                    </button>
                    <ul className="flex flex-col gap-8 text-2xl font-bold text-white">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-sky-400 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="mt-8 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            {theme === 'light' ? (
                                <Moon className="size-8 text-white" />
                            ) : (
                                <Sun className="size-8 text-white" />
                            )}
                        </button>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header; 