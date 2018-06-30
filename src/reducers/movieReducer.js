import { SET_CURRENT_MOVIE, GET_MOVIES } from "../actions/types";

const initialState = {
  movie: {},
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
}
