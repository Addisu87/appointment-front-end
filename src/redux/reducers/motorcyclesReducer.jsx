import axios from 'axios';

// Action types
const FETCH_MOTORCYCLES = 'motorcycleReducer/FETCH_MOTORCYCLES ';
const FETCH_MOTORCYCLE_DETAILS = 'motorcyclesReducer/FETCH_MOTORCYCLE_DETAILS';
const ADD_MOTORCYCLE = 'motorcyclesReducer/ADD_MOTORCYCLE';
const API_URL = 'http://localhost:3000';
const DEL_MOTORCYCLE = 'motorcyclesReducer/DEL_MOTORCYCLE';

// initial state
const initialState = [];

// action creator
export const addMotorcycle = (data) => async (dispatch) => {
  const response = await axios
    .post(`${API_URL}/api/v1/motorcycles`, data)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: ADD_MOTORCYCLE,
    payload: response
  });
};

export const getMotorcycles = () => async (dispatch) => {
  const response = await axios
    .get(`${API_URL}/api/v1/motorcycles`)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: FETCH_MOTORCYCLES,
    payload: response
  });
};

export const delMotorcycle = (id) => async (dispatch) => {
  const response = await axios
    .delete(`${API_URL}/api/v1/cars/${id}`)
    .then((res) => res.data)
    .catch((error) => error);
  dispatch({
    type: DEL_MOTORCYCLE,
    payload: response
  });
};

// Action
export const fetchMotorcyclesSuccess = (data) => ({
  type: FETCH_MOTORCYCLES,
  payload: data
});

export function fetchMotorcycleDetailsSuccess(data) {
  return {
    type: FETCH_MOTORCYCLE_DETAILS,
    payload: data
  };
}

// Reducer for motorcycle
const motorcyclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLES:
      return action.payload;
    default:
      return state;
  }
};

// Reducer for motorcycle details
const motorcycleDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTORCYCLE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export { motorcyclesReducer, motorcycleDetailsReducer };
