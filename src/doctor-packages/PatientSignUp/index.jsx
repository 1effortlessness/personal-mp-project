import { Input, View } from "@tarojs/components";
import { Button, FormItem, Form } from "@antmjs/vantui";
import Field from "@/components/Field";
import InfoCard from "@/components/InfoCard";

function PatientSignUp() {
  return (
    <View className="p-4">
      <Form>
        <InfoCard title="公益专员信息" titleDesc="以下内容为必填">
          <FormItem label="患者姓名" name="name" required>
            <Field placeholder="请输入患者姓名" />
          </FormItem>
          {/* 手机号 */}
          <FormItem label="手机号" name="phone" required>
            <Field placeholder="请输入手机号" />
          </FormItem>
          {/* 邀请码 */}
          <FormItem label="邀请码" name="idCard" required>
            <Field placeholder="请输入邀请码" />
          </FormItem>
        </InfoCard>

        <InfoCard
          title="基本信息"
          titleDesc="以下内容为必填"
          className="mt-[40px]"
        >
          <FormItem label="患者姓名" name="name" required>
            <Field placeholder="请输入患者姓名" />
          </FormItem>
          {/* 手机号 */}
          <FormItem label="手机号" name="phone" required>
            <Field placeholder="请输入手机号" />
          </FormItem>
          {/* 身份证号 */}
          <FormItem label="身份证号" name="idCard" required>
            <Field placeholder="请输入身份证号" />
          </FormItem>
        </InfoCard>

        <InfoCard
          title="医院信息"
          className="mt-[40px]"
          titleDesc="以下内容为必填"
        >
          <FormItem label="医院名称" name="hospitalName" required>
            <Field placeholder="请输入医院名称" />
          </FormItem>
          {/* 就诊医生 */}
          <FormItem label="就诊医生" name="doctorName" required>
            <Field placeholder="请输入就诊医生" />
          </FormItem>
        </InfoCard>

        {/* cancel & submit buttons,  */}
        <View className="flex justify-between gap-4 mt-[40px]">
          <View className="flex-grow">
            <Button type="primary" round block plain hairline>
              取消
            </Button>
          </View>
          <View className="flex-grow">
            <Button round block type="primary">
              立即注册
            </Button>
          </View>
        </View>
      </Form>
    </View>
  );
}
export default PatientSignUp;
