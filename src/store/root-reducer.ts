import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {goodsSlice} from './goods/goods-slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.Cameras]: goodsSlice.reducer,
});
