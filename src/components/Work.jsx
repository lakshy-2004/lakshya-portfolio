
// components
import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: '/images/check.png',
        title: 'Todo List',
        tags: ['Bootstrap','Authentication','MERN Stack',],
        projectLink: 'https://todo-eta-red-68.vercel.app/'
    },
    {
      imgSrc: '/images/portfolio-project.png',
      title: 'Portfolio',
      tags: ['Tailwind Css', 'React'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/drum-kit.png',
      title: 'Drum Kit',
      tags: ['HTML', 'CSS' , 'JS'],
      projectLink: 'https://lakshy-2004.github.io/Drum-Kit/'
    },
    {
      imgSrc: '/images/simon-game.png',
      title: 'Simon Game',
      tags: ['HTML', 'CSS' , 'JS'],
      projectLink: 'https://lakshy-2004.github.io/Simon-Game/'
    },
];

const Work = () => {

    return (
        <section 
        id="projects"
        className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    Projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({imgSrc, title, tags, projectLink },key) => (
                            <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
}

export default Work;