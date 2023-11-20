"use client"
import React, { useState } from 'react'
import Logo from './logo';
import Link from 'next/link';
import { LinkedinIcon, GithubIcon, SunIcon } from '../icons';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import siteMetaData from '@/src/utils/siteMetaData';

const Header = () => {

    const [mode, setMode] = useThemeSwitch();
    const [click, setClick] = useState(false);

    const toggleBurgerMenu = () => {
        setClick(!click);
    }

    return (
        <header className="w-full p-6 px-5 sm:px-10 flex items-center justify-between">
            <Logo />
            <button type="button"
                    className="inline-block sm:hidden z-50 fixed right-10"
                    onClick={toggleBurgerMenu}
                    aria-label="Hamburger Menu">
                <div className="w-7 cursor-pointer transition-all ease duration-300">
                    <div className="relative">
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200"
                                style={{
                                    transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(8px)"
                                }}>&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200" style={{
                                    opacity: click ? 0 : 1
                                }}>&nbsp;</span>
                        <span className="absolute top-0 inline-block w-full h-1 bg-dark
                                dark:bg-light rounded transition-all ease duration-200"
                                style={{
                                    transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-8px)"
                                }}>&nbsp;</span>
                    </div>
                </div>
            </button>
            <nav className="w-max py-3 px-5 border border-solid border-dark
                    rounded-3xl text-lg top-20
                    capitalize flex flex-col sm:hidden items-center fixed translate-x-1/2
                    bg-light/80 backgrop-blur-sm z-50 transition-all ease duration-500"
                    style={{
                        right: click ? "6rem" : "-15rem"
                    }}>
                <Link href="/" className="hover:text-accent mt-1">Home</Link>
                <Link href="/categories/all" className="my-2 hover:text-accent">Categories</Link>
                <Link href="/about" className="my-0 hover:text-accent">About</Link>
                <Link href="http://www.abusdal.pro" target="_blank"
                        className="my-2 hover:text-accent font-bold">CV</Link>
                <button className="my-1"
                        type="button"
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    <SunIcon />
                </button>
            </nav>

            <nav className="w-max py-2 px-2 md:px-4 border border-solid border-dark
                    rounded-full text-sm md:text-base lg:text-lg
                    capitalize hidden sm:flex items-center fixed top-5 right-1/2 translate-x-1/2
                    bg-light/80 backgrop-blur-sm z-50">
                <Link href="/" className="hover:text-accent ml-1">Home</Link>
                <Link href="/categories/all" className="mx-2 hover:text-accent">Categories</Link>
                <Link href="/about" className="mx-0 hover:text-accent">About</Link>
                <Link href="http://www.abusdal.pro" target="_blank"
                        className="mx-2 hover:text-accent font-bold">CV</Link>
                <button className="mr-1"
                        type="button"
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    <SunIcon />
                </button>
            </nav>
            <div className="hidden sm:flex items-center">
                <a href={siteMetaData.linkedin}
                        target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                    <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
                <a href={siteMetaData.github}
                        target="_blank" rel="noreferrer" className="inline-block w-6 h-6 mr-4">
                    <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
            </div>
        </header>
    )
}

export default Header;
