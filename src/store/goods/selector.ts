import {RequestStatus, State} from '../../types/state.ts';
import {Goods, Promo} from '../../types/goods.ts';
import {NameSpace} from '../../const.ts';

export const getCameras = (state: State): Goods[] =>
  state[NameSpace.Cameras].cameras;

export const getCamerasDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Cameras].isCamerasDataLoading;

export const getErrorStatus = (state: State): boolean =>
  state[NameSpace.Cameras].hasError;

export const getSimilarCameras = (state: State):Goods[] =>
  state[NameSpace.Cameras].similarCameras;

export const getSimilarCamerasLoadingStatus = (state : State) : boolean =>
  state[NameSpace.Cameras].isSimilarCamerasLoading;

export const getCamerasDetail = (state: State):Goods | null =>
  state[NameSpace.Cameras].camerasDetail;

export const sendOrderStatus = (state: State): boolean =>
  state[NameSpace.Cameras].submitOrderStatus === RequestStatus.Loading;

export const getPromo = (state: State): Promo[] =>
  state[NameSpace.Cameras].promo;

export const getPromoLoadingStatus = (state: State): boolean =>
  state[NameSpace.Cameras].fetchPromoStatus === RequestStatus.Loading;
