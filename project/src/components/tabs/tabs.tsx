import React, { useState } from 'react';
import cn from 'classnames';
import { TabNames } from '../../const';

function Tabs(props: { children: React.ReactNode }):JSX.Element {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(TabNames).map((name, index)=> (
            <li key={`${name}`} className={cn('film-nav__item', {
              'film-nav__item--active': index === activeTabIndex,
            })}
            >
              <a style={{ cursor:'pointer' }} className="film-nav__link" onClick={()=>{
                setActiveTabIndex(index);
              }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {React.Children.toArray(props.children)[activeTabIndex]}
    </>
  );
}

export default Tabs;
