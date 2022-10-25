import { configureStore } from '@reduxjs/toolkit';
import { reducerDetails } from './reducers/fetchMotorcycleDetails';
import { motorcyclesReducer } from './reducers/motorcyclesReducer';
import { reservationsReducer } from './reducers/reservationsReducer';
// import { usersReducer } from './users/users';

const store = configureStore({
  reducer: {
    // user: usersReducer,
    motorcycles: motorcyclesReducer,
    motorcycleDetails: reducerDetails,
    reservations: reservationsReducer,
  },
});

export default store;
