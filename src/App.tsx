import React from "react";
import NotFound from "./pages/NotFound/NotFound";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import "./assets/all.css";
import "./App.css";
import Registration from "./pages/Auth/Registration/Registration";
import Login from "./pages/Auth/Login/Login";
import Header from "./components/Header/Header";

type routerItem = {
  path: string;
  component: JSX.Element;
};

const router: routerItem[] = [
  {
    path: "/",
    component: <Main />,
  },
  {
    path: "/registration",
    component: <Registration />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
