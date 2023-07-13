import { SET_DIARY } from './action';

const initialState = {
  data: [],
};

const diaryInfo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIARY:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default diaryInfo;
