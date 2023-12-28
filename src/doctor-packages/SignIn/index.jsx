import PageWithTabBar from "@/components/PageWithTabBar";
import { Image, View, Text } from "@tarojs/components";
import SignLogo from "@/assets/images/SignInLogo.png";
import { Button, Radio } from "@antmjs/vantui";

const SignIn = () => {
  return (
    <PageWithTabBar className="flex flex-col items-center">
      <View className="mt-[98px]">
        <Image src={SignLogo} className="w-[306px] h-[108px]" />
      </View>

      <View className="mt-[98px] flex flex-col items-center w-[364px]">
        <Button type="primary" round block size="large">
          手机号一键登录
        </Button>

        <Text className="text-primary font-extrabold mt-[24px] mb-[48px]">
          账号密码登录
        </Text>
        <Button type="primary" round block size="large" plain hairline>
          注册
        </Button>
      </View>

      <View className="px-[48px] mt-[512px]">
        <Radio
          style={{ alignItems: "start" }}
          name="2"
          iconSize="16px"
          shape="square"
        >
          <View>
            允许我们在必要的场景下，合理使用您的个人信息，且阅读并同意《患者知情同意书》《用户协议》《隐私协议》等内容
          </View>
        </Radio>
      </View>
    </PageWithTabBar>
  );
};

export default SignIn;
