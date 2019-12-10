import React from "react";

import nano from "../nano";
import { hex4 } from "./util";

import FundudeWasm from "../../wasm";

const CSS = {
  root: nano.rule({
    display: "flex",
    textAlign: "center",
    fontFamily: "monospace",
    justifyContent: "space-between"
  })
};

export default function Cpu(props: { reg: ReturnType<FundudeWasm["cpu"]> }) {
  return (
    <dl className={CSS.root}>
      <div>
        <dt>AF</dt>
        <dd>{hex4(props.reg.AF())}</dd>
      </div>
      <div>
        <dt>BC</dt>
        <dd>{hex4(props.reg.BC())}</dd>
      </div>
      <div>
        <dt>DE</dt>
        <dd>{hex4(props.reg.DE())}</dd>
      </div>
      <div>
        <dt>HL</dt>
        <dd>{hex4(props.reg.HL())}</dd>
      </div>
      <div>
        <dt>SP</dt>
        <dd>{hex4(props.reg.SP())}</dd>
      </div>
      <div>
        <dt>PC</dt>
        <dd>{hex4(props.reg.PC())}</dd>
      </div>
    </dl>
  );
}