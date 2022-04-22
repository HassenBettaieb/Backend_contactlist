import { GET_person } from "../action/actiontypes";
const intialState = {
  persons: { person: [] },
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_person:
      return { ...state, persons: action.payload };

    default:
      return state;
  }
};

export default reducer;
