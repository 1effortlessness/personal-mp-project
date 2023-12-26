import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { Button } from "@antmjs/vantui";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <View>
        <View>primary button with rounded corners</View>
        <Button type="primary" round className="w-[182px]">button</Button>
      </View>
      <View>
        <View>text button</View>
        <Button>button</Button>
      </View>
      <View>
        <View>outline button</View>
        <Button></Button>
      </View>
    </View>
  );
}
