import { Tabbar, TabbarItem } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import { DefaultConfig } from "./config";
import { Image } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { tabbarSelector, updateActivePage } from "@/store/modules/tabbar";

/**
 * @descroption https://github.com/NervJS/taro/issues/7302
 * tabbar 需要两次点击才会切换active样式
 * 选择使用redux的方式解决该问题
 */
export default function CustomTabBar() {
  const activePage = useSelector(tabbarSelector.activePage);
  const dispatch = useDispatch();

  return (
    <Tabbar
      active={activePage}
      onChange={(e) => {
        dispatch(updateActivePage(e.detail));
        Taro.switchTab({
          url: e.detail,
        });
      }}
      safeAreaInsetBottom
    >
      {DefaultConfig.map((config) => {
        return (
          <TabbarItem
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
