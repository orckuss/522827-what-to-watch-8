import { act, render } from '@testing-library/react';
import VideoPlayer from './video-player';

const mockPath = 'mockPath';

describe('VideoPlayer tests', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
  });

  it('render correct', () => {
    const { container } = render(
      <VideoPlayer
        isPlayed
        src={mockPath}
      />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });

  it('should play when isPlayed is true', async () => {
    render(
      <VideoPlayer
        isPlayed
        src={mockPath}
      />,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(window.HTMLMediaElement.prototype.play).toBeCalledTimes(1);
    expect(window.HTMLMediaElement.prototype.load).not.toBeCalled();
  });

  it('should stop when isPlayed is false', async () => {
    render(
      <VideoPlayer
        isPlayed={false}
        src={mockPath}
      />,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });

    expect(window.HTMLMediaElement.prototype.load).toBeCalledTimes(1);
    expect(window.HTMLMediaElement.prototype.play).not.toBeCalled();
  });
});
