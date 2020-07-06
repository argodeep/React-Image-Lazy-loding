import { getImagesAsync } from "./api";

// TODO: Define action types
const GET_IMAGES = "GET_IMAGES";

// TODO: Define action creator using Thunk

export const fetchImages = () => {
  return async dispatch => {
    const response = await getImagesAsync();
    return dispatch(
      {
        type: GET_IMAGES,
        data: response
      }
    )
  }
}

// TODO: Define initialState
const initialState = [];

// Define reducer
export function imageReducer(state = initialState, action) {
  switch (action.type) {
    // TODO: Define the actions to fetch image
    case GET_IMAGES:
      return action.data;
    default:
      return state;
  }
}
