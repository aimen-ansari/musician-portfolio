import { Music, Heart, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Music,
      title: '25+ Years',
      description: 'Musical Experience',
    },
    {
      icon: Award,
      title: '50+ Performances',
      description: 'Live Shows & Concerts',
    },
    {
      icon: Users,
      title: '200+ Students',
      description: 'Taught & Mentored',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'About Every Note',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-amber-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
Music has been more than just a passion, it’s been my journey and identity. From the first time I placed my hands on a piano, I knew that music would define my life’s path. Over the years, I’ve refined my craft as a professional pianist, performing and collaborating in the northern regions of Pakistan, including Abbottabad, and beyond.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through my experiences, I’ve mastered the art of composition, production, arrangement, and performance, embracing every form of musical expression. Today, I proudly run QStudio, where creativity meets sound. At QStudio, I specialize in all domains of music — from composing and recording to teaching and live sessions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
             My mission is simple: to create soulful music that resonates, inspire upcoming artists, and continue evolving with every note I play.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <item.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
