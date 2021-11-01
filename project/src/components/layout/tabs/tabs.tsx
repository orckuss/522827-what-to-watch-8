import { ReactNode, useEffect, useState } from 'react';

export type TabConfig = {
  caption: string;
  component: ReactNode;
};

type Props = {
  tabs: Array<TabConfig>;
};

function Tabs({ tabs }: Props): JSX.Element {
  const [active, setActive] = useState<string>(tabs[0].caption);
  const [component, setComponent] = useState<ReactNode>(null);

  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.caption === active);
    setComponent(activeTab?.component);
  }, [tabs, active]);

  return (
    <>
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
                }}
              >
                {tab.caption}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {component}
    </>
  );
}

export default Tabs;
