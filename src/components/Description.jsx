import { useSelector } from "react-redux";

function Description() {
  const state = useSelector((state) => state);
  return <p>설명은? : {state.common.description}</p>;
}

export default Description;
