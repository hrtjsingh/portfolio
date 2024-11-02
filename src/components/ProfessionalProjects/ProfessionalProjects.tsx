import React from 'react'
import { ProProjects } from '../data'

const ProfessionalProjects = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Professional Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ProProjects.map((project, index) => (
                    <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-lg transition-all duration-300 hover:bg-opacity-20">
                        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProfessionalProjects