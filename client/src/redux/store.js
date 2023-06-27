import { combineReducers } from 'redux';
import postInfo from './post.reducer';

const rootReducer = combineReducers({
  postInfo,
});

export default rootReducer;
