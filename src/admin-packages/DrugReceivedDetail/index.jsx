import { View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import Container from "src/common-components/WorkerSpace/Container";
import CardContainer from "src/common-components/WorkerSpace/CardContainer/CardContainer";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
import utils from "src/utils";
import { useRouter } from "@tarojs/taro";

definePageConfig({
  navigationBarTitleText: "援助药收货详情"
});
function DrugReceivedDetail() {
  const router = useRouter();

  const sendTime = router.params?.sendTime;
  const inventory = router.params?.inventory;
  const id = router.params?.id;

  const { run } = useRequest(apis.shop.dispensingConfirm, {
    manual: true,
    onSuccess() {
      utils.navigator.goBack();
    }
  });

  const items = [
    {
      label: "发货时间",
      value: utils.date.dateFormat(sendTime, "YYYY年MM月DD日 hh:mm:ss")
    },
    // content
    {
      label: "发货内容",
      value: "地舒单抗注射液 (鲁可欣@) "
    },
    {
      label: "数量",
      value: inventory
    }
  ];
  return (
    <View className="theme">
      <Container>
        <CardContainer title="鲁可欣收货确认">
          <View className="flex flex-col gap-1.5">
            {items.map((item) => {
              return (
                <View
                  className="flex items-center h-[60px] gap-4"
                  key={item.label}
                >
                  <View className="w-[140px] font-bold">{item.label}:</View>
                  <View className="flex-1">{item.value}</View>
                </View>
              );
            })}
          </View>
        </CardContainer>
        <View className="flex gap-6">
          <Button plain hairline type="primary" block size="large" round>
            取消
          </Button>
          <Button
            onClick={() => run(id)}
            type="primary"
            block
            size="large"
            round
          >
            确认
          </Button>
        </View>
      </Container>
    </View>
  );
}

export default DrugReceivedDetail;
