import React from "react";
import { keyBy } from "lodash";
import { style } from "typestyle";
import FundudeWasm, { GBInstruction } from "../../wasm";
import LazyScroller from "../LazyScroller";

function formatAddr(addr: number) {
  return addr
    .toString(16)
    .padStart(4, "0")
    .toUpperCase();
}

function formatInstr(addr: number) {
  return addr
    .toString(16)
    .padStart(2, "0")
    .toUpperCase();
}

const CSS = {
  root: style({
    fontFamily: "monospace",
    height: "100%"
  }),
  child: style({
    display: "flex",
    cursor: "pointer"
  }),
  childSegment: style({
    margin: "0 4px"
  }),
  breakpoint: style({
    display: "inline-block",
    width: 10,
    height: 10,
    alignSelf: "center",

    $nest: {
      "&.active": {
        background: "red",
        borderRadius: "100%"
      }
    }
  })
};

export default function Disassembler(props: { fd: FundudeWasm }) {
  const [assembly, setAssembly] = React.useState(
    //
    {} as Record<number, GBInstruction>
  );

  React.useEffect(() => {
    FundudeWasm.ready().then(() => {
      const assembly = Array.from(FundudeWasm.disassemble(props.fd.cart));
      setAssembly(keyBy(assembly, "addr"));
    });
  }, [props.fd.cart]);

  return (
    <div className={CSS.root}>
      <LazyScroller
        childWidth={250}
        childHeight={15}
        totalChildren={props.fd.cart.length}
        focus={props.fd.registers.PC()}
      >
        {addr => (
          <div
            className={CSS.child}
            onClick={() => props.fd.setBreakpoint(addr)}
          >
            <i
              className={`${CSS.breakpoint} ${
                props.fd.breakpoint === addr ? "active" : ""
              }`}
            />
            <span className={CSS.childSegment}>${formatAddr(addr)}</span>
            <span className={CSS.childSegment}>
              {formatInstr(props.fd.cart[addr])}
            </span>
            <strong className={CSS.childSegment}>
              {assembly[addr] && assembly[addr].text}
            </strong>
          </div>
        )}
      </LazyScroller>
    </div>
  );
}