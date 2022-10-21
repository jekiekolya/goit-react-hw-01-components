import PropTypes from 'prop-types'
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>Upload stats</h2>)}

          <ul className={css.stat_list}>
              {stats.map(item => (
          <li className={css.item} key={item.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
