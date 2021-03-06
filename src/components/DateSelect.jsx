import React from 'react';

import { dates } from '../helpers';
import FadeLoader from './ui/FadeLoader';
import '../assets/scss/pages/Jobs.scss';
import '../assets/scss/components/_input.scss';

class DateSelect extends React.Component {
  render() {
    const { dateFilter: value, handleChange, loading } = this.props;

    return (
      <div className="date-select">
        <h3 className="date-select__title">
          <i className="fa fa-calendar-alt" /> &nbsp;
          <strong>FECHA DE PUBLICACIÓN</strong>
        </h3>
        <select
          style={{ width: '180px', textAlign: 'center' }}
          value={value}
          onChange={handleChange}
          className="Form__Input Select"
        >
          <option value="">Todas</option>
          {dates.map((date, index) => {
            return (
              <option value={date.value} key={index}>
                {date.name}
              </option>
            );
          })}
        </select>
        {loading ? <FadeLoader loading={loading} /> : null}
      </div>
    );
  }
}

export default DateSelect;
