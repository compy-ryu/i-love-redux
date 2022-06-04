import { useSelector } from "react-redux";

function NameText() {
  const name = useSelector((state) => state.common.name);
  return <p>이름은? : {name}</p>;
}

export default NameText;
