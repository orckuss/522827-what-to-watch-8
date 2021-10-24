import { ReactNode, useState } from 'react';

export type TabConfig = {
  caption: string;
  component: ReactNode;
};

type Props = {
  tabs: Array<TabConfig>;
};

function Tabs({ tabs }: Props): JSX.Element {
  const [active, setActive] = useState<TabConfig>(tabs[0]);

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li
              key={tab.caption}
              className={`film-nav__item ${active === tab && 'film-nav__item--active'}`}
            >
              <a
                href="/"
                className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  setActive(tab);
                }}
              >
                {tab.caption}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {active.component}
    </>
  );
}

export default Tabs;
