import './TechStackPage.scss';
import techListLanguageFramework from '../constants/techListLanguageFramework.json';
import techListTool from '../constants/techListTool.json';
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
            <div className="tech-list">
              <h2 className="tech-list-title">Languages and frameworks</h2>
              <div className="tech-card-list">
                {
                  techListLanguageFramework.map((tech) => {
                    return (
                      <TechCard iconPath="/src/assets/icons/tech" iconName={tech.iconName} techName={tech.techName} key={tech.iconName} />
                    )
                  })
                }
              </div>
            </div>
            <div className="tech-list">
              <h2 className="tech-list-title">Tools</h2>
              <div className="tech-card-list">
                {
                  techListTool.map((tech) => {
                    return (
                      <TechCard iconPath="/src/assets/icons/tech" iconName={tech.iconName} techName={tech.techName} key={tech.iconName} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechStackPage;
