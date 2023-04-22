import { useState, useEffect } from 'react';
import './range-slider.scss';

export function RangeSlider({ min, max, value, step, onChange }) {
  const [rangeValue, setRangeValue] = useState(value ? value.min : min);

  useEffect(() => {
    if (value) {
      setRangeValue(value);
    }
  }, [value]);

  const handleChange = (e) => {
    e.preventDefault();
    const newVal = +e.target.value;
    if (!value) setRangeValue(newVal);
    onChange(newVal);
  };

  const valuePosition = ((rangeValue - min) / (max - min)) * 100;

  const separatorSize = parseInt(max) / parseInt(step);

  return (
    <div className="range-slider">
      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          value={rangeValue}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
        />
      </div>

      <div className="control-wrapper">
        <div className="control" style={{ left: `${valuePosition - 1}%` }} />
        <div className="rail">
          {Array.from({ length: separatorSize }, (_, i) => (
            <span
              className={i > 0 ? 'rail__separator' : ''}
              style={{ position: 'absolute', left: `${i * (100 / max)}%` }}
              key={i}
            ></span>
          ))}
          <div
            className="inner-rail"
            style={{
              left: `0`,
              width: `${valuePosition}%`,
              background: `${
                valuePosition == 20
                  ? '#B9AEFF'
                  : valuePosition == 40
                  ? 'linear-gradient(to right, #B9AEFF 50%, #745CFF 100%)'
                  : valuePosition == 60
                  ? 'linear-gradient(to right, #B9AEFF 33.3333%, #745CFF 66.66666%, #2E0BFF 100%)'
                  : valuePosition == 80
                  ? 'linear-gradient(to right, #B9AEFF 25%, #745CFF 50%, #2E0BFF 75%, #1B00B8 100%)'
                  : valuePosition == 100
                  ? 'linear-gradient(to right, #B9AEFF 20%, #745CFF 40%, #2E0BFF 60%, #1B00B8 80%, #0F0067 100%)'
                  : ''
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
