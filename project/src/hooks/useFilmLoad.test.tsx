import { renderHook } from '@testing-library/react-hooks';
import { datatype } from 'faker';
import * as Redux from 'react-redux';
import ReactRouter from 'react-router';
import { makeFakeFilm } from 'src/mocks/mocks';
import { useFilmLoad } from './useFilmLoad';

const film = makeFakeFilm();

describe('useFilmLoad tests', () => {
  beforeEach(() => {
    const useSelectorSpy = jest.spyOn(Redux, 'useSelector');
    useSelectorSpy.mockReturnValue(film);

    const useParamsSpy = jest.spyOn(ReactRouter, 'useParams');
    useParamsSpy.mockReturnValue({});

    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(jest.fn());
  });

  it('Should return the same value as useSelector', () => {
    const { result } = renderHook(() => useFilmLoad());

    expect(result.current).toBe(film);
  });

  it('Should not dispatch actions when route params value the same as film id', () => {
    const useParamsSpy = jest.spyOn(ReactRouter, 'useParams');
    useParamsSpy.mockReturnValue({ id: `${film.id}` });

    const dispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(dispatch);

    renderHook(() => useFilmLoad());

    expect(dispatch).not.toBeCalled();
  });

  it('Should dispatch actions when route params value and film id not equal', () => {
    const id = datatype.number();
    const useParamsSpy = jest.spyOn(ReactRouter, 'useParams');
    useParamsSpy.mockReturnValue({ id: `${id}` });

    const dispatch = jest.fn();
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
    useDispatchSpy.mockReturnValue(dispatch);

    renderHook(() => useFilmLoad());

    expect(dispatch).toBeCalledTimes(3);
  });
});
