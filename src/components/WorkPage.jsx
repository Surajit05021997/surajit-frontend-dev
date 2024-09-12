import './WorkPage.scss';

const WorkPage = () => {
  return (
    <>
      <div className="container">
        <div className="work-page">
          <h1 className="title">Projects</h1>
          <p className="subtitle">Projects and ideas I’ve worked on</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="work-page">
          <div className="work-list">
            <section>
              <h2>Work Experience</h2>
            </section>
            <section>
              <h2>Personal Projects</h2>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkPage;
