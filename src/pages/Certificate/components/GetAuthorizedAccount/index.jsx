import PageWithTabBar from "@/components/PageWithTabBar";
import { Button } from "@antmjs/vantui";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
/** @description 获取账号密码去登录 */
const GetAuthorizedAccount = () => {
  return (
    <PageWithTabBar className="p-[40px]">
      {/* 账户密码Card */}
      <View
        className="rounded-[20px] pb-[70px]"
        style={{ boxShadow: "0rpx 2rpx 12rpx 0rpx rgba(182,193,206,0.5)" }}
      >
        <View className="rounded-t-[20px] bg-primary px-[68px] py-[24px] ">
          <Text className="text-[28px] text-white font-extrabold">
            请您查收代操作用户授权您的账号和密码有效期为30天
          </Text>
        </View>
        <View className="mt-[40px] px-[68px]">
          <TextCell label="账号:" value="18489152456" />
          <TextCell className="mt-3" label="密码:" value="18489152456" />
        </View>
      </View>

      {/* 操作按钮 */}
      <View className="flex justify-center mt-[48px]">
        <View className="w-[364px] flex flex-col gap-[48px]">
          <Button className="w-[364px]" round block type="primary">
            复制账号密码
          </Button>
          <Button
            className="w-[364px]"
            plain
            hairline
            round
            block
            type="primary"
          >
            立即登录
          </Button>
        </View>
      </View>
    </PageWithTabBar>
  );
};

const TextCell = ({ label, value, labelWidth = 160, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      className={classNames("w-full flex items-start", viewProps.className)}
    >
      <View
        style={{ width: `${labelWidth}rpx` }}
        className="text-[28px] font-bold"
      >
        {label}
      </View>

      <View className="flex-grow text-[26px] font-medium">{value}</View>
    </View>
  );
};

export default GetAuthorizedAccount;
