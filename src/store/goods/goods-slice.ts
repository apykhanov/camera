import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {fetchCameras, fetchCamerasDetails, fetchPromo, fetchSimilarCameras, submitOrder} from '../api-actions.ts';
import {Goods, Order, Promo} from '../../types/goods.ts';
import {RequestStatus} from '../../types/state.ts';

type GoodsData = {
  cameras: Goods[];
  order: Order[];
  promo: Promo[];
  isCamerasDataLoading: boolean;
  hasError: boolean;
  loading: boolean;
  success: boolean;
  camerasDetail: Goods | null;
  error: string | null;
  similarCameras: Goods[];
  isSimilarCamerasLoading: boolean;
  isCamerasDetailLoading: boolean;
  submitOrderStatus: RequestStatus;
  fetchPromoStatus: RequestStatus;
};

const initialState: GoodsData = {
  cameras: [],
  order: [],
  promo: [],
  isCamerasDataLoading: false,
  hasError: false,
  loading: false,
  success: false,
  camerasDetail: null,
  error: null,
  similarCameras: [],
  isSimilarCamerasLoading: false,
  isCamerasDetailLoading: false,
  submitOrderStatus: RequestStatus.Idle,
  fetchPromoStatus: RequestStatus.Idle,
};

export const goodsSlice = createSlice({
  name: NameSpace.Cameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.isCamerasDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isCamerasDataLoading = false;
      })
      .addCase(fetchCameras.rejected, (state) => {
        state.isCamerasDetailLoading = false;
        state.hasError = true;
      })
      .addCase(fetchCamerasDetails.pending, (state) => {
        state.isCamerasDetailLoading = true;
      })
      .addCase(fetchCamerasDetails.fulfilled, (state, action) => {
        state.camerasDetail = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamerasDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchSimilarCameras.pending, (state) => {
        state.isCamerasDetailLoading = true;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
        state.isCamerasDetailLoading = false;
      })
      .addCase(fetchSimilarCameras.rejected, (state) => {
        state.similarCameras = [];
        state.isCamerasDetailLoading = false;
      })
      .addCase(submitOrder.pending, (state) => {
        state.submitOrderStatus = RequestStatus.Loading;
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        state.submitOrderStatus = RequestStatus.Success;
        state.order.push(action.payload);
      })
      .addCase(submitOrder.rejected, (state) => {
        state.submitOrderStatus = RequestStatus.Error;
      })
      .addCase(fetchPromo.pending, (state) => {
        state.fetchPromoStatus = RequestStatus.Loading;
        state.hasError = false;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.fetchPromoStatus = RequestStatus.Success
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.fetchPromoStatus = RequestStatus.Error
        state.hasError = true;
      })
  }
});
