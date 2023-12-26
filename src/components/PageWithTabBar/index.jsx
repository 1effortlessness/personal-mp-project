import { View } from "@tarojs/components";
import CustomTabBar from "@/components/CustomTabBar";
import "./index.scss";
import classNames from "classnames";
import { ConfigProvider } from "@antmjs/vantui";
import { themeVars } from "@/config/theme";
const PageWithTabBar = ({ children, ...viewProps }) => {
  return (
    <ConfigProvider themeVars={themeVars}>
      <View
        {...viewProps}
        className={classNames("safe-area-view", viewProps.className)}
      >
        {children}
      </View>
      <CustomTabBar />
    </ConfigProvider>
  );
};

export default PageWithTabBar;
