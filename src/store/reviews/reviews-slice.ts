import {Review} from '../../types/review.ts';
import {RequestStatus} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {fetchCameraReviews} from '../api-actions.ts';

type ReviewsSlice = {
  reviews: Review[];
  reviewsStatus: RequestStatus;
}

const initialState: ReviewsSlice = {
  reviews: [],
  reviewsStatus: RequestStatus.Idle,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCameraReviews.pending, (state) => {
        state.reviewsStatus = RequestStatus.Loading;
      })
      .addCase(fetchCameraReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsStatus = RequestStatus.Success;
      })
      .addCase(fetchCameraReviews.rejected, (state) => {
        state.reviewsStatus = RequestStatus.Error;
      });
  },
});
