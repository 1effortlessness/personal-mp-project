import { useState } from "react";

export function useDialog(initFlag) {
  const [show, setShow] = useState(initFlag || false);
  const close = () => setShow(false);
  const open = () => setShow(true);
  return {
    show,
    close,
    open
  };
}
