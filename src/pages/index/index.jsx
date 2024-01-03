import { Text } from "@tarojs/components";
import "./index.scss";
import PageWithTabBar from "@/components/PageWithTabBar";

export default function Index() {
  return (
    <PageWithTabBar>
      <Text className="text-[100px]">Hello world!</Text>
    </PageWithTabBar>
  );
}
