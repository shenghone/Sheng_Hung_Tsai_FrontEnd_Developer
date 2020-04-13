import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import MenuContext from "../../Context/MenuContext";

const HeaderWrapper = styled.div`
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 5px 15px 1fr auto;
  grid-template-areas: "logo x burger space rest";
  box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.4);
  i {
    &:hover {
      opacity: 0.54;
    }
  }
  align-items: center;
  > img {
    position: relative;
    grid-area: logo;
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  > div:nth-of-type(1) {
    align-self: center;
    grid-area: burger;
    position: relative;
    cursor: pointer;
    display: grid;
    height: 100%;
    align-items: center;
    :hover {
      opacity: 0.54;
    }
    > span {
      position: absolute;
      width: 100%;
      height: 2px;
      background: grey;
    }

    > span:nth-of-type(1) {
      transition: 1s;
      transform: translateY(-2px);
    }
    > span:nth-of-type(2) {
      transition: 1s;
      transform: translateY(3px);
    }
    > span:nth-of-type(3) {
      transition: 1s;
      transform: translateY(8px);
    }
  }
  > div:nth-of-type(2) {
    align-self: center;
    position: relative;
    grid-area: rest;
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 1rem;
    > div {
      display: flex;
      height: 100%;
      > span {
        align-self: center;
        border: 1px solid #ced4da;
        padding: 6px 12px;
        border-radius: 0.25rem 0 0 0.25rem;
        color: #ced4da;
        cursor: pointer;
        transition: 1s;
        transform-origin: 50% 50%;
      }
      > img {
        width: 30px;
        height: 30px;
        background: #cecece;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          opacity: 0.65;
        }
      }
      > i {
        padding: 8px 12px;
        color: #ced4da;
        cursor: pointer;
      }
      > i:nth-of-type(2) {
        background: #ced4da;
        color: #000;
        border-radius: 50%;
      }
      > input {
        color: #495057;
        border-radius: 0 0.25rem 0.25rem 0;
        padding: 3px 12px;
        align-self: center;
        height: 70%;
        border: 1px solid #ced4da;
        outline: none;
        &::placeholder {
          color: #495057;
        }
      }
    }
  }
`;

const Header = () => {
  const burgerRef = useRef(null);
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  const history = useHistory();
  const handleBurgerClick = () => {
    setDisplayMenu(!displayMenu);
  };

  React.useEffect(() => {
    if (burgerRef && burgerRef.current) {
      if (displayMenu) {
        burgerRef.current.children[0].style.transform =
          "translate(0px, 4px) rotate(135deg) ";
        burgerRef.current.children[2].style.transform =
          "translate(0px, 4px) rotate(225deg) ";
        burgerRef.current.children[1].style.opacity = "0";
      } else {
        burgerRef.current.children[0].style.transform =
          "translate(0px, -2px) rotate(0deg) ";
        burgerRef.current.children[1].style.opacity = "1";
        burgerRef.current.children[2].style.transform =
          "translate(0px, 8px) rotate(0deg) ";
      }
    }
  }, [displayMenu]);
  return (
    <HeaderWrapper>
      <img
        src="https://preprmedialive.s3.amazonaws.com/public/front/img/logo.png"
        alt="logo"
        onClick={() => history.push("/")}
      />
      <div onClick={() => handleBurgerClick()} ref={burgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <div>
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search Challenges, Labs, Projects and People"
          />

          <i className="fas fa-bell"></i>
          <img
            src="https://images.unsplash.com/flagged/photo-1551132506-cba967e1a37a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
            alt=""
          />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
