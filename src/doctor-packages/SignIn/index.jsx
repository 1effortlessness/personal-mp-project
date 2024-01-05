// @ts-nocheck
import PageWithTabBar from "@/components/PageWithTabBar";
import { Image, View, Text } from "@tarojs/components";
import SignLogo from "@/assets/images/SignInLogo.png";
import { Button, Radio } from "@antmjs/vantui";
import { useRouter } from "@tarojs/taro";
import { gotoPasswordSignIn, gotoSignUp } from "src/utils/navigator";
import styles from "./page.module.scss";
import classNames from "classnames";
import utils from "src/utils";
import { useSignIn } from "src/hooks/useSignIn";

const SignIn = () => {
  const router = useRouter();
  const role = router.params.role;
  const { wxLoginHandler } = useSignIn(role);
  return (
    <PageWithTabBar className="flex flex-col items-center">
      <View className="mt-[98px]">
        <Image src={SignLogo} className="w-[306px] h-[108px]" />
      </View>

      <View className="mt-[98px] flex flex-col items-center w-[364px]">
        <Button
          onClick={wxLoginHandler}
          // openType="getPhoneNumber"
          // onGetPhoneNumber={(e) => console.log(e)}
          type="primary"
          round
          block
          size="large"
        >
          手机号一键登录
        </Button>

        {role !== "proxy" && (
          <Text
            onClick={() => {
              gotoPasswordSignIn(role);
            }}
            className="text-primary font-extrabold mt-[24px]"
          >
            账号密码登录
          </Text>
        )}
        {role === "proxy" && (
          <View className="w-full mt-[48px]">
            <Button
              onClick={() => gotoSignUp(role)}
              type="primary"
              round
              block
              size="large"
              plain
              hairline
            >
              注册
            </Button>
          </View>
        )}
      </View>

      <View className={classNames(styles.override, "px-[48px] mt-[512px]")}>
        <Radio
          style={{ alignItems: "start" }}
          name="2"
          iconSize="16px"
          shape="square"
        >
          <View
            onClick={() =>
              utils.storage.getToken().then((res) => {
                console.log(res);
              })
            }
          >
            允许我们在必要的场景下，合理使用您的个人信息，且阅读并同意《患者知情同意书》《用户协议》《隐私协议》等内容
          </View>
        </Radio>
      </View>
    </PageWithTabBar>
  );
};

export default SignIn;
