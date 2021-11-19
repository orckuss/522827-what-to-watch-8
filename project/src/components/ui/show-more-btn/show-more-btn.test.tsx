import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeFilmList } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import ShowMoreBtn from './show-more-btn';
import * as Redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { ActionType } from 'src/types/actions';

const mockStore = configureMockStore<GlobalState>();

describe('ShowMoreBtn component tests', () => {
  it('should render correctly when shown cards count less then total films count', () => {
    const store = mockStore({ films: { films: makeFakeFilmList(5), filmCardsCount: 3 } });

    render(
      <Provider store={store}>
        <ShowMoreBtn />
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

  it('should not render when shown cards count more then total films count', () => {
    const store = mockStore({ films: { films: makeFakeFilmList(5), filmCardsCount: 8 } });

    const { container } = render(
      <Provider store={store}>
        <ShowMoreBtn />
      </Provider>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('should not render when shown cards count equal then total films count', () => {
    const store = mockStore({ films: { films: makeFakeFilmList(5), filmCardsCount: 5 } });

    const { container } = render(
      <Provider store={store}>
        <ShowMoreBtn />
      </Provider>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('sould dispatch increase card count action when button is clicked', () => {
    const store = mockStore({ films: { films: makeFakeFilmList(5), filmCardsCount: 3 } });

    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <ShowMoreBtn />
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: ActionType.IncreaseFilmCardsCount });
  });
});
