import {
  ITEMS_ADD_ITEMS,
  ITEMS_DELETE_ITEMS,
  ITEMS_UPDATE_ITEMS,
} from "./actionTypes";

export const addTask = (product) => ({
  type: ITEMS_ADD_ITEMS,
  payload: product,
});

export const toggleCompleteTask = (product) => ({
  type: ITEMS_DELETE_ITEMS,
  payload: product,
});

export const removeTask = (product) => ({
  type: ITEMS_UPDATE_ITEMS,
  payload: product,
});
