

const aboutItems = [
    {
      label: 'Project done',
      number: 45
    },
    {
      label: 'Years of experience',
      number: 10
    }
  ];

const About = () => {


    return (
        <section
        id="about" 
        className="section"
        > 
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">

                    <h2 className="headline-2 pb-5 reveal-up">
                        About Me
                    </h2>

                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] text-justify reveal-up">
                    Hello, I am Lakshya Sharma, an IT student interested in coding and problem-solving. I am good at C, C++, Data Structures, and Algorithms, holding a 3-star rating on CodeChef and Pupil level on Codeforces. I am also involved in full-stack development with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I always look forward to learning and attempting new things. Let's build something great together!
                    </p>

                    {/* Projects and Experiences */}
                    {/* <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({label , number},key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                        <img 
                        src="/images/linkedin.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div> */}
                </div>

            </div>
        </section>
    );
}

export default About;