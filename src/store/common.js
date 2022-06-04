import { createAction, createReducer } from "../lib/redux-angry";

const initialState = {
  name: "이름이 지정되지 않음",
  description: "설명이 입력되지 않음",
};

/* 
  킹 받는 점.
  - 리듀서가 늘어나면 코드가 너무 보기 힘들어진다. => 해결 & immer와 통합
  - 액션 타입 상수로 분리 하라는데, 얻는 이점에 비해 불편함만 더 늘어가는 것 같다. => 액션 함수와 통합 처리
  - 액션 함수를 만들어도 dispatch 날릴 때 가독성은 인정하나, 만들기 너무 귀찮다. => 액션 함수와 통합 처리

  고려할 점.
  - IDE에서 자동 완성이 가능하도록 구현하여야 한다. 안 그러면 할 이유 x.
*/

const reducer = {
  updateName(state, { name }) {
    state.items = name;
  },

  updateDescription(state, { description }) {
    state.description = description;
  },
};

export const commonActions = {
  updateName: ({ name }) => createAction(reducer.updateName, { name }),
  updateContent: ({ content }) => createAction(reducer.updateDescription, { content }),
};

export const commonReducer = createReducer(reducer, initialState);

/*
  아래와 같이 해결.
  dispatch(commonActions.updateName({name: '콤피'}));
*/
