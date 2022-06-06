import { useDispatch, useStore } from "react-redux";

function useDispatchEvent() {
  const dispatch = useDispatch();
  const store = useStore();

  const dispatchEvent = async ({ action, onStateUpdated = () => {} }) => {
    await dispatch(action);
    onStateUpdated(store.getState());
  };

  return { dispatch, dispatchEvent };
}

export default useDispatchEvent;
