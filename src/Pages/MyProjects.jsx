import React, { useState } from "react";
import styled from "styled-components";

const MyProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 80px 1fr;
  margin-top: 40px;
  h4 {
    display: grid;
    align-self: center;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #000;
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.36);
    font-weight: bolder;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  > section:nth-of-type(1) {
    grid-column: 1 / span 10;
    grid-template-rows: 90px 1fr;
    grid-template-columns: 1fr;
    > h4 {
      grid-row: 1 / span 1;
      display: grid;
      justify-self: center;
      color: #000;
      text-align: center;
    }
    > ul {
      grid-row: 2 / span 1;
      display: grid;
      width: 70%;
      margin: 0 auto;
      grid-template-columns: auto auto 5fr 3fr;
      grid-template-rows: 1fr;
      font-weight: 100;
      > span {
        text-align: center;
        transition: 1s;
        grid-column: 4 / span 1;
        cursor: pointer;
        :hover {
          opacity: 0.4;
        }
      }
      > li {
        cursor: pointer;
        font-size: 0.9rem;
        padding: 0 1rem;
        display: grid;
        transition: 1s;
        :hover {
          opacity: 0.4;
        }
      }
    }
  }
  > section:nth-of-type(2) {
    min-height: 400px;
    width: 90%;
    grid-column: 1 / span 10;
    display: grid;
    justify-self: center;
    min-width: 300px;
    place-items: center;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    > p {
      padding: 2rem;
      line-height: 1.4rem;
      > span {
        transition: 1s;
        cursor: pointer;
        color: #0056b3;
        font-weight: 700;
        :hover {
          color: #27ae60;
        }
      }
    }
  }
`;

const MyProjects = () => {
  const [tab, setTab] = useState("myProjects");
  const getBorderColor = (self) => {
    switch (self) {
      case "myProjects":
        return "4px solid #00bdaa";
      case "invitedProjects":
        return "4px solid #fe346e";
      default:
        return "4px solid #02aab0";
    }
  };

  return (
    <MyProjectsWrapper>
      <section>
        <h4>Projects</h4>

        <ul>
          <li
            onClick={() => setTab("myProjects")}
            style={{ borderBottom: getBorderColor("myProjects") }}
          >
            My Projects
          </li>
          <li
            onClick={() => setTab("invitedProjects")}
            style={{ borderBottom: getBorderColor("invitedProjects") }}
          >
            Invited Project
          </li>
          <span style={{ borderBottom: getBorderColor(tab) }}>
            {tab === "invitedProjects" ? "new project" : null}
          </span>
        </ul>
      </section>
      <section>
        {tab === "myProjects" && (
          <p>There are currently no projects available.</p>
        )}
        {tab === "invitedProjects" && (
          <p>
            When you’re invited to other projects that you’re collaborating on,
            they will appear here. <span>Start your first project now.</span>
          </p>
        )}
      </section>
    </MyProjectsWrapper>
  );
};

export default MyProjects;
