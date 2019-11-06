import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import SideMenu from "../components/SideMenu";

const Home = lazy(() => import("../screens/Home"));
const AllGames = lazy(() => import("../screens/Home"));
const LiveStreams = lazy(() => import("../screens/Home"));
const LiveStream = lazy(() => import("../screens/Home"));
const Videos = lazy(() => import("../screens/Home"));
const Video = lazy(() => import("../screens/Home"));

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideMenu />
      <div className="ScreenContainer">
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/directory" component={AllGames} />
            <Route path="/directory/game/:gameId" component={LiveStreams} />
            <Route path="/:userId" component={LiveStream} />
            <Route path="/:userId/videos" component={Videos} />
            <Route path="/videos/:videoId" component={Video} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default Router;
