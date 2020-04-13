import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header/Header";
import SidePanel from "./Components/SidePanel/SidePanel";
import { MenuContextProvider } from "./Context/MenuContext";
import { DataContextProvider } from "./Context/DataContext";
import DataWrapper from "./Components/DataWrapper/DataWrapper";
import ListChallenge from "./Pages/ListChallenge";
import CreateProject from "./Pages/CreateProject";
import JoinedLab from "./Pages/JoinedLab";
import ChallengeDetail from "./Pages/ChallengeDetail";
import MyProjects from "./Pages/MyProjects";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuContextProvider>
        <DataContextProvider>
          <DataWrapper>
            <Route component={Header} />
            <Route component={SidePanel} />
            <Switch>
              <Route path="/createProject" exact component={CreateProject} />
              <Route path="/page/:pageCount" exact component={App} />
              <Route path="/labs/page/:pageCount" component={App} />
              <Route path="/projects/page/:pageCount" component={App} />
              <Route path="/list/challenge" component={ListChallenge} />
              <Route
                path="/challengeManager/:title"
                component={ChallengeDetail}
              />
              <Route path="/joinedLab" component={JoinedLab} />
              <Route path="/myProjects" component={MyProjects} />
              <Route path="/projects" component={App} />
              <Route path="/labs" component={App} />
              <Route path="/" component={App} />
            </Switch>
          </DataWrapper>
        </DataContextProvider>
      </MenuContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
