import './WorkCardList.scss';
import PropTypes from 'prop-types';
import WorkCard from './WorkCard';

const WorkCardList = ({ workList }) => {
  return (
    <div className="word-card-list">
      {
        workList.map((work) => {
          return (
            <WorkCard key={work.title} work={work} />
          )
        })
      }
    </div>
  )
}

WorkCardList.propTypes = {
  workList: PropTypes.array,
}

export default WorkCardList;
