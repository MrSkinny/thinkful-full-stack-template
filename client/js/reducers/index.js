import * as actions from '../actions';

const INITIAL_STATE = { foo: 'bar' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
