import React from "react";
import styled from "styled-components";
import ExploreItem from "./ExploreItem/ExploreItem";
import { useLocation, useHistory } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

const ExploreWrapper = styled.div`
  margin: auto;

  > div:nth-of-type(1) {
    display: grid;
    border-radius: 5px 5px 0 0;
    grid-template-rows: 130px;
    grid-template-columns: 1fr;
    grid-area: body;
    grid-template-areas:
      "title"
      "content";
    /* start of title */
    > section:nth-of-type(1) {
      width: 90%;
      margin: auto;
      position: relative;
      grid-area: "title";
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;

      display: grid;
      > section:nth-of-type(1) {
        display: grid;
        grid-template-columns: auto auto auto 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: end;
        > p {
          margin: 0;
          padding: 0 1rem;
          cursor: pointer;
        }
        > span {
          grid-column: 5 / span 1;
          transition: 1s;
          font-size: 2rem;
          letter-spacing: 0.1rem;
          font-weight: bolder;
        }
      }
    }
    /* start of explore body*/
    > section:nth-of-type(2) {
      width: 90%;
      justify-self: center;
      display: grid;
      height: 100%;
      grid-area: content;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-flow: dense;
      align-items: stretch;
      grid-column-gap: 20px;
      padding: 20px;
    }
    /* end of explore body*/
  }
  /* end of title */
`;

const Explore = React.memo(({ data, ...rest }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const getPath = (pathname) => {
    const current = pathname.split("/")[1];
    if (!current || current === "page") {
      return "challenges";
    }
    return current;
  };
  const handleTo = (whereTo) => {
    history.push(`${whereTo}`);
  };
  const getBorderColor = (self) => {
    switch (self) {
      case "challenges":
        return "4px solid #ffa34d";
      case "labs":
        return "4px solid #fe346e";
      case "projects":
        return "4px solid #02aab0";
      default:
        return "4px solid #02aab0";
    }
  };
  return (
    <ExploreWrapper path={getPath(pathname)}>
      <div>
        <section>
          <section>
            <p
              style={{ borderBottom: getBorderColor("challenges") }}
              onClick={() => handleTo("/challenges")}
            >
              challenges
            </p>
            <p
              style={{ borderBottom: getBorderColor("labs") }}
              onClick={() => handleTo("/labs")}
            >
              labs
            </p>
            <p
              style={{ borderBottom: getBorderColor("projects") }}
              onClick={() => handleTo("/projects")}
            >
              projects
            </p>
            <span style={{ borderBottom: getBorderColor(getPath(pathname)) }}>
              {getPath(pathname)}
            </span>
          </section>
        </section>
        <section>
          {data.map((d, idx) => {
            return <ExploreItem data={d} key={uuid4()} idx={idx} />;
          })}
        </section>
      </div>
    </ExploreWrapper>
  );
});

export default Explore;
