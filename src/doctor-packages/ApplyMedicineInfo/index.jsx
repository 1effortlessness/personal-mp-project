// @ts-nocheck
import InfoCard from "@/components/InfoCard";
import { useState } from "react";
import PageWithTabBar from "@/components/PageWithTabBar";
import { View, Text } from "@tarojs/components";
import { Form, FormItem, Button, RadioGroup, Radio } from "@antmjs/vantui";
import UploadID from "@/components/UploadID";
import styles from "./index.module.scss";
import Field from "src/components/Field";
import ImageUpload from "src/components/ImageUpload/index";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
import { useRouter } from "@tarojs/taro";
import utils from "src/utils";

const ApplyMedicineInfo = () => {
  const role = useRouter().params.role;
  const formIt = Form.useForm();
  const { run } = useRequest(apis.medicine.submitMedicineMaterials, {
    manual: true
  });
  // const handleClick = () => {
  //   formIt.validateFields((errorMessage, fieldValues) => {
  //     if (errorMessage && errorMessage.length) {
  //       Dialog.alert({
  //         message: `errorMessage: ${JSON.stringify(errorMessage)}`,
  //         selector: "#form-demo11"
  //       });
  //       return console.info("errorMessage", errorMessage);
  //     }

  //     Dialog.alert({
  //       message: `result: ${JSON.stringify(fieldValues)}`,
  //       selector: "#form-demo11"
  //     });
  //   });
  // };

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
    <PageWithTabBar className="bg-under px-[44px] py-[40px] relative">
      <View className="absolute top-0 left-0 p-[48px]">
        <View className="text-base text-white rounded-[20px] bg-primary p-[36px] pb-[60px]">
          请上传个人信息、骨质疏松症相关病例图片，完成领药资格审核。
        </View>
      </View>
      <View className="mt-[128px] relative z-10">
        <Form
          initialValues={{
            id: {
              front: "https://img.yzcdn.cn/vant/leaf.jpg",
              backed: "https://img.yzcdn.cn/vant/tree.jpg"
            },
            proxy: {
              front: "https://img.yzcdn.cn/vant/leaf.jpg",
              backed: "https://img.yzcdn.cn/vant/tree.jpg"
            },
            prescription: [
              {
                url: "https://img.yzcdn.cn/vant/leaf.jpg",
                name: "图片1"
              },
              {
                url: "https://img.yzcdn.cn/vant/tree.jpg"
              }
            ],
            diagnosis: [
              {
                url: "https://img.yzcdn.cn/vant/leaf.jpg",
                name: "图片1"
              },
              {
                url: "https://img.yzcdn.cn/vant/tree.jpg"
              }
            ],
            proxyStatement: [
              {
                url: "https://img.yzcdn.cn/vant/leaf.jpg",
                name: "图片1"
              },
              {
                url: "https://img.yzcdn.cn/vant/tree.jpg"
              }
            ]
          }}
          onChange={(err, v) => console.log(err, v)}
          form={formIt}
        >
          <InfoCard title="患者个人信息">
            <FormItem
              label="用户名"
              name="userName"
              required
              validateTrigger="onBlur"
            >
              <Field placeholder="请输入用户名（中文）" />
            </FormItem>

            <FormItem
              label="证件号"
              name="cardId"
              required
              validateTrigger="onBlur"
              rules={[
                {
                  message: "请输入正确身份证号",
                  rule: utils.regex.ID
                }
              ]}
            >
              <Field placeholder="请输入证件号" />
            </FormItem>

            <FormItem
              label="手机号"
              name="phone"
              required
              validateTrigger="onBlur"
              rules={[
                {
                  message: "请输入正确手机号",
                  rule: utils.regex.phone
                }
              ]}
            >
              <Field placeholder="请输入手机号" />
            </FormItem>

            <FormItem
              className={styles.override}
              layout="vertical"
              label="身份证"
              name="id"
              required
              mutiLevel
            >
              <UploadID />
            </FormItem>
          </InfoCard>

          <InfoCard
            title="处方原件"
            titleDesc="最多上传6张"
            className="mt-[48px]"
          >
            <FormItem
              className={styles.override}
              layout="vertical"
              name="prescription"
              mutiLevel
              required
              requiredClassName="hidden"
            >
              <ImageUpload />
            </FormItem>
          </InfoCard>

          <InfoCard
            title="诊断证明原件"
            titleDesc="最多上传6张"
            className="mt-[48px]"
          >
            <FormItem
              className={styles.override}
              layout="vertical"
              name="diagnosis"
              required
              requiredClassName="hidden"
              mutiLevel
            >
              <ImageUpload />
            </FormItem>
          </InfoCard>

          <ProxyComponent />

          {proxyFlag === "enableProxy" && (
            <>
              <InfoCard
                title="代领人身份信息"
                titleDesc="提交后不可更改，请谨慎操作"
                className="mt-[48px]"
              >
                <FormItem
                  className={styles.override}
                  layout="vertical"
                  name="proxyId"
                  required
                  requiredClassName="hidden"
                  mutiLevel
                >
                  <UploadID />
                </FormItem>
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
                <FormItem
                  className={styles.override}
                  layout="vertical"
                  name="proxyStatement"
                  required
                  requiredClassName="hidden"
                  mutiLevel
                >
                  <ImageUpload />
                </FormItem>
              </InfoCard>
            </>
          )}

          <View className="my-[48px]">
            <Button block type="primary" round formType="submit">
              提交
            </Button>
          </View>
        </Form>
      </View>
    </PageWithTabBar>
  );
};

export default ApplyMedicineInfo;
