import React, { useState } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";
import TuneIcon from '@mui/icons-material/Tune';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function Filter({ selectedFilter, setSelectedFilter }) {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
        
      ))}
      <div className="right_content">
      <div className="filter__space">
        
        
        <div className="filter__icon">
        <TuneIcon className="Tuneicon"/>
        </div>
        <div className="filter__name">Filters</div>
      </div>
      <div className="toggle__space">
        
      <div className="toggle__name">Display before Taxes</div>
        <div className="filter__icon">
        <ToggleOffIcon className="Toggleofficon"/>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Filter;
