import React from 'react'
import { experiances } from '../data'

const WorkExperience = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Work Experience</h2>
            {experiances.map((job, index) => (
                <div key={index} className="mb-6 bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-lg transition-all duration-300 hover:bg-opacity-20">
                    <h3 className="text-lg font-semibold text-white">{job.title} <span className="text-blue-400">@ {job.company}</span></h3>
                    <p className="text-sm text-gray-400 mb-2">{job.date}</p>
                    <p className="text-sm">{job.description}</p>
                </div>
            ))}
        </section>
    )
}

export default WorkExperience