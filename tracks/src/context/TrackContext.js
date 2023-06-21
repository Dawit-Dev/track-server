import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
// import { Context } from "./LocationContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, loctions) => {
    await trackerApi.post('/tracks', { name, loctions });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);