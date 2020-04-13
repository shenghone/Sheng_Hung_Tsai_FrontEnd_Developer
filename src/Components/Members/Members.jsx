import React from "react";
import styled from "styled-components";
import Cat from "../../static/cat.jpg";
import Cow from "../../static/cow.jpg";
import Fox from "../../static/fox.jpg";

const MembersWrapper = styled.div`
  height: 300px;
  display: flex;

  justify-content: center;
  align-items: center;
  > img {
    width: 60px;
    height: 60px;
    margin: 0 2rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Members = () => {
  return (
    <MembersWrapper>
      <img src={Fox} alt="fox" />
      <img src={Cat} alt="cat" />
      <img src={Cow} alt="cow" />
    </MembersWrapper>
  );
};

export default Members;
