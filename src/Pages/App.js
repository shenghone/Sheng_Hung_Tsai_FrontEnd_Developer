import React, { useContext } from "react";
import MenuContext from "../Context/MenuContext";
import styled from "styled-components";
import DataContext from "../Context/DataContext";
import Explore from "../Components/Explore/Explore";

import "./App.css";

const AppWrapper = styled.div`
  height: 100%;
  min-height: 600px;
  position: relative;
  min-width: 100%;
`;

function App({ match }) {
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  const { data } = useContext(DataContext);
  const handleScroll = () => {
    if (displayMenu) {
      setDisplayMenu(false);
    }
  };
  console.log(data);
  return (
    <AppWrapper onWheel={() => handleScroll()} className="App">
      {data && data.news && Object.values(data).length > 0 && (
        <Explore data={data.news} />
      )}
    </AppWrapper>
  );
}

export default App;
