import React from "react";
import "./App.css";

type routerItem = {
  path: string;
  component: JSX.Element;
};

const router: routerItem[] = [
  {
    path: '/',
    component: <Main />
  },
  {
    path: '*',
    component
  }
]

const App: React.FC = () => {
  return <div className="App"></div>;
};

export default App;
