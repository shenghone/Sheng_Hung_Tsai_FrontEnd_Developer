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

/*
import styled from "styled-components";
import ExploreItem from "./ExploreItem/ExploreItem";

import { v4 as uuidv4 } from "uuid";

import { useLocation, useHistory, useParams, Redirect } from "react-router-dom";

const ExploreWrapper = styled.div`
  display: grid;
  color: #8b8b8b;
  height: 10 0%;
  box-sizing: border-box;
  margin: 1rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  position: relative;
  grid-template-columns: 1fr;

  @media (min-width: 620px) {
    grid-template-rows: 50px 1fr 50px;
  }
  @media (max-width: 620px) {
    grid-template-rows: 100px 1fr 50px;
  }
  grid-template-areas:
    "categories"
    "bodyToExplore"
    "pageNum";
  > p {
    align-self: end;
    justify-self: end;
  }

  > div:nth-of-type(1) {
    border-bottom: 0.5px solid #fff;
    display: grid;
    justify-self: center;
    grid-template-columns: 100px 1fr auto;
    grid-template-rows: 1fr;
    align-items: center;
    width: 96%;
    grid-template-areas: "explore space categories";
    > h2 {
      margin: 0;
    }
    @media (max-width: 620px) {
      grid-template-rows: auto auto;
      grid-template-areas: "explore" "categories";
    }

    > div:nth-of-type(1) {
      grid-area: categories;

      > span {
        padding: 4px 8px;
        font-size: 14px;
        cursor: pointer;
        :hover {
          opacity: 0.65;
        }
      }

      > span:nth-of-type(1) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      > span:nth-of-type(2) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        border-left: 1px solid #fff;
      }
      > span:nth-of-type(3) {
        border: 1px solid #fff;
        border-radius: 0px 0.25rem 0.25rem 0px;
      }
    }
  }
  > div:nth-of-type(2) {
    grid-area: bodyToExplore;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    padding: 0 1rem;
    height: auto;
  }
  > div:nth-of-type(3) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    align-items: center;
    width: 96%;
    justify-self: center;
    > div:nth-of-type(2) {
      > span {
        box-sizing: border-box;
        padding: 8px 12px;
        cursor: pointer;
      }
    }
  }
`;

const Explore = ({
  data: {
    data: { articles },
  },
  ...rest
}) => {
  const history = useHistory();
  const { pageCount } = useParams();
  const { pathname } = useLocation();

  const getTextColor = (loc, self) => {
    if (loc === self) {
      return "#27AE60";
    }
    return "#495057";
  };

  const handleTo = (whereTo) => {
    history.push(`/${whereTo}`);
  };

  const getExploreBody = (pageCount) => {
    if (!pageCount || pageCount === 1) {
      return articles.filter((d, idx) => idx < 8);
    }
    const minIdx = (pageCount - 1) * 8;
    const maxIdx = pageCount * 8;
    return articles.filter((d, idx) => idx >= minIdx && idx < maxIdx);
  };
  console.log(pathname.split("/")[1]);

  const toPage = (num) => {
    if (pathname === "/") {
      console.log("oops");
      history.push(`/page/${num}`);
    } else {
      const loc = pathname.split("/")[1];

      history.push(`/${loc}/page/${num}`);
    }
  };

  const getTotalPage = (articles, currentPage) => {
    const t = Math.ceil(articles.length / 8);
    let ele = [];
    for (let i = 0; i < t; i++) {
      ele.push(i + 1);
    }
    console.log(currentPage);
    return ele.reduce((result, num, idx) => {
      if (currentPage - 2 >= num) {
        return result.concat(
          <span key={uuidv4()} onClick={() => toPage(num)}>
            {num}
          </span>
        );
      } else return result;
    }, []);
  };
  return (
    <ExploreWrapper>
      <div>
        <h2>EXPLORE</h2>
        <div>
          <span
            onClick={() => handleTo("")}
            style={{ color: getTextColor(pathname, "/") }}
          >
            Challenges
          </span>
          <span
            onClick={() => handleTo("labs")}
            style={{ color: getTextColor(pathname, "/labs") }}
          >
            Labs
          </span>
          <span
            onClick={() => handleTo("projects")}
            style={{ color: getTextColor(pathname, "/projects") }}
          >
            Projects
          </span>
        </div>
      </div>

      <div>
        {getExploreBody(pageCount).map((d) => {
          return <ExploreItem data={d} key={uuidv4()} />;
        })}
      </div>
      <div>
        <div></div>
        <div>{getTotalPage(articles, pageCount)}</div>
      </div>
    </ExploreWrapper>
  );
};


*/
