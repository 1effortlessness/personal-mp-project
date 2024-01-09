import { ScrollView, View } from "@tarojs/components";
import CustomTabBar from "@/components/CustomTabBar";
import "./index.scss";
import classNames from "classnames";
import { ConfigProvider } from "@antmjs/vantui";
import { themeVars } from "src/config/theme";

const PageWithTabBar = ({ children, ...viewProps }) => {
  return (
    <ConfigProvider className="h-full" themeVars={themeVars}>
      <ScrollView
        scrollY
        {...viewProps}
        className="safe-area-view w-full"
      >
        <View {...viewProps}>{children}</View>
      </ScrollView>
      <CustomTabBar />
    </ConfigProvider>
  );
};

export default PageWithTabBar;
