import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {fetchCameras, fetchCamerasDetails, fetchSimilarCameras} from '../api-actions.ts';
import {Goods} from '../../types/goods.ts';

type GoodsData = {
  cameras: Goods[];
  isCamerasDataLoading: boolean;
  hasError: boolean;
  loading: boolean;
  camerasDetail: Goods | null;
  error: string | null;
  similarCameras: Goods[];
  isSimilarCamerasLoading: boolean;
  isCamerasDetailLoading: boolean;
};

const initialState: GoodsData = {
  cameras: [],
  isCamerasDataLoading: false,
  hasError: false,
  loading: false,
  camerasDetail: null,
  error: null,
  similarCameras: [],
  isSimilarCamerasLoading: false,
  isCamerasDetailLoading: false,
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
      });
  }
});
