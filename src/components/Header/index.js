import React from 'react'
import Logo from './logo';
import Link from 'next/link';
import { LinkedinIcon, GithubIcon, SunIcon } from '../icons';

const Header = () => {
    return (
        <header className="w-full p-6 px-12 flex items-center justify-between">
            <Logo />
            <nav className="w-max py-2 px-6 border border-solid border-dark rounded-full
                    capitalize flex items-center fixed top-5 right-1/2 translate-x-1/2
                    bg-light/80 backgrop-blur-sm z-50">
                <Link href="/" className="mr-2">Home</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="/contact" className="mx-2">Contact</Link>
                <button className="mx-2"><SunIcon /></button>
            </nav>
            <div>
                <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
                    <GithubIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>
        </header>
    )
}

export default Header;
