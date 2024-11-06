import React from 'react'

import Link from 'next/link'
import { socialAccounts } from '../data'
import Image from 'next/image'
import sampleImage from "../../assets/pp.jpg"
const Header = () => {
    return (
        <header>
            <div className="hidden lg:flex w-full justify-end mb-12">
                <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 ">
                    <span className="font-bold text-sm flex items-center justify-center gap-2 text-white space-x-2 ">
                        <Image alt="Avatar" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" className="transition duration-500 blur-0 scale-100 rounded-full" src={sampleImage} style={{ color: "transparent" }} />
                        <span className="font-inter font-bold">Hartej Singh</span>
                    </span>
                    {/* <Link className="text-white text-sm relative hover:text-blue-400 transition-colors duration-300" href="/about">
                        <span className="relative z-10 px-2 py-2 inline-block">About</span>
                    </Link> */}
                    {/* <Link className="text-white text-sm relative hover:text-blue-400 transition-colors duration-300" href="/guest-book">
                        <span className="relative z-10 px-2 py-2 inline-block">Guest Book</span>
                    </Link> */}
                </div>
            </div>
            <div className='flex justify-between items-start mb-12'>
                <div>
                    <h1 className="text-3xl font-bold text-white">Hartej Singh</h1>
                    <p className="text-blue-400">Frontend Developer</p>
                </div>
                <div className="flex space-x-4 mt-2">
                    {socialAccounts.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link key={index} href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300" rel="noopener noreferrer" target="_blank">
                                <Icon className="h-4 w-4 md:h-6 md:w-6" />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header