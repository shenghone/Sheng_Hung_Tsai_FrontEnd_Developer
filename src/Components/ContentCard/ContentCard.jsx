import React, { useContext } from "react";
import styled from "styled-components";

import DataContext from "../../Context/DataContext";

const ContentCardWrapper = styled.section`
  all: none;
  display: grid;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content auto;
    > img {
      min-height: 300px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > div:nth-of-type(1) {
      box-sizing: border-box;
      padding: 0 1rem;
      > h4 {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 0;
        margin: 1rem 0 0 0;
        color: #27ae60;
      }
      > h6 {
        padding: 0;
        font-weight: 700;
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }
      > p {
        font-weight: 300;
      }
    }
  }
  @media (min-width: 680px) {
    grid-template-columns: max-content 1fr;
    grid-template-rows: auto;
    box-sizing: border-box;
    margin: 1rem 0 0 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #cecece;
    > img {
      max-width: 340px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 250px;
    }
    > div:nth-of-type(1) {
      box-sizing: border-box;
      padding: 0 1rem;
      > h4 {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.5rem;
        padding: 0;
        margin: 1rem 0 0 0;
        color: #27ae60;
      }
      > h6 {
        padding: 0;
        font-weight: 700;
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }
      > p {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
`;

const ContentCard = ({ data }) => {
  const { dataMap } = useContext(DataContext);
  return (
    <ContentCardWrapper>
      {/*<div>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam ad
          aperiam numquam nemo. Odit.
        </h4>
        <h6>Prepr</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          pariatur quae excepturi ut quisquam consequuntur suscipit nostrum
          aspernatur iusto ex.
        </p>
      </div>*/}
      {dataMap && dataMap.size > 0 && (
        <img src={dataMap.get(data.title).urls.small} alt="" />
      )}
      <div>
        <h4>{data.title}</h4>
        <h6>Prepr</h6>
        <p>{data.description}</p>
      </div>
    </ContentCardWrapper>
  );
};

export default ContentCard;
