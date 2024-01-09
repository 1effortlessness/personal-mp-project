import { View, Text } from "@tarojs/components";
import { PullToRefresh } from "@antmjs/vantui";
import PageWithTabBar from "@/components/PageWithTabBar";
import CertificateCard from "../CertificateCard";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { setCouponData } from "src/store/modules/coupon";

const CouponList = () => {
  const currentRole = useSelector(userSelector.currentRole);
  const dispatch = useDispatch();
  const { data, refresh } = useRequest(apis.medicine.getCoupon, {
    defaultParams: [currentRole ?? "patient"],
    onSuccess(res) {
      dispatch(setCouponData(res?.result));
    }
  });

  console.log(data, "data");
  return (
    <PullToRefresh
      className="bg-bg"
      onRefresh={() => {
        return refresh();
      }}
    >
      <PageWithTabBar>
        <View className="flex justify-center mt-[48px]">
          {data?.result ? <CertificateCard {...data?.result} /> : <NoResult />}
        </View>
        {/* <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} /> */}
      </PageWithTabBar>
    </PullToRefresh>
  );
};

const NoResult = () => {
  return (
    <View className="mt-[270px] flex justify-center">
      <Text>您暂无兑换券</Text>
    </View>
  );
};

export default CouponList;
