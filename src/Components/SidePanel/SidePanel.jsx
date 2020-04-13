import React, { useContext, useRef, useEffect } from "react";
import MenuContext from "../../Context/MenuContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SidePanelWrapper = styled.div`
  position: absolute;

  z-index: 10;
  font-family: "Poppins";
  padding: 1rem 0;
  width: 180px;
  height: 100%;
  margin-top: 2px;
  transform: translateX(-180px);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 90px 24px 1fr;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    "avatar"
    "username"
    "rest";
  box-sizing: border-box;

  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  > div:nth-of-type(1) {
    grid-area: avatar;
    display: grid;
    > img {
      justify-self: center;
      height: 85px;
      width: 85px;
      box-sizing: border-box;
      object-fit: cover;
      background: #cecece;
      border-radius: 50%;
      :hover {
        opacity: 0.65;
        cursor: pointer;
      }
    }
  }
  > div:nth-of-type(2) {
    display: relative;
    grid-area: username;

    text-transform: uppercase;
    font-weight: bolder;
  }
  > h4 {
    margin: auto;
  }

  > ul {
    font-size: 0.9rem;
    padding: 0;
    display: grid;
    color: #8b8b8b;
    list-style: none;
    height: 420px;
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
      &::-webkit-scrollbar-thumb {
        background: red;
        border-radius: 10px;
      }
    }
    overflow-y: scroll;
    > li {
      align-content: center;
      box-sizing: border-box;
      height: 40.19px;

      cursor: pointer;
      width: 100%;
      &:hover {
        color: #000;
      }
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 70px max-content 1fr;
      position: relative;
      &:hover {
        background: #cecece;
      }
      > p {
        font-weight: 200;
        font-size: 0.8rem;
        grid-column: 2 / span 1;

        justify-self: start;
        align-self: center;
      }

      > i {
        grid-column: 1 / span 1;
        align-self: center;
        justify-self: center;
        transform: scale(1);
      }
    }
  }
`;

const SidePanel = () => {
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.opacity = "1";

      if (!displayMenu) {
        ref.current.style.transition = "0.7s";
        ref.current.style.transform = "translate(-180px)";
      } else {
        ref.current.style.transform = "translate(0px)";
      }
    }
  }, [displayMenu]);
  const handleTo = (whereTo) => {
    setDisplayMenu(false);
    history.push(`${whereTo}`);
  };
  return (
    <SidePanelWrapper ref={ref}>
      <div>
        <img
          src="https://images.unsplash.com/flagged/photo-1551132506-cba967e1a37a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80"
          alt="avt"
        />
      </div>
      <h4>Lynxy</h4>

      <ul>
        <li onClick={() => handleTo("/")}>
          <i className="fab fa-wpexplorer"></i>
          <p>Explore</p>
        </li>
        <li onClick={() => handleTo("/myProjects")}>
          <i className="far fa-clipboard"></i> <p>Projects</p>
        </li>
        <li onClick={() => handleTo("/joinedLab")}>
          <i className="fas fa-vials"></i> <p>Labs</p>
        </li>
        <li onClick={() => handleTo("/list/challenge")}>
          <i style={{ marginLeft: "3px" }} className="fas fa-puzzle-piece"></i>
          <p>Challenges</p>
        </li>
        <li>
          <i
            style={{ marginLeft: "1px", marginTop: "4px" }}
            className="fas fa-medal"
          ></i>
          <p> Achievements</p>
        </li>
        <li>
          <i style={{ marginLeft: "1px" }} className="far fa-envelope"></i>{" "}
          <p>Inbox</p>
        </li>
        <li>
          <i style={{ marginLeft: "2px" }} className="fas fa-cogs"></i>
          <p>Resources</p>
        </li>
        <li>
          <i style={{ marginLeft: "2px" }} className="fas fa-newspaper"></i>
          <p>News Feed</p>
        </li>
        <li>
          <i className="far fa-bell"></i>
          <p>Notifications</p>
        </li>
        <li>
          <i className="fas fa-suitcase"></i>
          <p>Organisation</p>
        </li>
        <li>
          <i className="fas fa-cog"></i>
          <p>Settings</p>
        </li>
        <li>
          <i className="fas fa-question-circle"></i>
          <p>Help</p>
        </li>
        <li>
          <i style={{ marginLeft: "3px" }} className="fas fa-sign-out-alt"></i>
          <p>Log out</p>
        </li>
      </ul>
    </SidePanelWrapper>
  );
};

export default SidePanel;
