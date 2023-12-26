import { View } from "@tarojs/components";
import CustomTabBar from "@/components/CustomTabBar";
import "./index.scss";
import classNames from "classnames";

const PageWithTabBar = ({ children, ...viewProps }) => {
  return (
    <>
      <View
        {...viewProps}
        className={classNames("safe-area-view", viewProps.className)}
      >
        {children}
      </View>
      <CustomTabBar />
    </>
  );
};

export default PageWithTabBar;
