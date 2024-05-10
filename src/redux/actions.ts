import { FETCH_DATA_BEGIN, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';
import salesData from '../data/stackline_frontend_assessment_data_2021.json';
import { Action } from 'redux';
import { RootState } from './store'; 
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

interface FetchDataBeginAction extends Action<typeof FETCH_DATA_BEGIN> {}

interface FetchDataSuccessAction extends Action<typeof FETCH_DATA_SUCCESS> {
  payload: {
    data: {
      data: any;
    };
  };
}

interface FetchDataFailureAction extends Action<typeof FETCH_DATA_FAILURE> {
  payload: {
    error: string;
  };
}
export type DataActions = FetchDataBeginAction | FetchDataSuccessAction | FetchDataFailureAction;

const fetchDataBegin = (): FetchDataBeginAction => ({
  type: FETCH_DATA_BEGIN
});

const fetchDataSuccess = (data: any): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
});

const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

/* export const fetchData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch: Dispatch): void => {
    dispatch(fetchDataBegin());
    try {
      dispatch(fetchDataSuccess(salesData));
    } catch (error) {
      dispatch(fetchDataFailure(error.toString()));
    }
  };
};
 */

type MyDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

export const fetchData = (): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch: MyDispatch): void => {
    dispatch(fetchDataBegin());
    try {
      dispatch(fetchDataSuccess(salesData));
    } catch (error) {
      dispatch(fetchDataFailure(error.toString()));
    }
  };
};