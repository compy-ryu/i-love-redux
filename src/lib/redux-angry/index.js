import produce from "immer";

export const createReducer =
  (actionList, initialState) =>
  (state = initialState, { type = "", payload = {} }) => {
    return produce(state, (draft) => {
      const action = actionList[type];
      typeof action === "function" && action(draft, payload);
    });
  };

export const createAction = (action, payload) => {
  return { type: action.name, payload };
};
