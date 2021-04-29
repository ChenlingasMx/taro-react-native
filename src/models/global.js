
export default {
  state: { 
    name:'我是home页'
  },
  reducers: {
    update: (state, payload) => ({...state, ...payload}),
  },
  // effects: dispatch => ({ }),
};