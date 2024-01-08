import PageWithTabBar from "src/components/PageWithTabBar";
import { useRequest } from "taro-hooks";
import { View } from "@tarojs/components";
import "./page.scss";
import Banner from "src/common-components/WorkerSpace/Banner";
import Container from "src/common-components/WorkerSpace/Container";
import BannerInfo from "src/common-components/WorkerSpace/BannerInfo";
import CardContainer from "src/common-components/WorkerSpace/CardContainer/CardContainer";
import apis from "src/apis";

function WorkSpace() {
  return (
    <PageWithTabBar>
      <Banner></Banner>
      <Container>
        <BannerInfo />
        <CardContainer title="本店鲁可欣数据">
          <DataPanel />
        </CardContainer>
        <CardContainer title="核销须知">
          核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案核销须知文案
        </CardContainer>
      </Container>
    </PageWithTabBar>
  );
}

function DataPanel() {
  const { data: shopStatistics } = useRequest(apis.shop.getShopStatistics);
  const data = [
    {
      value: shopStatistics?.result?.inventory,
      label: "库存数量"
    },
    {
      value: shopStatistics?.result?.writeOff,
      label: "已核销数量"
    },
    {
      value: shopStatistics?.result?.dispensing,
      label: "等接收药品"
    }
  ];
  return (
    <View className="flex flex-wrap">
      {data.map((item) => {
        return (
          <View className="flex-grow relative dataPanel-item" key={item.label}>
            <View className="text-center text-[30px] h-[34px] leading-[34px] font-bold mb-4">
              {item.value}
            </View>
            <View className="text-center">{item.label}</View>
          </View>
        );
      })}
    </View>
  );
}
export default WorkSpace;
