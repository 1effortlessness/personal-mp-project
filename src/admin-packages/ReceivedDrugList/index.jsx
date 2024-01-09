import { Text, View } from "@tarojs/components";
import dayjs from "dayjs";
import { Button } from "@antmjs/vantui";
import Taro from "@tarojs/taro";
import PageWithTabBar from "src/components/PageWithTabBar";
import apis from "src/apis";
import { useRequest } from "taro-hooks";
import utils from "src/utils";

definePageConfig({
  navigationBarTitleText: "援助药收货列表"
});

function ReceivedDrugList() {
  const { data } = useRequest(apis.shop.getDispensingList);
  return (
    <PageWithTabBar>
      <View className="flex flex-col gap-[40px] p-[48px]">
        {data.result.map((item, index) => {
          return (
            <DrugReceiptItem
              onTap={() => {
                utils.navigator.gotoDrugReceivedDetail(item);
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

function DrugReceiptItem({ createAt, status, inventory, onTap }) {
  const confirmed = status == 1;
  const items = [
    {
      label: "发货时间",
      value: dayjs(createAt).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "数量",
      value: inventory
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
