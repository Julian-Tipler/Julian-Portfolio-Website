import React from 'react'
import Image from './Image'

export default function Skill(props) {
  console.log(props)
    return (
      <div>
        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <i className={props.skill.icon}></i>
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
