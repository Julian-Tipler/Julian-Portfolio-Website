import React from 'react'
import Image from './Image'

export default function Language(props) {
    return (
      <div>
        <div className="tiles-item reveal-from-bottom">
          <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
                <Image
                  src={require("./../../assets/images/feature-tile-icon-01.svg")}
                  alt="Features tile icon 01"
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">Robust Workflow</h4>
              <p className="m-0 text-sm">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
