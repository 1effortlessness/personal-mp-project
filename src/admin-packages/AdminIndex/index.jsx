import { View } from "@tarojs/components";

import "./page.scss";
import Banner from "src/common-components/WorkerSpace/Banner";
import Container from "src/common-components/WorkerSpace/Container";
import BannerInfo from "src/common-components/WorkerSpace/BannerInfo";
import CardContainer from "src/common-components/WorkerSpace/CardContainer/CardContainer";

function Index() {
  return (
    <View>
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
    </View>
  );
}

function DataPanel() {
  const data = [
    {
      value: 50,
      label: "库存数量"
    },
    {
      value: 9,
      label: "已核销数量"
    },
    {
      value: 1,
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
export default Index;
