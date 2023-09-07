import {
  GET_CATEGORIES_SUCCES,
  GET_CATEGORIES_FAIL,
} from "redux/actions/categories/types";

const initialState = {
  categories: null,
};

export default function categories(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES_SUCCES:
      return {
        ...state,
        categories: payload.categories,
      };

    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        categories: null,
      };
    default:
      return state;
  }
}
