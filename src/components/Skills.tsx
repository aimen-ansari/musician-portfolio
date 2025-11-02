const Skills = () => {
  const skills = [
    {
      name: 'Piano',
      level: 95,
      description: 'Classical, Jazz, Contemporary',
    },
    {
      name: 'Recording & Arrangements',
      level: 95,
      description: 'Acoustic & Electric',
    },
    {
      name: 'Harmonium',
      level: 80,
      description: 'Classical & Folk',
    },
    {
      name: 'Music Theory',
      level: 90,
      description: 'Composition & Arrangement',
    },
    {
      name: 'Music Production',
      level: 85,
      description: 'Digital Audio Workstation',
    },
    {
      name: 'Sight Reading',
      level: 88,
      description: 'Quick & Accurate',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-amber-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive range of musical abilities developed through years of dedication and practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-amber-500 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 mb-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Improvisation', 'Ensemble Performance', 'Audio Mixing', 'Teaching & Mentoring', 'Recording', 'Live Performance', 'Score Reading', 'Ear Training'].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 px-4 py-3 rounded-lg text-center text-gray-300 hover:text-amber-500 hover:bg-slate-800 transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
