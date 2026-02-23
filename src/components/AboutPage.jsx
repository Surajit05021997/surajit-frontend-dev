import './AboutPage.scss';

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <div className="about-page">
          <h1 className="title">A little bit about me</h1>
          <p className="subtitle">Who I am and what I do.</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="about-page">
          <div className="body">
            <div>
              <div className="para-title">Who I am</div>
              <p>I’m Surajit, a dedicated front-end software developer based in Hyderabad, India 🇮🇳.
                With 7 years of experience in the tech industry, I specialize in building intuitive, high-performance user interfaces and transforming complex business requirements into seamless, user-centric digital experiences.</p>
            </div>
            <div>
              <div className="para-title">What I Do</div>
              <p>Currently, I am a developer at RealPage, where I contribute to large-scale data solutions. My latest project involves developing and maintaining a robust system that scrapes and processes data
                 from over 40,000 real estate websites across the USA on a daily basis. My technical toolkit spans HTML, CSS, and JavaScript, alongside modern front-end frameworks like Vue, Angular, and React.
                 This versatility allows me to adapt to complex technical challenges and craft scalable, high-impact web applications.</p>
            </div>
            <div>
              <div className="para-title">What I Did</div>
              <p>Before joining RealPage, I spent five years at Capgemini as a Front-End Developer with a strong specialization in Vue.js. During my tenure, I had the privilege of working extensively with ABN AMRO, the third-largest Dutch bank.
                Collaborating closely with cross-functional teams, my primary focus was crafting clean, intuitive interfaces that delivered secure and efficient digital experiences for the bank's extensive user base.</p>
            </div>
            <div>
              <p>Feel free to reach out via e-mail, or follow me on Twitter.
                Want to see where I’ve worked? Check out my Resume, or Connect with me on LinkedIn.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage;
