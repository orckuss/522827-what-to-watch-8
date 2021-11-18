import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeFilm } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import AddReviewForm from './add-review-form';

const mocksore = configureMockStore<GlobalState>();

function MockRatingControl(): JSX.Element {
  return <p>RatingControl</p>;
}

jest.mock('../rating-form-control/rating-form-control', () => MockRatingControl);

describe('add-review-form component tests', () => {
  it('should correct render', () => {
    const store = mocksore({ activeFilm: { film: makeFakeFilm() } });

    render(
      <Provider store={store}>
        <AddReviewForm />
      </Provider>,
    );

    expect(screen.getByText('RatingControl')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Review text/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/post/i)).toBeInTheDocument();
  });
});
