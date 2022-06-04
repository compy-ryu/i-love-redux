import { useSelector } from "react-redux";

function Description() {
  const description = useSelector(({ common }) => common.description);
  return <p>설명은? : {description}</p>;
}

export default Description;
