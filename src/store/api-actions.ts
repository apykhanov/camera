import {createAsyncThunk} from '@reduxjs/toolkit';
import {Goods} from '../types/goods.ts';
import {ThunkOptions} from '../types/state.ts';
import {APIRoute, AppRoute} from '../const.ts';
import axios from 'axios';
import {StatusCodes} from 'http-status-codes';
import {redirectToRoute} from './action.ts';

export const fetchCameras = createAsyncThunk<Goods[], void, ThunkOptions>(
  'goods/fetchCameras',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Goods[]>(APIRoute.Cameras);
    return data;
  }
);

export const fetchCamerasDetails = createAsyncThunk<Goods, string, ThunkOptions>(
  'details/fetchCamerasDetails',
  async (cameraId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Goods>(`${APIRoute.Cameras}/${cameraId}`);
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === StatusCodes.NOT_FOUND) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      throw error;
    }
  }
);

export const fetchSimilarCameras = createAsyncThunk<Goods[], string, ThunkOptions>(
  'details/fetchNearbyOffers',
  async (cameraId, {extra: api}) => {
    const {data} = await api.get<Goods[]>(`${APIRoute.Cameras}/${cameraId}/similar`);
    return data;
  }
);
