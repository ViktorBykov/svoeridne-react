import React, { useEffect, useRef, useState } from "react";
import CollapsibleFilter from "./collapsibleFilter";

import "./priceFilter.css";

export default function PriceFilter({ min, max, value, onChange }) {
  const [minVal, setMinVal] = useState(value[0]);
  const [maxVal, setMaxVal] = useState(value[1]);
  const minGap = 5;
  const trackRef = useRef();

  useEffect(() => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  }, [value]);

  useEffect(() => {
    if (trackRef.current) {
      const minPercent = ((minVal - min) / (max - min)) * 100;
      const maxPercent = ((maxVal - min) / (max - min)) * 100;
      trackRef.current.style.left = `${minPercent}%`;
      trackRef.current.style.right = `${100 - maxPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), maxVal - minGap);
    setMinVal(val);
    onChange([val, maxVal]);
  };

  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), minVal + minGap);
    setMaxVal(val);
    onChange([minVal, val]);
  };

  return (
    <div className="price-filter">
      <CollapsibleFilter>
        <h5 className="filter-title">Ціна</h5>
        <div className="filter-content">
          <div className="input-box">
            <input
              type="number"
              value={minVal}
              min={min}
              max={maxVal - minGap}
              onChange={handleMinChange}
            />
            <input
              type="number"
              value={maxVal}
              min={minVal + minGap}
              max={max}
              onChange={handleMaxChange}
            />
          </div>
          <div className="range-slider" style={{ position: "relative" }}>
            <div className="slider-track" ref={trackRef}></div>
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={handleMinChange}
              className="min-val"
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={handleMaxChange}
              className="max-val"
            />
          </div>
        </div>
      </CollapsibleFilter>
    </div>
  );
}