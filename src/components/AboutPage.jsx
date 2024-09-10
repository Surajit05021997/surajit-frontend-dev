import './AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="about-page">
        <h1 className="title">A little bit about me</h1>
        <p className="subtitle">Who I am and what I do.</p>
        <div className="body">
          <div>
            <div className="para-title">Who I am</div>
            <p>I’m Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.</p>
          </div>
          <div>
            <div className="para-title">What I Do</div>
            <p>With two years of invaluable experience in my role at Harmony Technology –– a tech company based here in Rabat,
              I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences.
              During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health,
              Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications
              that directly impact the lives of Moroccan citizens.</p>
          </div>
          <div>
            <div className="para-title">What I Did</div>
            <p>Before delving into the realm of front end engineering, I spent five years as a graphic designer.
              This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles.
              It enables me to seamlessly blend functionality and visual appeal in every project I undertake.</p>
          </div>
          <div>
            <p>Feel free to reach out via e-mail, or follow me on Twitter.
              Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
