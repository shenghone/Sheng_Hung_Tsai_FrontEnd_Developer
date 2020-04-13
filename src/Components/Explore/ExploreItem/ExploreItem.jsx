import React, { useContext, useRef } from "react";
import styled from "styled-components";
import DataContext from "../../../Context/DataContext";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { TweenMax } from "gsap";
import { useEffect } from "react";

const ExploreItemWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  @media (min-width: 680px) {
    grid-column: ${({ idx }) => (idx === 0 ? "span 2" : "span 1")};
  }
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "desc";

  > div:nth-of-type(1) {
    grid-area: image;
    width: 100%;

    > img {
      object-fit: ${({ idx }) => (idx === 0 ? "cover" : "cover")};
      width: 100%;
      max-height: ${({ idx }) => (idx === 0 ? "500px" : "300px")};
      height: 100%;
      opacity: 0;
    }
  }
  > div:nth-of-type(2) {
    opacity: 0;
    padding: 0.5rem;
    grid-area: desc;
    > h3 {
      color: #27ae60;
      padding: 0 1rem;
      text-align: left;
    }
    > p {
      text-align: left;
    }
    > span {
      display: grid;
      align-self: end;
      justify-self: end;
      padding: 0.5rem;
      font-size: 14px;
      font-weight: bold;
      color: #27ae60;
      cursor: pointer;
    }
  }
`;
const ExploreItem = ({ data, idx, ...rest }) => {
  const history = useHistory();
  const { dataMap, data: contextData } = useContext(DataContext);
  const imgRef = useRef();
  const descRef = useRef();
  const handleTo = (title) => {
    history.push(`/challengeManager/${title}`);
  };
  const getImageLink = () => {
    const d = _.sample(contextData.picture);
    return idx === 0 ? d.urls.regular : d.urls.small;
  };
  useEffect(() => {
    if (dataMap && dataMap.size) {
      TweenMax.set(imgRef.current, {
        opacity: 0,
        y: -5,
      });
      TweenMax.set(descRef.current, {
        opacity: 0,
        x: -5,
      });
      if (idx < 7) {
        TweenMax.to(imgRef.current, 1, {
          opacity: 1,
          delay: 1,
          y: 0,
        });
        TweenMax.to(descRef.current, 1, {
          opacity: 1,
          delay: 1,
          x: 0,
        });
      } else {
        TweenMax.set(imgRef.current, {
          opacity: 1,
          y: 0,
        });
        TweenMax.set(descRef.current, {
          opacity: 1,
          x: 0,
        });
      }
    }
  }, [dataMap, idx]);
  return (
    <ExploreItemWrapper idx={idx}>
      <div>
        {dataMap && dataMap.size > 0 && (
          <img ref={imgRef} src={getImageLink()} alt="" />
        )}
      </div>
      <div ref={descRef}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <span onClick={() => handleTo(data.title)}>view</span>
      </div>
    </ExploreItemWrapper>
  );
};

export default ExploreItem;

/*
  const loc = useLocation();
  const getPath = ({ pathname }) => {
    const p = pathname.split("/")[1];
    if (!p || p === "page") {
      return "challenges";
    }
    return p;
  };
  const getDescription = (desc) => {
    return desc.split(" ").reduce((result, word, idx) => {
      if (idx < 30) {
        return result.concat(` ${word}`);
      } else if (idx === 30) {
        return result.concat(" ...");
      }
      return result;
    }, "");
  };
  return (
    <ExploreItemWrapper>
      <div>
        <img src={data.urlToImage} alt="cover" />
      </div>
      <div>
        <h3>{data.title}</h3>
        <h5> {loc && getPath(loc)}</h5>
        <p>{getDescription(data.description)}</p>
        <h6>view</h6>
      </div>
    </ExploreItemWrapper>
  );
};



*/
