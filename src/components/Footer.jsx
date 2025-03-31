
// Components
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Profiles',
      href: '#profiles'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
];
  
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/lakshy-2004'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lakshya-sharma-67b20a275/'
  },
  {
    label: 'Discord',
    href: 'https://discord.com/users/1028339369255374901'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lakshya_sharma2004?igsh=ajc5b3l5dHZrYWdz'
  },
];

const Footer = () => {

    return (
        <footer className="section">
            <div className="container">
                
                <div className="lg:grid lg:grid-cols-2 ">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up"> 
                        Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                            href="/"
                            label="Start Project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {
                                    sitemap.map(({label, href}, key) => (
                                        <li key={key}>
                                            <a 
                                            href={href} 
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2  reveal-up">Socials</p>

                            <ul>
                                {
                                    socials.map(({label, href}, key) => (
                                        <li key={key}>
                                            <a 
                                            href={href} 
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200  reveal-up">
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;