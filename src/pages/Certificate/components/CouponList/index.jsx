import { View } from "@tarojs/components";
import { PullToRefresh } from "@antmjs/vantui";
import PageWithTabBar from "@/components/PageWithTabBar";
import CertificateCard from "../CertificateCard";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";

const CouponList = () => {
  const currentRole = useSelector(userSelector.currentRole);
  const { data } = useRequest(apis.medicine.getCoupon, {
    defaultParams: [currentRole ?? "patient"]
  });

  console.log(data, "data");
  return (
    <PullToRefresh
      className="bg-bg"
      onRefresh={() => {
        return Promise.resolve(undefined);
      }}
    >
      <PageWithTabBar>
        <View className="flex justify-center mt-[48px]">
          <CertificateCard />
        </View>
        {/* <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} /> */}
      </PageWithTabBar>
    </PullToRefresh>
  );
};

export default CouponList;
