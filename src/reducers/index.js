import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import users from './users';
import orders from './orders';

export default combineReducers({
    users,
    orders
});
