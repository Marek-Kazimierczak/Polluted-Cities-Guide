import React from "react";
import Select from "../../Common/Select";
import MainContainer from "../../Common/MainContainer";

const Header = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <header>
      <MainContainer>
        <form onSubmit={handleSubmit}>
          <Select />
        </form>
      </MainContainer>
    </header>
  );
};

export default Header;
