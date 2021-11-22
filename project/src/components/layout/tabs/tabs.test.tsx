import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs, { TabConfig } from './tabs';

const tabs: Array<TabConfig> = [
  {
    caption: 'firstTab',
    component: function FirstTab(): JSX.Element { return <p>First Tab</p>; },
  },
  {
    caption: 'secondTab',
    component: function SecondTab(): JSX.Element { return <p>Second Tab</p>; },
  },
];

describe('Tabs tests', () => {
  const [firstTab, secondTab] = tabs;

  it('render correct', () => {
    const { container } = render(
      <Tabs tabs={tabs} />,
    );

    expect(screen.getByText(firstTab.caption)).toBeInTheDocument();
    expect(screen.getByText(secondTab.caption)).toBeInTheDocument();
    expect(container.querySelector('.film-nav__item--active')).toHaveTextContent(firstTab.caption);

    expect(screen.getByText('First Tab')).toBeInTheDocument();
    expect(screen.queryByText('Second Tab')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(firstTab.caption));

    expect(screen.getByText('First Tab')).toBeInTheDocument();
    expect(screen.queryByText('Second Tab')).not.toBeInTheDocument();
  });
});
