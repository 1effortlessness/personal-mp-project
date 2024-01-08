import { Text, View } from "@tarojs/components";
import dayjs from "dayjs";
import { Button } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import Container from "src/common-components/WorkerSpace/Container";
import PageWithTabBar from "src/components/PageWithTabBar";
import apis from "src/apis";
import { useRequest } from "taro-hooks";
import utils from "src/utils";

definePageConfig({
  navigationBarTitleText: "援助药收货列表"
});

function ReceivedDrugList() {
  const { data } = useRequest(apis.shop.getDispensingList);
  const items = [
    {
      sendDate: "2023-12-20",
      number: 100,
      status: "confirmed"
    },
    {
      sendDate: "2023-12-30",
      number: 100,
      status: "unconfirmed"
    }
  ];
  return (
    <PageWithTabBar>
      <View className="flex flex-col gap-[40px] p-[48px]">
        {items.map((item, index) => {
          return (
            <DrugReceiptItem
              onTap={() => {
                utils.navigator.gotoDrugReceivedDetail();
              }}
              {...item}
              key={index}
            />
          );
        })}
      </View>
    </PageWithTabBar>
  );
}

function DrugReceiptItem({ sendDate, number, status, onTap }) {
  const confirmed = status === "confirmed";
  const items = [
    {
      label: "发货时间",
      value: dayjs(sendDate).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "数量",
      value: number
    },
    {
      label: "状态",
      value: confirmed ? (
        <Text>确认</Text>
      ) : (
        <Text className="text-[#2D89ED]">未确认</Text>
      )
    }
  ];
  return (
    <View className="shadow-md rounded-[20px] bg-white px-4 py-6 flex flex-col gap-5">
      <View className="flex flex-col gap-1.5">
        {items.map((item) => {
          return (
            <View className="flex items-center h-[60px] gap-4" key={item.label}>
              <View className="w-[140px] font-bold">{item.label}:</View>
              <View className="flex-1">{item.value}</View>
            </View>
          );
        })}
      </View>
      {!confirmed && (
        <View className="flex justify-center">
          <Button
            type="primary"
            size="large"
            round
            style={{ width: Taro.pxTransform(288) }}
            onTap={onTap}
          >
            去确认
          </Button>
        </View>
      )}
    </View>
  );
}

export default ReceivedDrugList;
