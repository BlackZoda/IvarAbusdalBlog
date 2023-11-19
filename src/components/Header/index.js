"use client"

import React from 'react'
import Logo from './logo';
import Link from 'next/link';
import { LinkedinIcon, GithubIcon, SunIcon } from '../icons';
import { siteMetaData } from '@/src/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';

const Header = () => {

    const [mode, setMode] = useThemeSwitch();

    return (
        <header className="w-full p-6 px-12 flex items-center justify-between">
            <Logo />
            <nav className="w-max py-2 px-6 border border-solid border-dark rounded-full
                    capitalize flex items-center fixed top-5 right-1/2 translate-x-1/2
                    bg-light/80 backgrop-blur-sm z-50">
                <Link href="/" className="mr-2">Home</Link>
                <Link href="/categories/all" className="mx-2">Categories</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="http://www.abusdal.pro" target="_blank" className="mx-2 text-accent font-bold">CV</Link>
                <button className="mx-2"
                        type="button"
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    <SunIcon />
                </button>
            </nav>
            <div>
                <a href={siteMetaData.linkedin} target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetaData.github} target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                    <GithubIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            </div>
        </header>
    )
}

export default Header;
