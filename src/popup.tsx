import { Button } from "~components/ui/button";
import { useState } from "react";
import "~style.css"

const IncrementButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-white p-6">
      <Button onClick={handleClick}>Count: {count}</Button>
    </div>
  );
};

export default IncrementButton;
