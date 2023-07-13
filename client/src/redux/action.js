export const SET_POST = 'SET_POST';
export const SET_DIARY = 'SET_DIARY';

export const setPost = posts => ({
  type: SET_POST,
  payload: posts,
});

export const setDiary = diary => ({
  type: SET_DIARY,
  payload: diary,
});
