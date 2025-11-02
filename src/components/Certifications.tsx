import { Award, Calendar, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Master of Music - Piano Performance',
      issuer: 'Juilliard School',
      year: '2015',
      description: 'Advanced studies in classical piano performance and pedagogy',
    },
    {
      title: 'Experience Certificate - Professional Musician',
      issuer: 'Modernage Public School & College',
      year: '2016',
      description: 'Experince as a professional musician and music educator.',
    },
    {
      title: 'Service Certificate',
      issuer: 'Moderanage public School & College',
      year: '2014',
      description: 'Professional certification in music instruction and curriculum development.',
    },
    {
      title: 'Certificate Of Participation - Workshop',
      issuer: 'MS Paula Bass Institute Of Professional Development',
      year: '2011',
      description: 'Specialized training workshop, held at Yousaf Auditorium, Modernage Abbottabad from 3rd to 5th Jan, 2011.',
    },
    {
      title: 'Performance in PTV Drama Serial',
      issuer: 'Hazara Arts Council Affiliated With Cultural Ministry N.W.F.P',
      year: '2009',
      description: 'Savi Chhan in 2009 PTV Drama Serial.',
    },
    {
      title: 'Certificate Of Participation - Workshop',
      issuer: 'Modernage Abbottabad',
      year: '2008',
      description: '4- Day in Service Comprehensive Summer Workshop held at Yousaf Auditorium.',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-amber-500">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Formal recognition of expertise and dedication to musical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.year}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-3 font-medium">{cert.issuer}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{cert.description}</p>
              <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-500 to-yellow-600 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Continuous Learning</h3>
          <p className="text-slate-800 text-lg max-w-2xl mx-auto">
            Music is an endless journey of discovery. I continuously update my skills through workshops,
            masterclasses, and collaborations with fellow musicians worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
