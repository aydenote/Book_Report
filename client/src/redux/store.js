import { combineReducers } from 'redux';
import postInfo from './post.reducer';
import diaryInfo from './diary.reducer';

const rootReducer = combineReducers({
  postInfo,
  diaryInfo,
});

export default rootReducer;
