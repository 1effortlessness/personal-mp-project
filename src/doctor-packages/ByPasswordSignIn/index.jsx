import PageWithTabBar from "@/components/PageWithTabBar";
import { Image, View } from "@tarojs/components";
import SignLogo from "@/assets/images/SignInLogo.png";
import Field from "@/components/Field";
import { Button } from "@antmjs/vantui";

const ByPasswordSignIn = () => {
  return (
    <PageWithTabBar className="flex flex-col items-center">
      <View className="mt-[98px]">
        <Image src={SignLogo} className="w-[306px] h-[108px]" />
      </View>

      <View className="w-[564px] mt-[98px]">
        <Field
          titleWidth="60px"
          label="用户名"
          placeholder="请输入用户名"
          border={false}
        />

        <Field
          required
          titleWidth="60px"
          label="密码"
          placeholder="请输入用户名"
          border={false}
          className="mt-[12px]"
        />
      </View>

      <View className="w-[364px] mt-[48px] flex flex-col gap-[48px]">
        <Button type="primary" block round>
          登录
        </Button>

        <Button type="primary" block round plain hairline>
          注册
        </Button>
      </View>
    </PageWithTabBar>
  );
};

export default ByPasswordSignIn;
