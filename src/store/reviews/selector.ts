import {Review} from '../../types/review.ts';
import {RequestStatus, State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getReviewsLoadingStatus = (state: State): boolean =>
  state[NameSpace.Reviews].reviewsStatus === RequestStatus.Loading;

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;
