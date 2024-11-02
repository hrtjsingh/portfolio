import React from 'react'
import { contibutions } from '../data'
import Link from 'next/link'
import { Github, Link as UrlLink } from "lucide-react"
const PersonalProjects = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contibutions.map((contribution, index) => (
                    <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-lg transition-all duration-300 hover:bg-opacity-20">
                        <h3 className="text-lg font-semibold text-white mb-2">{contribution.title}</h3>
                        <p className="text-sm mb-4">{contribution.description}</p>
                        <div className="flex gap-10 ">
                            <Link href={contribution.gitLink} className="hover:text-blue-400 inline-flex gap-1 items-center transition-colors border-red-50" rel="noopener noreferrer" target="_blank">
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </Link>
                            <Link href={contribution.liveLink} className="hover:text-blue-400 gap-1 inline-flex items-center transition-colors" rel="noopener noreferrer" target="_blank">
                                <UrlLink className="h-4 w-4" />
                                <span>Visit</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PersonalProjects