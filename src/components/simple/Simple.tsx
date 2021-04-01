import React, { useState } from "react";

interface Props {
  name: string;
  age?: number;
}
export const Simple: React.FC<Props> = (props: Props) => {
  const [display, setDisplay] = useState<boolean>(false);
  const renderAge = () => {
    return props.age ? `, Age: ${props.age}` : null;
  };

  const handleToggle = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <div>
        <button type="button" onClick={handleToggle}>
          Toggle
        </button>
      </div>
      {display && (
        <div>
          Name:{props.name}
          {renderAge()}
        </div>
      )}
    </div>
  );
};
