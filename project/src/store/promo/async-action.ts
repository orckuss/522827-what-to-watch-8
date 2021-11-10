import axios from 'axios';
import { toast } from 'react-toastify';
import { APIRoutes, FailMessage } from 'src/constants';
import { ThunkActionResponse } from 'src/types/actions';
import { Film } from 'src/types/film';
import { SnakeToCamelAdapter } from 'src/utils/snake-to-camel-adapter';
import { setPromo, setPromoLoaded } from './actions';

const adapter = new SnakeToCamelAdapter();

export const getPromo = (): ThunkActionResponse =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoutes.Promo);
      const promo = adapter.transform<Film>(response.data);
      dispatch(setPromo(promo));
      dispatch(setPromoLoaded());
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(FailMessage.GetPromo);
      }
    }
  };
