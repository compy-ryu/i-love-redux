import { useSelector } from "react-redux";

function Description() {
  const description = useSelector((state) => state.common.description);
  return <p>설명은? : {description}</p>;
}

export default Description;
