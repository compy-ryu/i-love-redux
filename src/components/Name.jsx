import { useSelector } from "react-redux";

function NameText() {
  const name = useSelector(({ common }) => common.name);
  return <p>이름은? : {name}</p>;
}

export default NameText;
