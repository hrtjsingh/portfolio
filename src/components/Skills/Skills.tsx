import React from 'react'
import { skills } from '../data'

const Skills = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-white bg-opacity-10 backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-opacity-20">{skill}</span>
                ))}
            </div>
        </section>
    )
}

export default Skills