import React from "react";

const ButtonGroup = ({ children }) => {
  return <span className="btn-group">{children}</span>;
};

const Button = ({ children }) => {
  return (
    <button className="btn" type="button">
      {children}
    </button>
  );
};

function ButtonGroupExample() {
  return (
    <>
      <Button>Single</Button>{" "}
      <ButtonGroup>
        <Button>Years</Button>
        <Button>Months</Button>
        <Button>Years</Button>
      </ButtonGroup>
    </>
  );
}

export default ButtonGroupExample;
