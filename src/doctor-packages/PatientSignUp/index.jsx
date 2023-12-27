import { Form, Input, View } from "@tarojs/components";
import { Button, FormItem } from "@antmjs/vantui";

function PatientSignUp() {
  return (
    <View className="p-4">
      <Form>
        <Title title="基本信息"></Title>
        <FormItem label="患者姓名" name="name" required>
          <Input placeholder="请输入患者姓名" />
        </FormItem>
        {/* 手机号 */}
        <FormItem label="手机号" name="phone" required>
          <Input placeholder="请输入手机号" />
        </FormItem>
        {/* 身份证号 */}
        <FormItem label="身份证号" name="idCard" required>
          <Input placeholder="请输入身份证号" />
        </FormItem>
        <View className="h-4"></View>
        <Title title="医院信息"></Title>
        <FormItem label="医院名称" name="hospitalName" required>
          <Input placeholder="请输入医院名称" />
        </FormItem>
        {/* 就诊医生 */}
        <FormItem label="就诊医生" name="doctorName" required>
          <Input placeholder="请输入就诊医生" />
        </FormItem>
        {/* cancel & submit buttons,  */}
        <View className="flex justify-between gap-4 mt-4">
          <View className="flex-grow">
            <Button block>取消</Button>
          </View>
          <View className="flex-grow">
            <Button block type="primary">
              立即注册
            </Button>
          </View>
        </View>
      </Form>
    </View>
  );
}

const Title = ({ title }) => (
  <View className="text-xl text-bold mb-4">{title}</View>
);

export default PatientSignUp;
