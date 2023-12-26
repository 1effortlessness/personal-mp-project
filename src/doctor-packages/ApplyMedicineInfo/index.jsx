import InfoCard from "@/components/InfoCard";
import PageWithTabBar from "@/components/PageWithTabBar";
import { View } from "@tarojs/components";
import react from "react";
import { Input } from "@tarojs/components";
import { Form, FormItem, Button, Dialog } from "@antmjs/vantui";
import UploadID from "@/components/UploadID";
import styles from "./index.module.scss";

const ApplyMedicineInfo = () => {
  const formIt = Form.useForm();

  const handleClick = () => {
    formIt.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        Dialog.alert({
          message: `errorMessage: ${JSON.stringify(errorMessage)}`,
          selector: "#form-demo11",
        });
        return console.info("errorMessage", errorMessage);
      }

      Dialog.alert({
        message: `result: ${JSON.stringify(fieldValues)}`,
        selector: "#form-demo11",
      });
    });
  };

  return (
    <PageWithTabBar className="bg-under px-[44px] py-[40px]">
      <Form form={formIt} onFinish={(errs, res) => console.info(errs, res)}>
        <InfoCard title={"患者个人信息"}>
          <FormItem
            label="用户名"
            name="userName"
            required
            trigger="onInput"
            validateTrigger="onBlur"
            // taro的input的onInput事件返回对应表单的最终值为e.detail.value
            valueFormat={(e) => e.detail.value}
          >
            <Input placeholder="请输入用户名（中文）" />
          </FormItem>

          <FormItem
            label="证件号"
            name="cardId"
            required
            valueFormat={(e) => e.detail.value}
            trigger="onInput"
          >
            <Input />
          </FormItem>

          <FormItem
            label="手机号"
            name="phone"
            required
            valueFormat={(e) => e.detail.value}
            trigger="onInput"
          >
            <Input />
          </FormItem>

          <FormItem
            className={styles.override}
            style={{ marginLeft: 0 }}
            layout="vertical"
            label="身份证"
            name="phone"
            required
          >
            <UploadID />
          </FormItem>
        </InfoCard>
        {/* <Button
            type="primary"
            className="van-button-submit"
            onClick={handleClick}
            // formType="submit"
          >
            提交
          </Button> */}

        <InfoCard
          title={"处方原件"}
          titleDesc={"最多上传6张"}
          className="mt-[48px]"
        >
          test
        </InfoCard>

        <InfoCard
          title={"诊断证明原件"}
          titleDesc={"最多上传6张"}
          className="mt-[48px]"
        >
          test
        </InfoCard>
      </Form>
    </PageWithTabBar>
  );
};

export default ApplyMedicineInfo;
