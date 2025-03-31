
// Components
import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/images/html-5.svg',
      label: 'HTML',
      desc: 'Markup Language'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/bootstrap-logo.svg',
      label: 'Bootstrap',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/c-programming.svg',
      label: 'C ',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/c++.svg',
      label: 'C++ ',
      desc: 'Programming Language'
    },
];

const Skills = () => {

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                  Technologies and Tools
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[500ch] reveal-up">
                I have utilized various technologies and tools to design, develop and optimize projects, focusing on creating scalable, efficient, and interactive applications. Through continuous learning and hands-on experience, I have refined my skills in both development and problem-solving.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">
                    {
                        skillItem.map(({imgSrc, label, desc}, key) => (
                            <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
}

export default Skills;