import { ProjectData } from '@/data/ProjectData';

const Projects = () => {
  return (
    <div id="experience" className="my-32 flex flex-row w-full flex-wrap">
      <div className="w-full md:flex-1">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-3xl">
          Experience
        </h2>
      </div>
      <div className="flex-1">
        <ul>
          {ProjectData.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.skills}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Company
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
