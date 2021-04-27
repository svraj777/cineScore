import { FILTER_DONE, FILTER_FAIL, FILTER_REQ, DATA_REQ, DATA_SUCC } from "./ActionCreator.js";

const initialState = {
  dataFiltering: false,
  dataFiltered: false,
  dataFilterError: false,
  rowData: false,
  reqForRowData: false,
  rowDataError: false,
  movies: {},
};
export const Reducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case FILTER_REQ:
      return { ...state, dataFiltering: true, dataFilterError: false };
    case FILTER_DONE:
      //  console.log(payload);
      return { ...state, dataFiltered: true, dataFiltering: false, rowData: false, movies: payload };
    case FILTER_FAIL:
      return { ...state, dataFiltering: false, dataFilterError: true, rowData: false, reqForRowData: false };
    case DATA_REQ:
      return { ...state, rowData: false, reqForRowData: true, dataFiltered: false };
    case DATA_SUCC:
      return { ...state, reqForRowData: false, rowData: true, movies: payload };
    default:
      return state;
  }
};
