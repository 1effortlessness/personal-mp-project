// @ts-nocheck
import InfoCard from "@/components/InfoCard";
import React, { useState } from "react";
import PageWithTabBar from "@/components/PageWithTabBar";
import { View, Text } from "@tarojs/components";
import {
  Form,
  FormItem,
  Button,
  Dialog,
  RadioGroup,
  Radio
} from "@antmjs/vantui";
import UploadID from "@/components/UploadID";
import styles from "./index.module.scss";
import Field from "src/components/Field";
import ImageUpload from "src/components/ImageUpload/index";

const ApplyMedicineInfo = () => {
  const formIt = Form.useForm();

  const handleClick = () => {
    formIt.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        Dialog.alert({
          message: `errorMessage: ${JSON.stringify(errorMessage)}`,
          selector: "#form-demo11"
        });
        return console.info("errorMessage", errorMessage);
      }

      Dialog.alert({
        message: `result: ${JSON.stringify(fieldValues)}`,
        selector: "#form-demo11"
      });
    });
  };

  const [proxyFlag, setProxyFlag] = useState("enableProxy");
  const ProxyComponent = () => {
    return (
      <View className="flex justify-between items-center mt-[48px]">
        <Text className="text-primary text-xl font-extrabold">
          是否启用代领
        </Text>
        <RadioGroup
          direction="horizontal"
          value={proxyFlag}
          onChange={(e) => setProxyFlag(e.detail)}
        >
          <Radio iconSize={32} name="enableProxy">
            是
          </Radio>
          <Radio iconSize={32} name="closeProxy">
            否
          </Radio>
        </RadioGroup>
      </View>
    );
  };

  return (
    <PageWithTabBar className="bg-under px-[44px] py-[40px]">
      <Form
        initialValues={{
          id: {
            front: "https://img.yzcdn.cn/vant/cat.jpeg",
            backed: "https://img.yzcdn.cn/vant/cat.jpeg"
          },
          userName: "hello"
        }}
        form={formIt}
        onFinish={(errs, res) => console.info(errs, res)}
      >
        <InfoCard title="患者个人信息">
          <FormItem
            label="用户名"
            name="userName"
            required
            validateTrigger="onBlur"
            // taro的input的onInput事件返回对应表单的最终值为e.detail.value
            valueFormat={(e) => e.detail.value}
          >
            <Field placeholder="请输入用户名（中文）" />
          </FormItem>

          <FormItem
            label="证件号"
            name="cardId"
            required
            valueFormat={(e) => e.detail.value}
            trigger="onInput"
          >
            <Field placeholder="请输入证件号" />
          </FormItem>

          <FormItem
            label="手机号"
            name="phone"
            required
            valueFormat={(e) => e.detail.value}
            trigger="onInput"
          >
            <Field placeholder="请输入手机号" />
          </FormItem>

          <FormItem
            className={styles.override}
            style={{ marginLeft: 0 }}
            layout="vertical"
            label="身份证"
            name="id"
            required
            mutiLevel
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
          title="处方原件"
          titleDesc="最多上传6张"
          className="mt-[48px]"
        >
          <ImageUpload />
        </InfoCard>

        <InfoCard
          title="诊断证明原件"
          titleDesc="最多上传6张"
          className="mt-[48px]"
        >
          <ImageUpload />
        </InfoCard>

        <ProxyComponent />

        {proxyFlag === "enableProxy" && (
          <>
            <InfoCard
              title="代领人身份信息"
              titleDesc="提交后不可更改，请谨慎操作"
              className="mt-[48px]"
            >
              <UploadID />
            </InfoCard>

            <InfoCard
              title="代领人委托书"
              extra={
                <Button plain hairline type="primary" size="small" round>
                  下载委托书模板
                </Button>
              }
              className="mt-[48px]"
            >
              <ImageUpload />
            </InfoCard>
          </>
        )}

        <View className="my-[48px]">
          <Button block type="primary" round formType="submit">
            提交
          </Button>
        </View>
      </Form>
    </PageWithTabBar>
  );
};

export default ApplyMedicineInfo;
