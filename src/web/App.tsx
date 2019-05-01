import React from "react";
import { style } from "typestyle";
import FD from "../wasm/react";
import Display from "./Display";
import CartList from "./CartList";
import { BOOTLOADER } from "./data";
import Debug from "./Debug";

const CSS = {
  root: style({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  })
};

export function App() {
  const { fd } = React.useContext(FD.Context);

  return (
    <div>
      <CartList extra={{ bootloader: BOOTLOADER }} />
      <Display pixels={fd.display()} signal={fd.changed} />
    </div>
  );
}

export default function(props: { debugMode?: boolean }) {
  return (
    <FD.Provider bootCart={BOOTLOADER}>
      <div className={CSS.root}>
        {props.debugMode && <Debug.Left />}
        <App />
        {props.debugMode && <Debug.Right />}
      </div>
    </FD.Provider>
  );
}
