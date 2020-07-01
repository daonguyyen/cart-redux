//Combine các reducers
import { combineReducers} from 'redux';
import products from './products';

const appReducers = combineReducers({
    products
});

export default appReducers;