import './WorkPage.scss';
import { useEffect, useState } from 'react';
import WorkCardList from './shared/WorkCardList';
import selectedWorkList from '../constants/selectedWorkList.json';

const WorkPage = () => {
  const [selectedProfessionalWorkList, setSelectedProfessionalWorkList] = useState([]);
  const [selectedPersonalWorkList, setSelectedPersonalWorkList] = useState([]);

  useEffect(() => {
    setSelectedProfessionalWorkList(selectedWorkList.filter((work) => work.type === 'professional'));
    setSelectedPersonalWorkList(selectedWorkList.filter((work) => work.type === 'personal'));
  }, []);

  return (
    <>
      <div className="container">
        <div className="work-page">
          <h1 className="title">Projects</h1>
          <p className="subtitle">Projects and ideas I’ve worked on.</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="work-page">
          <div className="work-list">
            <section>
              <h2 className="work-list-title">Work Experience</h2>
              <WorkCardList workList={selectedProfessionalWorkList} />
            </section>
            <section>
              <h2 className="work-list-title">Personal Projects</h2>
              <WorkCardList workList={selectedPersonalWorkList} />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage;
