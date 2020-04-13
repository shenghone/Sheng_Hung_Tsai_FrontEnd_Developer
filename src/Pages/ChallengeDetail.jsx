import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import MenuContext from "../Context/MenuContext";
import styled from "styled-components";
import test from "../static/explore.jpeg";
import dayjs from "dayjs";
import { TimelineMax, TweenMax } from "gsap";
import Overview from "../Components/Overview/Overview";
import Submissions from "../Components/Submissions/Submissions";
import Discussion from "../Components/Discussion/Discussion";
import Members from "../Components/Members/Members";
import { useLocation } from "react-router-dom";
import _ from "lodash";

const ChallengeDetailWrapper = styled.div`
  position: relative;
  width: 100%;
  > div:nth-of-type(2) {
    box-sizing: border-box;
    padding: 1rem;
  }

  @media (min-width: 680px) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 80px 380px 1fr;
    align-items: center;
    overflow: hidden;
    > div:nth-of-type(1) {
      position: relative;
      grid-column: 1 / span 6;
      grid-row: 2 / span 1;
      overflow: hidden;

      > img {
        opacity: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    > div:nth-of-type(2) {
      grid-column: 7 / span 4;
      grid-row: 2 / span 1;
      font-size: 1.1rem;
      color: #000;
      display: grid;
      box-sizing: border-box;
      justify-self: center;
      position: relative;
      width: 95%;
      > h2 {
        letter-spacing: 0.01rem;
        color: #27ae60;
      }

      > div:nth-of-type(1) {
        > h5 {
          width: 100%;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
        }
        > span {
          color: #fe346e;
          display: block;
          margin: 1rem 0;
        }
        > section {
          display: flex;

          height: 20px;

          > img {
            height: 20px;
            width: 20px;
            object-fit: contain;
            padding: 1px 3px;
          }
          > p {
            margin: 0;
            font-size: 0.9rem;
          }
        }
      }
      > div:nth-of-type(2) {
        align-self: end;
        display: flex;
        justify-content: flex-end;
        > button {
          outline: none;

          margin: 0 4px;
          background: #27ae60;
          padding: 8px 12px;
          border: 1px solid #27ae60;
          border-radius: 4px;
          font-size: 15px;
          color: #fff;
          cursor: pointer;
          box-shadow: 1px 1px 5px rgba(39, 174, 96, 0.4);
          :hover {
            opacity: 0.7;
          }
        }
      }
    }
    > div:nth-of-type(3) {
      box-sizing: border-box;
      width: 80%;
      justify-self: center;
      margin: 50px 0 0 0;

      grid-column: 1 / span 10;
      grid-row: 3 / span 1;
      grid-template-rows: 30px 1fr;
      grid-template-columns: 1fr;
      > section:nth-of-type(2) {
        display: grid;
        grid-auto-flow: dense;
        grid-template-rows: repeat(auto-fill, minmax(20px, 1fr));
        > div {
          padding: 1rem;
          color: #27ae60;

          ul {
            list-style: none;
            color: #000;
            > li {
              opacity: 0;
              padding: 8px 0;
              font-weight: 400;
            }
          }
          > p {
            color: #000;
            padding: 40px;
          }
        }
        > div:nth-of-type(2) {
          height: ${({ expand }) => (expand ? "auto" : "200px")};
          overflow: ${({ expand }) => (expand ? "" : "hidden")};
          transition: 1s;
          > p {
            line-height: 1.6rem;
          }
        }
      }

      /*tab section*/
      > section:nth-of-type(1) {
        width: 100%;
        display: grid;
        grid-template-columns: auto 4fr 6fr;
        grid-template-rows: 1fr;
        > ul:nth-of-type(1) {
          grid-column: 1 / span 1;
          margin: 0;
          padding: 0;
          width: 100%;
          display: flex;
          list-style: none;
          > li {
            opacity: 0;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-width: 4px;
            cursor: pointer;
            :hover {
              opacity: 0.4;
            }
          }
        }

        /*current tab*/
        > span {
          grid-column: 3 / span 1;
          transition: 1s;
          opacity: 0;
        }
      }
    }
  }
`;

