import { Button } from "@antmjs/vantui";
import { View, Text, ScrollView } from "@tarojs/components";
import apis from "src/apis";
import PageWithTabBar from "src/components/PageWithTabBar";
import utils from "src/utils";
import { useRequest } from "taro-hooks";

definePageConfig({
  navigationBarTitleText: "我关注的医生"
});
const FollowDoctorList = () => {
  const { data } = useRequest(apis.proxy.getFollowDoctorList);

  console.log(data);
  return (
    <PageWithTabBar className="px-[44px] py-[40px]">
      <ScrollView
        style={{ height: "1070rpx" }}
        className="flex flex-col"
        scrollY
      >
        <View className="flex flex-col  gap-[40px] pb-[2px]">
          <FollowDoctorCard doctorName="yuanlin" />
          <FollowDoctorCard doctorName="yuanlin" />
          <FollowDoctorCard doctorName="yuanlin" />
          <FollowDoctorCard doctorName="yuanlin" />
          <FollowDoctorCard doctorName="yuanlin" />
        </View>
      </ScrollView>
      <View className="mt-[48px] bg-transparent">
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

const FollowDoctorCard = ({ doctorName }) => {
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
      <View className="rounded-b-[20px] p-[36px]">
        <InfoCell title="手机号：" value="helo" />
        <InfoCell title="领取时间：" value="helo" />
        <InfoCell title="核销时间：" value="helo" />
        <InfoCell title="是否转赠：" value="helo" />
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
