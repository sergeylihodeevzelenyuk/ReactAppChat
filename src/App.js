import React from "react";

import Chat from "./components/Chat";
import Input from "./components/Input";

import classes from "./App.module.css";
import "@fontsource/rubik";

const App = () => {
  return (
    <main className={classes.main}>
      <Chat />
      <Input />
    </main>
  );
};

export default App;
