import { ExpData } from '@/data/ExpData';
import Link from 'next/link';

const Experience = () => {
  return (
    <div id="experience" className="py-52 flex flex-row w-full flex-wrap">
      <div className="w-full md:flex-none md:w-[25%] lg:flex-1">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl mb-6">
          Experience
        </h2>
      </div>
      <div className="flex-1 md:flex-1">
        {ExpData.map((exp, index) => (
          <Link
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="exp-card flex flex-col md:flex-row p-6 mb-10 rounded-md hover:bg-slate-500/10">
              <div className="md:flex pr-8 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                <span>
                  {exp.start}
                  {` — ${exp.end}`}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold pb-2">{exp.company}</h3>
                <span className="text-slate-300">
                  {exp.title}
                  {' • '}
                </span>
                <span className="text-slate-400 ">{exp.loc}</span>
                <p className="pt-2">{exp.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
