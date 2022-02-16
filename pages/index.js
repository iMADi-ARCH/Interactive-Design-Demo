import { SkillCard, ServiceCard } from "../components/Cards";

export default function Home() {
  const skills = [
    {
      title: "HTML",
      iconifyText: "vscode-icons:file-type-html",
      githubHref:
        "ttps://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=html&sort=",
      description:
        "The skeleton of every web application. No web app can stand without HTML.",
    },
    {
      title: "CSS",
      iconifyText: "vscode-icons:file-type-css",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=css&sort=",
      description:
        "The Muscles of every web application. No web app can be called beautiful without CSS.",
    },
    {
      title: "JavaScript",
      iconifyText: "vscode-icons:file-type-js-official",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=javascript&sort=",
      description:
        "The Brain of every web application. No website can compete with one having JS.",
    },
    {
      title: "React JS",
      iconifyText: "vscode-icons:file-type-reactjs",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=javascript&sort=",
      description: "Modern frontend framework for making awesome dynamic apps.",
    },
    {
      title: "Next JS",
      iconifyText: "cib:next-js",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=javascript&sort=",
      description:
        "Frontend framework based on React JS with more useful features for even more awesome dynamic apps.",
    },
    {
      title: "Git",
      iconifyText: "cib:git",
      githubHref: null,
      description:
        "Version control i.e. tracking changes in a project and also helps in collaborating with other developers",
    },
    {
      title: "Tailwind CSS",
      iconifyText: "vscode-icons:file-type-tailwind",
      githubHref: null,
      description:
        "It contains CSS utility classes for fluid designing of webpages.",
    },
    {
      title: "Python",
      iconifyText: "vscode-icons:file-type-python",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=python&sort=",
      description:
        "Easy to use and understand programming language which has various applications",
    },
    {
      title: "C++",
      iconifyText: "vscode-icons:file-type-cpp",
      githubHref:
        "https://github.com/iMADi-ARCH?tab=repositories&q=&type=&language=cpp&sort=",
      description:
        "It contains CSS utility classes for fluid designing of webpages.",
    },
  ];

  return (
    <div>
      <main className="relative ">
        <section className="PARALLAXCONTAINER FADECONTAINER MARQUEECONTAINER relative !overflow-visible">
          <div className="PARALLAXBGTOP absolute left-0 bottom-1/2 text-[100vh] font-black leading-none text-slate-800/40 ">
            MAD
          </div>
          <div className="FADE z-10">
            {/* Desktop Version */}
            <h1
              className="MARQUEE hidden md:block text-6xl md:text-7xl lg:text-8xl whitespace-nowrap font-black"
              data-speed="-0.5"
            >
              {"MAD DESIGNS ● ".repeat(2)}
            </h1>
            {/* Mobile Version */}
            <h1
              className="MARQUEE block md:hidden text-5xl sm:text-8xl font-black"
              data-speed="-0.5"
            >
              CREATIVE DESIGNER
            </h1>
            <h2
              className="MARQUEE text-xl md:text-3xl whitespace-pre-wrap text-slate-200 font-bold"
              data-speed="-0.2"
            >
              Hi! I am Aditya, and I design unique experiences worth remembering
            </h2>
          </div>
        </section>

        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid gap-10 grid-cols-1 justify-items-center lg:grid-cols-2">
          <div className="FADE section-text">
            <h1 className="section-heading">I am a pixel perfectionist</h1>
            <p className="text-justify font-light leading-relaxed">
              Every component in every website must to follow certain
              proportions.
            </p>
          </div>
          <div className="section-gallery">
            <img
              src="/assets/pics/cat-and-mouse.jpg"
              alt=""
              className="PARALLAX"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/cat-cute.png"
              alt=""
              className="PARALLAX"
              data-depth="0.2"
            />
          </div>
        </section>
        <section className="FADECONTAINER PARALLAXCONTAINER z-10 grid gap-10 grid-cols-1 justify-items-center lg:grid-cols-2">
          <div className="section-gallery left-0">
            <img
              src="/assets/pics/cat-abstract.jpg"
              alt=""
              className="PARALLAX"
              data-depth="-0.2"
            />
            <img
              src="/assets/pics/happybday.jpg"
              alt=""
              className="PARALLAX"
              data-depth="0.2"
            />
          </div>
          <div className="FADE section-text">
            <h1 className="section-heading">
              I create websites worth remembering
            </h1>
            <p className="text-justify font-light leading-relaxed">
              You are going to visit this site again.... right?
            </p>
          </div>
        </section>
        <section className="PARALLAXCONTAINER overflow-hidden FADECONTAINER">
          <div className="PARALLAXBG">
            <img src="/assets/pics/windows.jpg" />
          </div>
          <div className="FADE text-slate-900">
            <h1 className="section-heading">I am a Learner</h1>
            <h2 className="text-2xl font-normal">
              I may make mistakes... But only once.
            </h2>
            <p className="text-justify font-light leading-relaxed">
              I try multiple methods of doing a task then choose the best one
              based on 4 factors - Performance, Minimalism, Readability, and
              Beautifulness
            </p>
          </div>
        </section>

        <section className="flex-col justify-center">
          <h1 className="section-heading">My Skills</h1>
          <div className="section-grid">
            {skills.map((skill, index) => (
              <SkillCard
                title={skill.title}
                githubHref={skill.githubHref}
                iconifyText={skill.iconifyText}
                key={index}
              >
                {skill.description}
              </SkillCard>
            ))}
          </div>
        </section>

        <section className="flex-col">
          <h1 className="section-heading">My Services</h1>

          <div className="section-grid">
            <ServiceCard
              title="Static website using Next js"
              description="This package includes a basic website with 3 pages. Best for portfolios."
              price="30$"
              delivery="5 days"
              revisions="Unlimited"
              featuresList={[
                "3 Pages",
                "Design Customization",
                "Content Upload",
                "Responsive Design",
                "Included Source Code",
              ]}
            />
            <ServiceCard
              title="Landing page with React js"
              description="Static Landing page with 4 sections made with React JS in 5 days."
              price="5$"
              delivery="5 days"
              revisions="Unlimited"
              featuresList={[
                "Opt-In Form",
                "Social Media Icons",
                "4 Sections Included",
                "Responsive Design",
                "Included Source Code",
              ]}
            />
          </div>
        </section>

        {/* <section className="relative h-[300vh] grid grid-cols-1 grid-rows-1">
          <VidCanvas
            folderPath="/assets/vids/madintro2"
            ext="jpg"
            totalFrames="45"
            className="absolute inset-0"
            end="+=200%"
          />
          <div className="FADECONTAINER py-10 even:items-end grid grid-cols-1 grid-rows-3 justify-items-center items-center h-full">
            <div className="section-text FADE flex flex-col justify-center self-center">
              <h1 className="section-heading">Expert in HTML, CSS and JS </h1>
              <h2 className="text-2xl font-normal">
                HTML, CSS and JS Everywhere.
              </h2>
              <p className="text-justify font-light leading-relaxed">
                The skeleton of every damn webpage.
              </p>
            </div>
            <div className="section-text FADE flex flex-col justify-center self-center items-end text-right">
              <h1 className="section-heading">
                Intermediate React JS and Next JS Developer
              </h1>
              <h2 className="text-2xl font-normal">
                For performant single page web applications.
              </h2>
              <p className="text-justify font-light leading-relaxed">
                Who doesnt likes SPAs?
              </p>
            </div>
            <div className="section-text FADE flex flex-col justify-center self-center">
              <h1 className="section-heading">Lorem, ipsum dolor.</h1>
              <h2 className="text-2xl font-normal">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="text-justify font-light leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quam!
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
