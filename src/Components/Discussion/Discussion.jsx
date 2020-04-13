import React from "react";
import styled from "styled-components";
import Cat from "../../static/cat.jpg";
import Fox from "../../static/fox.jpg";
import Cow from "../../static/cow.jpg";

const DiscussionWrapper = styled.div`
  display: grid;

  div {
    height: "auto";
    margin-top: 1rem;

    border-radius: 4px;
    height: 90px;
    display: grid;
    grid-template-columns: 120px 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: "avt cmt thump";
    align-items: center;
    > img {
      display: grid;
      justify-self: center;
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }
    > p {
      box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);
      height: 100%;
      padding: 1rem;
      box-sizing: border-box;
    }
    > span {
      box-sizing: border-box;
      padding: 1rem;
    }
  }
  > div:last-child {
    margin-bottom: 1rem;
    box-shadow: none;
    display: grid;
    > div {
      grid-column: 1 / span 3;
      position: relative;
      display: grid;
      justify-content: center;
      grid-template-columns: 60% 10%;
      grid-template-rows: 1fr;

      > input[type="text"] {
        border: none;
        border-bottom: 2px solid #cecece;
        outline: none;
        padding: 1rem;
      }
      > span {
        position: relative;
        grid-column: 2 / span 1;
        overflow: hidden;
        display: grid;
        place-items: center;
        cursor: pointer;
        :hover {
          opacity: 0.5;
        }
        > i {
          position: absolute;

          margin: 0 1rem;
        }
        > input[type="file"],
        > input[type="file"]::-webkit-file-upload-button {
          z-index: 2;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
  }
`;

const Discussion = () => {
  return (
    <DiscussionWrapper>
      <div>
        <img src={Cat} alt="cat" />
        <p>(meow...)</p>
        <span>hehe</span>
      </div>
      <div>
        <img src={Cow} alt="cow" />
        <p>(moo...)</p>
        <span>hehe</span>
      </div>
      <div>
        <img src={Fox} alt="fox" />
        <p>(....)</p>
        <span>hehe</span>
      </div>
      <div>
        <div>
          <input type="text" />
          <span>
            <input type="file" />
            <i className="fas fa-folder-plus"></i>
          </span>
        </div>
      </div>
    </DiscussionWrapper>
  );
};

export default Discussion;
