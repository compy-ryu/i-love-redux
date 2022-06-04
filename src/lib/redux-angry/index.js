import produce from "immer";

// 리덕스의 리듀서를 생성한다 (타입에 따른 리듀서, 초기 상태)
export const createReducer =
  (reducer, initialState) =>
  (state = initialState, { type = "", payload = {} }) => {
    return produce(state, (draft) => {
      // 이곳에서 immer를 활용 & 객체 참조를 활용, 값을 리듀서로 전달하여 draft 상태를 업데이트 해준다.
      typeof reducer[type] === "function" && reducer[type](draft, payload);
    });
  };

// 액션 함수를 생성한다 (리듀서 내 액션, payload)
export const createAction = (action, payload) => {
  // action은 함수임으로 function.name을 통해 함수의 이름을 활용해 액션 타입을 사용한다.
  return { type: action.name, payload };
};
