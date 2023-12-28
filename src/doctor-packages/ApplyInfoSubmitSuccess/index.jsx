import PageWithTabBar from "@/components/PageWithTabBar";
import { Button } from "@antmjs/vantui";
import { View, Text } from "@tarojs/components";

const ApplyInfoSubmitSuccess = () => {
  return (
    <PageWithTabBar className="flex flex-col items-center">
      <View className="w-[120px] h-[120px] bg-primary mt-[92px] rounded-full"></View>

      <Text className="text-base font-medium block leading-[48px] mt-12">
        您的病例已经上传至基金会审核,
      </Text>
      <Text className="text-base font-medium leading-[48px] block">
        预计将在7个工作日内完成审核。
      </Text>
      <Text className="text-base font-medium leading-[48px] block">
        审核通过后，将会以短信提示，请您耐心等待。
      </Text>

      <View className="w-[288px] mt-[82px]">
        <Button round type="primary" block>
          确定
        </Button>
      </View>
    </PageWithTabBar>
  );
};

export default ApplyInfoSubmitSuccess;
