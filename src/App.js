import { useDispatch, useSelector } from "react-redux";
import { commonActions } from "store/common";
import "./App.css";

function App() {
  const state = useSelector((state) => state.common);
  const dispatch = useDispatch();

  const onClickSetName = () => {
    const name = prompt("설정할 이름은 무엇?");

    if (!name) return;
    dispatch(commonActions.updateName({ name }));
  };

  const onClickSetDescription = () => {
    const description = prompt("설정할 설명은 무엇?");

    if (!description) return;
    dispatch(commonActions.updateDescription({ description }));
  };

  return (
    <div className="App">
      <p>이름은? - {state.name}</p>
      <p>설명은? - {state.description}</p>

      <div>
        <button type="button" onClick={onClickSetName}>
          이름 설정
        </button>

        <button type="button" onClick={onClickSetDescription}>
          설명 설정
        </button>
      </div>
    </div>
  );
}

export default App;
