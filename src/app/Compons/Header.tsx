'use client'
import React, { useState, useEffect } from 'react';

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="p-1 font-medium">
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Pages
                </a>
            </li>
            <li className="p-1 font-medium">
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Account
                </a>
            </li>
            <li className="p-1 font-medium">
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Blocks
                </a>
            </li>
            <li className="p-1 font-medium">
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Docs
                </a>
            </li>
        </ul>
    );
}

export function NavbarSimple() {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () => {
        if (window.innerWidth >= 960) setOpenNav(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <nav className="mx-auto max-w-screen-xl px-6 py-3">
            <div className="flex items-center justify-between text-gray-900">
                {/* Logo */}
                <a href="#" className="mr-4 cursor-pointer py-1.5 text-2xl font-semibold">
                    Material Tailwind
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <NavList />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="ml-auto h-6 w-6 text-gray-900 lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`${openNav ? 'block' : 'hidden'} lg:hidden`}>
                <NavList />
            </div>
        </nav>
    );
}
