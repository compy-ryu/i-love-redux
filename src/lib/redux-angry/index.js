import produce from "immer";

export const createReducer =
  (reducer, initialState) =>
  (state = initialState, { type = "", payload = {} }) => {
    return produce(state, (draft) => {
      typeof reducer[type] === "function" && reducer[type](draft, payload);
    });
  };

export const createAction = (action, payload) => {
  return { type: action.name, payload };
};