const ChallengeDetail = () => {
  const { pathname } = useLocation();
  const [tab, setTab] = useState("overview");
  const { setDisplayMenu } = useContext(MenuContext);
  const [expand, setExpand] = useState(false);
  const [cost, setCost] = useState(null);
  const [now] = useState(new Date());
  const [past, setPast] = useState(null);
  const [reward, setReward] = useState(null);
  const titleRef = useRef();
  const tabUlRef = useRef();
  const currentTabRef = useRef();
  const buttonAreaRef = useRef();
  const contentRef = useRef();
  const imgRef = useRef();

  const [future, setFuture] = useState(null);

  const getRandomFutureDate = useCallback(() => {
    const randomNum = _.random(3, 14);
    const f = dayjs(now).add(randomNum, "day").format("MMM DD, YYYY");
    setFuture(f);
  }, [now]);

  const getReward = () => {
    const r = _.random(1, 6) * 100;
    setReward(r);
  };

  const getRandomPastDate = useCallback(() => {
    const randomNum = _.random(3, 8);
    const p = dayjs(now).subtract(randomNum, "day").format("MMM DD, YYYY");
    setPast(p);
  }, [now]);

  const getDaysLeft = (start, end) => {
    const l = dayjs(start).diff(dayjs(end), "days");
    if (l === 1) {
      return "1 day left";
    }
    return `${l} days left`;
  };
  const getRandomPoint = () => {
    const c = _.random(1, 3) * 1000;
    setCost(c);
  };
  useEffect(() => {
    getRandomFutureDate();
    getRandomPastDate();
    getReward();
    getRandomPoint();
  }, [getRandomFutureDate, getRandomPastDate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const et = new TimelineMax();

    et.set(imgRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
    });
    et.from(imgRef.current, 1, {
      x: "-20%",
      opacity: -1,
      scale: 1.4,
    });

    TweenMax.from(titleRef.current, 1.3, {
      y: -5,
      delay: 0.5,
      opacity: -2,
    });
    TweenMax.from(contentRef.current, 1.2, {
      x: 20,
      delay: 1,
      opacity: -2,
    });
    TweenMax.set(buttonAreaRef.current, {
      opacity: -1,
      y: -20,
    });
    TweenMax.to(buttonAreaRef.current, 1, {
      y: 0,
      delay: 1.1,
      opacity: 1,
    });
    et.set(tabUlRef.current.children, {
      opacity: 0,
      y: 20,
    });
    et.staggerTo(
      tabUlRef.current.children,
      1.2,
      {
        y: 0,
        opacity: 1,
      },
      0.4
    );
    et.to(currentTabRef.current, 1, {
      x: 0,
      opacity: 1,
      delay: -1,
    });
  }, []);
  const getBorderColor = (current) => {
    switch (current) {
      case "overview":
        return "4px solid #00a8cc";
      case "discussion":
        return "4px solid #de7119";
      case "submissions":
        return "4px solid #ffd31d";
      case "members":
        return "4px solid #fe346e";
      default:
        return "4px solid #fe346e";
    }
  };
  return (
    <ChallengeDetailWrapper
      onWheel={() => setDisplayMenu(false)}
      tab={tab}
      expand={expand}
    >
      <div>
        <img ref={imgRef} src={test} alt="" />
      </div>
      <div>
        <h2 ref={titleRef}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam iure
          soluta sint.
        </h2>
        <div ref={contentRef}>
          <h5>
            {past} - {future}
          </h5>
          <span>{now && future && getDaysLeft(future, now)}</span>
          <section>
            <img
              src="https://preprmedialive.s3.amazonaws.com/public/front/img/logo.png"
              alt="logo"
            ></img>
            <p>participants: -{cost}</p>
          </section>
        </div>
        <div ref={buttonAreaRef}>
          <button>submit</button>
          <button>follow</button>
          <button>
            <i className="fas fa-share"></i>
          </button>
        </div>
      </div>
      <div>
        <section>
          <ul ref={tabUlRef}>
            <li
              onClick={() => setTab("overview")}
              style={{ borderBottom: getBorderColor("overview") }}
            >
              Overview
            </li>
            <li
              onClick={() => setTab("discussion")}
              style={{ borderBottom: getBorderColor("discussion") }}
            >
              Discussion
            </li>
            <li
              onClick={() => setTab("submissions")}
              style={{ borderBottom: getBorderColor("submissions") }}
            >
              Submissions
            </li>
            <li
              onClick={() => setTab("members")}
              style={{ borderBottom: getBorderColor("members") }}
            >
              Members
            </li>
          </ul>
          <span
            ref={currentTabRef}
            style={{ borderBottom: getBorderColor(tab) }}
          ></span>
        </section>
        {tab === "overview" && (
          <Overview
            expand={expand}
            setExpand={setExpand}
            future={future}
            reward={reward}
          />
        )}
        {tab === "discussion" && <Discussion />}
        {tab === "submissions" && <Submissions />}
        {tab === "members" && <Members />}
      </div>
    </ChallengeDetailWrapper>
  );
};

export default ChallengeDetail;
