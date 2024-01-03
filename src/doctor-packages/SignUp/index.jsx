import { View } from "@tarojs/components";
import { Button, FormItem, Form, Dialog } from "@antmjs/vantui";
import Field from "@/components/Field";
import InfoCard from "@/components/InfoCard";
import { phone, ID } from "@/utils/regex";
import { useRouter } from "@tarojs/taro";
import { goBack } from "src/utils/navigator";
import apis from "src/apis";

/**
 *
 * @description 患者注册页
 */
function SignUp() {
  const formIt = Form.useForm();
  const router = useRouter();
  const role = router.params.role;

  useRequest;
  const onFinish = (_err, res) => {};
  return (
    <View className="p-4">
      <Form
        onChange={(e) => {
          console.log(e);
        }}
        form={formIt}
        onFinish={onFinish}
      >
        {role === "patient" ? (
          <>
            <InfoCard
              title="基本信息"
              titleDesc="以下内容为必填"
              className="mt-[40px]"
            >
              <FormItem label="患者姓名" name="name" required>
                <Field placeholder="请输入患者姓名" />
              </FormItem>
              {/* 手机号 */}
              <FormItem
                rules={[
                  {
                    rule: phone,
                    message: "请输入正确手机号",
                  },
                ]}
                label="手机号"
                name="mobile"
                required
              >
                <Field placeholder="请输入手机号" />
              </FormItem>
              {/* 身份证号 */}
              <FormItem
                rules={[
                  {
                    rule: ID,
                    message: "请输入正确身份证号码",
                  },
                ]}
                label="身份证号"
                name="identityCard"
                required
              >
                <Field placeholder="请输入身份证号" />
              </FormItem>
            </InfoCard>

            <InfoCard
              title="医院信息"
              className="mt-[40px]"
              titleDesc="以下内容为必填"
            >
              <FormItem label="医院名称" name="hospital" required>
                <Field placeholder="请输入医院名称" />
              </FormItem>
              {/* 就诊医生 */}
              <FormItem label="就诊医生" name="doctor" required>
                <Field placeholder="请输入就诊医生" />
              </FormItem>
              <FormItem label="疾病类型" name="doctor" required>
                骨质疏松症
              </FormItem>
            </InfoCard>
          </>
        ) : (
          <InfoCard title="公益专员信息" titleDesc="以下内容为必填">
            <FormItem label="患者姓名" name="name" required>
              <Field placeholder="请输入患者姓名" />
            </FormItem>
            {/* 手机号 */}
            <FormItem
              rules={[
                {
                  rule: phone,
                  message: "请输入正确手机号",
                },
              ]}
              label="手机号"
              name="mobile"
              required
            >
              <Field placeholder="请输入手机号" />
            </FormItem>
            {/* 邀请码 */}
            <FormItem label="邀请码" name="companyCode" required>
              <Field placeholder="请输入邀请码" />
            </FormItem>
          </InfoCard>
        )}

        {/* cancel & submit buttons,  */}
        <View className="flex justify-between gap-4 mt-[40px]">
          <View className="flex-grow">
            <Button onClick={goBack} type="primary" round block plain hairline>
              取消
            </Button>
          </View>
          <View className="flex-grow">
            <Button formType="submit" round block type="primary">
              立即注册
            </Button>
          </View>
        </View>
      </Form>
      <Dialog id="form-error-message-alert" />
    </View>
  );
}
export default SignUp;
