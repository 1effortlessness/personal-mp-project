import { ScrollView, View } from "@tarojs/components";
import { PullToRefresh } from "@antmjs/vantui";
import CertificateCard from "./components/CertificateCard";
import PageWithTabBar from "@/components/PageWithTabBar";

const CertificateList = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <PullToRefresh
      className="bg-bg"
      onRefresh={() => {
        return Promise.resolve(undefined);
      }}
    >
      <PageWithTabBar>
        {data.map((item, index) => (
          <View key={item} className="flex justify-center mt-[24px]">
            <CertificateCard />
          </View>
        ))}
        {/* <InfiniteScroll loadMore={loadMore} ref={InfiniteScrollInstance} /> */}
      </PageWithTabBar>
    </PullToRefresh>
  );
};

export default CertificateList;
