import PageWithTabBar from "src/components/PageWithTabBar";
import InfoCard from "src/components/InfoCard";
import { Button, Form, FormItem } from "@antmjs/vantui";
import Field from "src/components/Field";
import utils from "src/utils";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
import { View } from "@tarojs/components";

definePageConfig({
  navigationBarTitleText: "添加医生"
});
const FollowDoctor = () => {
  const { run, loading } = useRequest(apis.proxy.followDoctor, {
    manual: true,
    onSuccess() {
      utils.navigator.goBack();
    }
  });
  return (
    <PageWithTabBar className="px-[44px] py-[36px]">
      <InfoCard title="添加医生" titleDesc="以下内容为必填">
        <Form onFinish={(_, values) => run(values)}>
          <FormItem label="姓名" name="name" required validateTrigger="onBlur">
            <Field placeholder="请输入用户名" />
          </FormItem>

          <FormItem
            label="手机号"
            name="mobile"
            rules={[
              {
                rule: utils.regex.phone,
                message: "请输入正确手机号"
              }
            ]}
            required
            validateTrigger="onBlur"
          >
            <Field placeholder="请输入手机号" />
          </FormItem>

          <View className="grid grid-cols-2 gap-[40px] mt-[40px]">
            <Button
              block
              round
              plain
              hairline
              type="primary"
              onClick={utils.navigator.goBack}
            >
              取消
            </Button>
            <Button
              loading={loading}
              block
              round
              type="primary"
              formType="submit"
            >
              确定
            </Button>
          </View>
        </Form>
      </InfoCard>
    </PageWithTabBar>
  );
};

export default FollowDoctor;
