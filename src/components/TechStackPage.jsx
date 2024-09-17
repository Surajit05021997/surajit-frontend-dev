import './TechStackPage.scss';
import techStackList from '../constants/techStackList.json';
import TechCard from './shared/TechCard';

const TechStackPage = () => {
  return (
    <>
      <div className="container">
        <div className="tech-stack-page">
          <h1 className="title">Tech Stack</h1>
          <p className="subtitle">Languages, frameworks and tools I use.</p>
        </div>
      </div>
      <hr />
      <div className="container">
      <div className="tech-stack-page">
        <div className="tech-list-container">
          <h2 className="tech-list-title">Languages, frameworks and tools</h2>
          <div className="tech-list">
            {
              techStackList.map((tech) => {
                return (
                  <TechCard iconPath="/src/assets/icons/tech" iconName={tech.iconName} techName={tech.techName} key={tech.iconName} />
                )
              })
            }
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default TechStackPage;
