import { Tabbar, TabbarItem } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { DefaultConfig, ProxyTabBarConfig } from "./config";
import { Image } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { tabbarSelector, updateActivePage } from "@/store/modules/tabbar";
import { useMemo } from "react";
import { userSelector } from "src/store/modules/user";

/**
 * @descroption https://github.com/NervJS/taro/issues/7302
 * tabbar 需要两次点击才会切换active样式
 * 选择使用redux的方式解决该问题
 */
export default function CustomTabBar() {
  const activePage = useSelector(tabbarSelector.activePage);
  const currentRole = useSelector(userSelector.currentRole);
  const dispatch = useDispatch();

  const tabbarConfig = useMemo(() => {
    if (currentRole === "doctor") {
      return DefaultConfig;
    }

    if (currentRole === "proxy") {
      return ProxyTabBarConfig;
    }

    return DefaultConfig;
  }, [currentRole]);
  return (
    <Tabbar
      active={activePage}
      onChange={(e) => {
        dispatch(updateActivePage(e.detail));
      }}
      safeAreaInsetBottom
    >
      {tabbarConfig.map((config) => {
        return (
          <TabbarItem
            key={config.key}
            renderIconActive={
              <Image src={config.activeIcon} className="w-[40px] h-[40px]" />
            }
            renderIcon={
              <Image src={config.icon} className="w-[40px] h-[40px]" />
            }
            name={`/${config.path}`}
          >
            {config.text}
          </TabbarItem>
        );
      })}
    </Tabbar>
  );
}
