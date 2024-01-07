import { Text } from "@tarojs/components";
import "./index.scss";
import PageWithTabBar from "@/components/PageWithTabBar";
import Taro from "@tarojs/taro";
import { getToken, getTokenRole } from "src/utils/storage";
import { useSignIn } from "src/hooks/useSignIn";

export default function Index() {
  return (
    <PageWithTabBar>
      <Text className="text-[100px]">Hello world!</Text>
    </PageWithTabBar>
  );
}
