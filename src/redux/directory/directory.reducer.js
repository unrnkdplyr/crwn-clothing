import SECTIONS_DATA from "./directory.data";

const INITITAL_STATE = {
  sections: SECTIONS_DATA,
};

const directoryReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
