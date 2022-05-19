import {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LikeTodo = () => {
  
  const[like, setLike] = useState(false);
  const handleLike = () => {
   setLike(!like);
   
  };

  return (
    <>
      <FontAwesomeIcon icon={faStar}
      onClick={handleLike}
      style={{ color: `${like ?  "green" : "black"}`}}
      />
    </>
  );
};

export default LikeTodo;