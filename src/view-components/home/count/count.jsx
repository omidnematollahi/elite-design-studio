import React, { useEffect, useState } from 'react';

import './count.scss';

const Count = (props) => {
  const { label, number, duration, extraCharacter } = props.data;

  const [count, setCount] = useState('0');

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));

    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <div className="count">
      <div className="count__number">
        {extraCharacter ? <span className="count__char">{extraCharacter}</span> : ''}
        <span>{count}</span>
      </div>
      <div className="count__label">{label}</div>
    </div>
  );
};

export default Count;
