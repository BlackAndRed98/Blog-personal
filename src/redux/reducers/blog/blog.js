import axios from "axios";

import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_LIST_CATEGORIES_SUCCESS,
  GET_BLOG_LIST_CATEGORIES_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_SEARCH_BLOG_SUCCESS,
  GET_SEARCH_BLOG_FAIL,
} from "redux/actions/blog/types";

const initialState = {
  blog_list: null,
  blog_list_category: null,
  filtered_post: null,
  post: null,
  count: null,
  next: null,
  previuos: null,
};

export default function blog(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOG_LIST_SUCCESS:
      return {
        ...state,
        blog_list: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_BLOG_LIST_FAIL:
      return {
        ...state,
        blog_list: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}