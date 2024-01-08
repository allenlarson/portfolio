const Skills = () => {
  const mSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Nextjs',
    'Tailwind CSS',
    'MySQL',
    'WordPress',
    'WooCommerce',
  ];

  const oSkills = ['Photoshop', 'Illustrator', 'SEO', 'Figma'];

  return (
    <div id="skills" className="pt-32 md:pt-40 flex flex-row w-full flex-wrap">
      <div className="w-full md:flex-none md:w-[25%] lg:flex-1">
        <h2 className="font-bold uppercase tracking-widest text-2xl md:text-xl mb-6">
          Skills
        </h2>
      </div>
      <div className="flex-1 md:flex-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-2 ml-2">
          Main Skills:
        </p>
        {mSkills.map(skill => (
          <ul key={skill} className="flex-wrap inline-flex">
            <li className="text-md px-5 py-1 rounded-full m-1 mt-2 bg-slate-500/10 hover:bg-gradient-to-br from-pink-800 to-violet-900">
              {skill}
            </li>
          </ul>
        ))}
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 mt-6 mb-2 ml-2">
          Other Skills:
        </p>
        {oSkills.map(skill => (
          <ul key={skill} className="flex-wrap inline-flex">
            <li className="text-md px-5 py-1 rounded-full m-1 mt-2 bg-slate-500/10 hover:bg-gradient-to-br from-pink-800 to-violet-900">
              {skill}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;
