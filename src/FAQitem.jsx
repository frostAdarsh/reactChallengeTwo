import { useEffect, useState } from "react";

const FAQitem = ({ question, answer, index }) => {
  const [isShow, setIsshow] = useState(false);
  useEffect(() => {});
  const handleClick = () => {
    setIsshow((isShow) => !isShow);
  };
  return (
    <div className="faq">
      <div className="que" onClick={handleClick}>
        <button className={isShow ? "arrow" : ""}>></button>
        <div>{question}</div>
      </div>
      {isShow && <div className="ans">{answer}</div>}
    </div>
  );
};

export default FAQitem;
