'use client';

import { ProjectData } from '@/data/ProjectData';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div
      id="projects"
      className="pb-20 md:pb-20 flex flex-row w-full flex-wrap"
    >
      <div className="w-full md:flex-none md:w-[25%] lg:flex-1">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl mb-6">
          Projects
        </h2>
      </div>
      <div className="flex-1 md:flex-1">
        {ProjectData.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="proj-card flex flex-col md:flex-row p-6 mb-10 rounded-md hover:bg-slate-500/10">
              <div className="mr-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={113}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold pb-2">{project.title}</h3>
                <p className="pb-2">{project.description}</p>
                <span>
                  {project.skills.map(skill => (
                    <ul key={skill} className="flex-wrap inline-flex">
                      <li className="text-sm px-3 py-1 rounded-full m-1 mt-2 bg-gradient-to-br from-pink-800 to-violet-900">
                        {skill}
                      </li>
                    </ul>
                  ))}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
