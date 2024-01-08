import { View } from "@tarojs/components";
import CustomTabBar from "@/components/CustomTabBar";
import "./index.scss";
import classNames from "classnames";
import { ConfigProvider } from "@antmjs/vantui";
import { themeVars } from "src/config/theme";

const PageWithTabBar = ({ children, ...viewProps }) => {
  return (
    <ConfigProvider className="h-full" themeVars={themeVars}>
      <View
        {...viewProps}
        className={classNames("safe-area-view h-full", viewProps.className)}
      >
        {children}
      </View>
      <CustomTabBar />
    </ConfigProvider>
  );
};

export default PageWithTabBar;
