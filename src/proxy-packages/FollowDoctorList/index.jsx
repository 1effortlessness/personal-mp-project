import { Button } from "@antmjs/vantui";
import { View, Text, ScrollView } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";
import apis from "src/apis";
import PageWithTabBar from "src/components/PageWithTabBar";
import utils from "src/utils";
import { useRequest } from "taro-hooks";
import "./page.scss";

definePageConfig({
  navigationBarTitleText: "我关注的医生"
});
const FollowDoctorList = () => {
  const { data, run } = useRequest(apis.proxy.getFollowDoctorList, {
    manual: true
  });
  useDidShow(run);
  return (
    <PageWithTabBar className="px-[44px] py-[40px] flex flex-col">
      <ScrollView className="flex flex-col list" scrollY>
        <View className="flex flex-col  gap-[40px] pb-[2px] px-[2px]">
          {data?.result?.map((doctorInfo) => {
            return (
              <FollowDoctorCard {...doctorInfo} key={doctorInfo.doctorMobile} />
            );
          })}
        </View>
      </ScrollView>

      <View className="flex-grow flex items-center mt-[40px]">
        <Button
          onClick={utils.navigator.gotoFollowDoctor}
          type="primary"
          block
          round
        >
          添加
        </Button>
      </View>
    </PageWithTabBar>
  );
};

const FollowDoctorCard = ({
  doctorName,
  doctorMobile,
  selfuse,
  writeOffTime,
  receivedTime
}) => {
  return (
    <View
      className=" rounded-[20px]"
      style={{ boxShadow: "0rpx 2rpx 12rpx 0rpx rgba(182,193,206,0.5)" }}
    >
      {/* head */}
      <View className="h-[84px] flex justify-center items-center bg-primary rounded-t-[20px]">
        <Text className="text-3xl font-extrabold text-white">{doctorName}</Text>
      </View>

      {/* body */}
      <View className="rounded-b-[20px] p-[36px] flex flex-col gap-[20px]">
        <InfoCell title="手机号：" value={doctorMobile} />
        <InfoCell
          title="领取时间："
          value={utils.date.dateFormat(receivedTime)}
        />
        <InfoCell
          title="核销时间："
          value={utils.date.dateFormat(writeOffTime)}
        />
        <InfoCell title="是否转赠：" value={selfuse ? "是" : "否"} />
      </View>
    </View>
  );
};

const InfoCell = ({ title, value }) => {
  return (
    <View className="w-full flex items-center gap-[36px]">
      <View className="w-[142px] flex-shrink-0 font-extrabold text-base">
        {title}
      </View>
      <View className="text-base">{value}</View>
    </View>
  );
};

export default FollowDoctorList;
