import { ReactNode, useState } from 'react';

export type TabConfig = {
  caption: string;
  component: ReactNode;
};

type Props = {
  tabs: Array<TabConfig>;
  className?: string;
};

function Tabs({ tabs, className = '' }: Props): JSX.Element {
  const [initTab] = tabs;
  const [active, setActive] = useState<string>(initTab.caption);
  const [component, setComponent] = useState<ReactNode>(initTab.component);

  return (
    <div className={className}>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab) => (
            <li
              key={tab.caption}
              className={`film-nav__item ${active === tab.caption && 'film-nav__item--active'}`}
            >
              <a
                href="/"
                className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  setActive(tab.caption);
                  setComponent(tab.component);
                }}
              >
                {tab.caption}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {component}
    </div>
  );
}

export default Tabs;
