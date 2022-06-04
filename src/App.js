import Description from "components/Description";
import NameText from "components/Name";
import { useDispatch } from "react-redux";
import { commonActions } from "store/common";
import "./App.css";

function App() {
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
      <NameText />
      <Description />

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
