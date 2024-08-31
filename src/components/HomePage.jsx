import './HomePage.scss';
import AppButton from './shared/AppButton';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hp-about">
        <h1 className="title"><span>I&apos;m</span> Surajit</h1>
        <p className="body">As a passionate Front End Developer, I specialize in crafting visually stunning and highly functional web experiences.
          Explore my portfolio to see how I combine design flair with technical precision to build engaging websites.</p>
        <div className="btn-group">
          <AppButton label="See my resume" />
          <AppButton label="Get in touch" type="secondary" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
