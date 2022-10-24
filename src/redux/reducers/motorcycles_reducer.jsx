import axios from 'axios';

// constant
const DISPLAY_MOTORCYCLE = 'DISPLAY_MOTORCYCLE ';

// Action creator for display greeting
const displayMotorcycle = (payload) => ({
  type: DISPLAY_MOTORCYCLE,
  payload,
});

// get (load) greetings from API
export const fetchGreetingAPI = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/motorcycles');
  const motorcycle = response.data;
  dispatch(displayMotorcycle(motorcycle));
};

// initial states
const initialState = [];

// Reducer for greeting
const motorcycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MOTORCYCLE:
      return action.payload.name;
    default:
      return state;
  }
};

export default motorcycleReducer;
