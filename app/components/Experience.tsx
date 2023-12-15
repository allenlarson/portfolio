import { ExpData } from '@/data/ExpData';
import Link from 'next/link';

const Experience = () => {
  return (
    <div id="experience" className="my-32 flex flex-row w-full flex-wrap">
      <div className="w-full md:flex-1">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl">
          Experience
        </h2>
      </div>
      <div className="flex-1">
        {ExpData.map((exp, index) => (
          <Link
            key={index}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex p-6 mb-10 rounded-md hover:bg-slate-500/10">
              <div className="flex pr-8 mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                <span>
                  {exp.start}
                  {` — ${exp.end}`}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{exp.company}</h3>
                <span className="text-slate-400 py-1">
                  {exp.title}
                  {' • '}
                </span>
                <span className="text-slate-400 py-1 tracking-widest">
                  {exp.loc}
                </span>
                <p>{exp.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
