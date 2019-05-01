import {
  ADD_PLACE,
  DELETE_PLACE
} from '../actions/actionTypes';

import placeImage from '../../assets/beautiful-place.jpg';

const initalState = {
  places: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: placeImage
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key
        ),
      };
    default:
      return state;
  }
};

export default reducer;
