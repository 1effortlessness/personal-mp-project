import PageWithTabBar from "@/components/PageWithTabBar";
import { Image, View } from "@tarojs/components";
// @ts-ignore
import SignLogo from "@/assets/images/SignInLogo.png";
import Field from "@/components/Field";
import { Button, Form, FormItem } from "@antmjs/vantui";
import "./page.scss";
import Taro, { useRouter } from "@tarojs/taro";
import { gotoSignUp } from "src/utils/navigator";
import { useSignIn } from "src/hooks/useSignIn";

const ByPasswordSignIn = () => {
  const router = useRouter();
  const { workerLoginHandler, doctorLoginByPassword, patientLoginByPassword } =
    useSignIn();
  const role = router.params.role;
  const isWorker = role === "worker";
  const isDoctor = role === "doctor";
  const isPatient = role === "patient";
  const onFinish = (_err, values) => {
    if (isWorker) {
      workerLoginHandler(values);
      return;
    }

    if (isDoctor) {
      doctorLoginByPassword({ mobile: values.name, password: values.password });
      return;
    }

    if (isPatient) {
      patientLoginByPassword({
        mobile: values.name,
        password: values.password
      });
      return;
    }

    Taro.showToast({ title: "请确认登录角色", icon: "none" });
  };
  return (
    <PageWithTabBar className="flex flex-col items-center">
      <View className="mt-[98px]">
        <Image src={SignLogo} className="w-[306px] h-[108px]" />
      </View>

      <View className="w-[564px] mt-[98px]">
        <Form onFinish={onFinish} className="override">
          <FormItem
            messageClassName="hidden"
            required
            label="用户名"
            name="name"
          >
            <Field
              required
              titleWidth="60px"
              label="用户名"
              placeholder="请输入用户名"
              border={false}
            />
          </FormItem>
          <FormItem required label="密码" name="password">
            <Field
              required
              titleWidth="60px"
              label="密码"
              placeholder="请输入密码"
              border={false}
              className="mt-[12px]"
            />
          </FormItem>

          <View className="flex justify-center">
            <View className="w-[364px] mt-[48px] flex flex-col gap-[48px]">
              <Button type="primary" formType="submit" block round>
                登录
              </Button>

              {!isWorker && (
                <Button
                  onClick={() => gotoSignUp(role)}
                  type="primary"
                  block
                  round
                  plain
                  hairline
                >
                  注册
                </Button>
              )}
            </View>
          </View>
        </Form>
      </View>
    </PageWithTabBar>
  );
};

export default ByPasswordSignIn;
