import React from 'react'

export default function Skill(props) {
    return (
      <div style={{width: "150px"}}>
        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <i className={`skill-image ${props.skill.icon}`}/>
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">{props.skill.name}</h4>
            </div>
          </div>
        </div>
      </div>
    );
}
