import { SET_POST } from './action';

const initialState = {
  data: [],
};

const postInfo = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default postInfo;
