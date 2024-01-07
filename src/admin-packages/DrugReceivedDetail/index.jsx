import { View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import Container from "src/common-components/WorkerSpace/Container";
import CardContainer from "src/common-components/WorkerSpace/CardContainer/CardContainer";

function DrugReceivedDetail() {
  const items = [
    {
      label: "发货时间",
      value: "2023年12月15日  20:23:13"
    },
    // content
    {
      label: "发货内容",
      value: "地舒单抗注射液 (鲁可欣@) "
    },
    {
      label: "数量",
      value: "200支"
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
          <Button type="primary" block size="large" round>
            确认
          </Button>
        </View>
      </Container>
    </View>
  );
}

export default DrugReceivedDetail;
