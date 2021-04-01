import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      counter:{value}
      <div>
        <div>
          <button type="button" onClick={() => setValue((val) => ++val)}>
            Increment
          </button>
        </div>
        <div>
          <button type="button" onClick={() => setValue((val) => --val)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
