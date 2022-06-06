import Description from "components/Description";
import NameText from "components/Name";
import useDispatchEvent from "hooks/useDispatchEvent";
import { commonActions } from "store/common";
import "./App.css";

function App() {
  const { dispatchEvent, dispatch } = useDispatchEvent();

  const onClickSetName = () => {
    const name = prompt("설정할 이름은 무엇?");
    if (!name) return;

    dispatchEvent({
      action: commonActions.updateName({ name }),
      onStateUpdated: ({ common }) => {
        alert(`최신 상태를 불러온다! 🤩\n=> 변경된 이름은 ${common.name} 입니다.`);
      },
    });
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
