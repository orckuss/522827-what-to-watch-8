import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeFakeCommentList } from 'src/mocks/mocks';
import { GlobalState } from 'src/types/global-state';
import Reviews from './reviews';

const mockStore = configureMockStore<GlobalState>();

describe('Reviews component tests', () => {
  const comments = makeFakeCommentList(4);

  it('should be correctly render', () => {
    const store = mockStore({ activeFilm: { comments } });
    const [firstComment] = comments;
    const month = new Date(firstComment.date).toLocaleDateString('en', { month: 'long' });

    const { container } = render(
      <Provider store={store}>
        <Reviews />
      </Provider>,
    );

    expect(container.querySelectorAll('blockquote').length).toBe(comments.length);
    expect(screen.getByText(firstComment.comment)).toBeInTheDocument();
    expect(screen.getByText(firstComment.rating)).toBeInTheDocument();
    expect(screen.getByText(firstComment.user.name)).toBeInTheDocument();
    expect(screen.getAllByText(new RegExp(`${month}`)).length).not.toBe(0);
  });
});
