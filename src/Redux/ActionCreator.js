export const FILTER_REQ = "FILTER_REQ";
export const FILTER_DONE = "FILTER_DONE";
export const FILTER_FAIL = "FILTER_FAIL";

export const DATA_REQ = "DATA_REQ";
export const DATA_SUCC = "DATA_SUCC";

export const requestFilter = () => {
  return { type: FILTER_REQ };
};
const filterDone = (movies) => {
  return { type: FILTER_DONE, payload: { ...movies } };
};
const filterFail = () => {
  return { type: FILTER_FAIL };
};

const reqData = () => {
  return { type: DATA_REQ };
};

const getData = (movies) => {
  return { type: DATA_SUCC, payload: { ...movies } };
};

const filtering = (page, rate) => (dispatch) => {
  dispatch(requestFilter());
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=923919edbccd880ec5f2e43756ffa1dc&language=en-US&sort_by=original_title.asc&include_adult=true&page=${
      page ? page : 1
    }&year=2020&vote_average.gte=${rate ? rate : 1}&vote_average.lte=6&with_watch_monetization_types=free`
  )
    .then((res) => res.json())
    .then((data) => dispatch(filterDone(data)))
    .catch((error) => {
      dispatch(filterFail());
    });
};

const reqForData = () => (dispatch) => {
  dispatch(reqData());
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=923919edbccd880ec5f2e43756ffa1dc&language=en-US&page=1")
    .then((res) => res.json())
    .then((data) => dispatch(getData(data)))
    .catch((error) => {
      dispatch(filterFail());
    });
};

export { reqForData, filtering };
