import { useSelector } from "react-redux";

function NameText() {
  const state = useSelector((state) => state);
  return <p>이름은? : {state.common.name}</p>;
}

export default NameText;
