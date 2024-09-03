import './HomePage.scss';
import AppButton from './shared/AppButton';
import resume from '../assets/files/Resume.pdf';
import WorkCard from './shared/WorkCard';
import selectedWorkList from '../constants/selectedWorkList.json';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [selectedProfessionalWorkList, setSelectedProfessionalWorkList] = useState([]);
  const [selectedPersonalWorkList, setSelectedPersonalWorkList] = useState([]);

  useEffect(() => {
    setSelectedProfessionalWorkList(selectedWorkList.filter((work) => work.type === 'professional'));
    setSelectedPersonalWorkList(selectedWorkList.filter((work) => work.type === 'personal'));
  }, []);

  return (
    <div className="homepage">
      <section className="hp-about">
        <h1 className="title"><span>I&apos;m</span> Surajit</h1>
        <p className="body">As a passionate Front End Developer, I specialize in crafting visually stunning and highly functional web experiences.
          Explore my portfolio to see how I combine design flair with technical precision to build engaging websites.</p>
        <div className="btn-group">
          <a href={resume} download="Resume">
            <AppButton label="See my resume" />
          </a>
          <AppButton label="Get in touch" type="secondary" />
        </div>
      </section>

      <section className="hp-work">
        <h2 className="title">Selected Work</h2>
        <section className="work-experience">
          <h3 className="title">Work Experience</h3>
          <div className="word-card-list">
            {
              selectedProfessionalWorkList.map((work) => {
                return (
                  <WorkCard key={work.title} work={work} />
                )
              })
            }
          </div>
        </section>
        <section className="personal-projects">
          <h3 className="title">Personal Projects</h3>
          <div className="word-card-list">
            {
              selectedPersonalWorkList.map((work) => {
                return (
                  <WorkCard key={work.title} work={work} />
                )
              })
            }
          </div>
        </section>
      </section>
    </div>
  );
}

export default HomePage;
