import { Button } from "@antmjs/vantui";
import { View } from "@tarojs/components";

const LogOutButton = () => {
  return (
    <View className="fixed bottom-[200px] left-0 w-full px-[48px]">
      <Button plain hairline block type="primary">
        退出登录
      </Button>
    </View>
  );
};

export default LogOutButton;
