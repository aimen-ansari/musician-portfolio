import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
{
  role: 'Music Educator',
  organization: 'Classic School System',
  location: 'Sialkot - Main Branch',
  period: 'Nov, 2025 - Present',
  description: 'Teaching music theory, piano, and composition to students across different age groups while nurturing creativity and performance confidence.',
  highlights: ['Conducting music classes', 'Preparing students for performances', 'Creating engaging lesson plans']
}
,
    {
      role: 'A Senior Music Artist',
      organization: 'Self-Employed',
      location: 'Brands Village, Sialkot - Pakistan',
      period: '2018 - Present',
      description: 'Operate an independent music studio where I compose, record, and produce original tracks, handle sound design, and manage all aspects of music creation from composition to final mastering',
      highlights: ['500+ Compositions', 'Make Recordings', 'Mixing & Mastering'],
    },
    {
      role: 'Educator',
      organization: 'Modernage Public School & College',
      location: 'Mansehra Road, Abbottabad, Pakistan',
      period: '2014 - 2016',
      description: 'Providing personalized music instruction in piano, theory, and composition to students of all ages and skill levels.',
      highlights: ['100+ students taught', 'Multiple platinum records', 'Film score contributions'],
    },
    {
      role: 'Educator',
      organization: 'Modernage Public School & College',
      location: 'Mansehra Road, Abbottabad, Pakistan',
      period: '2007 - 2010',
      description: 'Taught music theory and piano to high school and college students, fostering a love for music and developing their technical skills.',
      highlights: ['3+ years of teaching experience', 'Attended Workshops', 'Award-winning performances'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional <span className="text-amber-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through various musical roles and accomplishments
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-yellow-600 to-amber-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-6 ring-4 ring-slate-800"></div>

                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-amber-500" />
                        <span className="text-amber-500 font-semibold">{exp.period}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.organization} • {exp.location}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
