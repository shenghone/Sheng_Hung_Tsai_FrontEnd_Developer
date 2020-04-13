import React, { useContext, useState, useRef } from "react";
import DataContext from "../Context/DataContext";
import styled from "styled-components";
import ContentCard from "../Components/ContentCard/ContentCard";

import { v4 as uuid4 } from "uuid";
import { TimelineMax } from "gsap";

const ListChallengeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto auto 1fr;
  margin-top: 0;
  margin-bottom: 1rem;
  ul {
    list-style: none;
    padding: 0;
  }
  /*content body*/
  > section:nth-of-type(3) {
    grid-column: 1 / span 10;
    grid-template-columns: repeat(auto-fill, 1fr);
    grid-auto-flow: dense;
    width: 90%;
    @media (max-width: 680px) {
      width: 80%;
    }
    display: grid;
    justify-self: center;
  }
  /*for submitted and following tab*/
  > div:nth-of-type(1) {
    grid-column: 1 / span 10;

    height: 400px;
    width: 80%;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    display: grid;
    justify-self: center;
    margin-top: 40px;
    place-items: center;
  }

  /*filter area*/
  > section:nth-of-type(2) {
    @media (min-width: 680px) {
      margin-top: 14px;
    }
    width: 90%;
    display: grid;
    justify-self: center;
    grid-column: 1 / span 10;
    grid-template-columns: auto auto;
    grid-auto-rows: 70px;
    @media (min-width: 960px) {
      grid-template-rows: 90px;
      grid-template-columns: 150px auto auto auto;
    }
    grid-column-gap: 20px;
    justify-content: center;
    align-items: center;
    span {
      font-size: 1rem;
      background: #18b0b0;
      box-shadow: 1px 1px 5px rgba(24, 176, 176, 0.5);
      padding: 12px;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
    }
    > div:nth-of-type(1) {
      width: 100%;
      justify-items: center;
      display: grid;
      @media (max-width: 960px) {
        grid-column: 1 / span 3;
      }
      position: relative;
      place-items: center;
      align-self: center;
      font-size: 1rem;
      > span {
        width: 100%;
        box-sizing: border-box;
        position: absolute;
      }
    }
    /*local and all*/
    > section:nth-of-type(1) {
      @media (max-width: 960px) {
        grid-column: 3 / span 1;
        grid-row: 2 / span 1;
      }
      > span:nth-of-type(1) {
        border-radius: 5px 0 0 5px;
      }
      > span:nth-of-type(2) {
        border-radius: 0 5px 5px 0;
        border-left: 1px solid #fff;
      }
    }
    /*apply button*/
    > div:nth-of-type(2) {
      grid-column: 4 / span 1;
      @media (max-width: 960px) {
        grid-column: 1 / span 3;
        grid-row: 3 / span 1;
      }
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
      padding: 12px;
      border: 1px solid #18b0b0;
      border-radius: 5px;
      display: grid;
      transition: 1s;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: 300;
      :hover {
        opacity: 0.65;
        cursor: pointer;
      }
    }
    /*public and private*/
    > section:nth-of-type(2) {
      @media (max-width: 960px) {
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
      }
      display: flex;
      align-items: center;
      justify-items: center;
      background: #18b0b0;
      box-shadow: 1px 1px 5px rgba(24, 176, 176, 0.5);

      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      box-sizing: border-box;
      height: 42px;
      > input {
        margin: 0 15px;
        user-select: none;
        cursor: pointer;
      }

      > p:nth-of-type(2) {
        margin-right: 16px;
      }
    }
  }
  /*tab area*/
  > section:nth-of-type(1) {
    display: grid;
    grid-column: 1 / span 10;
    grid-template-rows: 30px 1fr;
    grid-template-columns: 1fr;
    > ul {
      grid-row: 2 / span 1;
      display: grid;
      width: 70%;
      margin: 0 auto;
      grid-template-columns: auto auto auto 4fr 2fr;
      grid-template-rows: 1fr;
      font-weight: 100;
      align-items: end;

      > span {
        text-align: center;
        transition: 1s;
        font-size: 1.4rem;
        font-weight: bolder;
        grid-column: 5 / span 1;
        cursor: pointer;
        :hover {
          opacity: 0.4;
        }
      }
      > li {
        display: grid;
        align-self: end;
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
`;

const ListChallenge = () => {
  const { data } = useContext(DataContext);
  const [tab, setTab] = useState("browse");
  const selectionRef = useRef();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Select category");
  const getBorderColor = (self) => {
    switch (self) {
      case "browse":
        return "4px solid #1eb2a6";
      case "submitted":
        return "4px solid #fe346e";
      case "following":
        return "4px solid #de7119";
      default:
        return "4px solid #d4f8e8";
    }
  };
  const handleExpand = () => {
    const et = new TimelineMax();
    if (!open) {
      setOpen(!open);
      et.staggerFromTo(
        selectionRef.current.children,
        0.3,
        {
          opacity: 0,
          scaleY: 1.1,
          scaleX: 0.8,
          y: (i) => (i !== 0 ? (i - 1) * 44 : ""),
        },
        {
          opacity: 1,
          scaleY: 1,
          scaleX: 1,
        },
        0.1
      );
    } else {
      setOpen(!open);
      et.set(selectionRef.current.children, {
        opacity: 0,
        y: 0,
      }).to(selectionRef.current.children[0], 1, {
        opacity: 1,
      });
    }
  };

  return (
    <ListChallengeWrapper>
      <section>
        <ul>
          <li
            onClick={() => setTab("browse")}
            style={{ borderBottom: getBorderColor("browse") }}
          >
            Browse
          </li>
          <li
            onClick={() => setTab("submitted")}
            style={{ borderBottom: getBorderColor("submitted") }}
          >
            Submitted
          </li>
          <li
            onClick={() => setTab("following")}
            style={{ borderBottom: getBorderColor("following") }}
          >
            Following
          </li>
          <span style={{ borderBottom: getBorderColor(tab) }}>Challenges</span>
        </ul>
      </section>
      {tab === "browse" && (
        <>
          <section>
            <div onClick={() => handleExpand()} ref={selectionRef}>
              <span onClick={() => setCategory("Select category")}>
                Select category
              </span>
              {!open && <span>{category}</span>}
              <span
                onClick={() => setCategory("Incubator")}
                style={{ opacity: "0" }}
              >
                Incubator
              </span>
              <span
                onClick={() => setCategory("Accelerator")}
                style={{ opacity: "0" }}
              >
                Accelerator
              </span>
              <span
                onClick={() => setCategory("University")}
                style={{ opacity: "0" }}
              >
                Univeristy
              </span>
              <span
                onClick={() => setCategory("High School")}
                style={{ opacity: "0" }}
              >
                High School
              </span>
              <span
                onClick={() => setCategory("Government")}
                style={{ opacity: "0" }}
              >
                Government
              </span>
            </div>
            <section>
              <span>all</span>
              <span>local</span>
            </section>
            <section>
              <input type="radio" name="project type" /> <p>public</p>
              <input type="radio" name="project type" /> <p>private</p>
            </section>
            <div>apply filter</div>
          </section>
          <section>
            {data &&
              data.news &&
              data.news.length > 0 &&
              data.news.map((d) => {
                return <ContentCard data={d} key={uuid4()} />;
              })}
          </section>
        </>
      )}
      {tab !== "browse" && <div>no challenges found</div>}
    </ListChallengeWrapper>
  );
};

export default ListChallenge;
