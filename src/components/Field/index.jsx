import { Field as VantField } from "@antmjs/vantui";
import Styles from "./index.module.scss";
import classNames from "classnames";

const Field = ({ ...props }) => {
  return (
    <VantField
      {...props}
      style={{ padding: 0, ...props.style }}
      className={classNames(Styles.override, props.className)}
    />
  );
};

export default Field;
