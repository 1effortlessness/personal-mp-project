import { Search } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import "./page.scss";

function WriteOffForm() {
  return (
    <View className="h-screen relative flex flex-col gap-5 write-off">
      <Search placeholder="请输入手机号搜索" />
      <View className="flex-grow relative">
        <View className="absolute inset-0 px-5">
          <WriteOffItem />
        </View>
      </View>
    </View>
  );
}

/**
 * 姓名:
 * 张兰
 * 手机号:
 * 18011111111
 * 兑换时间:2023.12.12 17:50:10
 * 核销人:李金
 * 核销方式:后台核销
 */
function WriteOffItem() {
  const items1 = [
    {
      label: "姓名",
      value: "张兰"
    },
    {
      label: "手机号",
      value: "18011111111"
    },
    {
      label: "兑换时间",
      value: "2023.12.12 17:50:10"
    }
  ];
  const items2 = [
    {
      label: "核销人",
      value: "李金"
    },
    {
      label: "核销方式",
      value: "后台核销"
    }
  ];
  return (
    <View className="shadow-md rounded-[20px] overflow-hidden">
      <View className="px-6 py-3 bg-primary text-center text-white font-medium">
        兑换券：地舒单抗注射液 (鲁可欣@){" "}
      </View>
      <View className="px-6 py-3">
        <View className="flex flex-col ">
          {items1.map((item) => {
            return <Item key={item.label} {...item} />;
          })}
        </View>

        <View className="border-gray border-t border-dashed my-2"></View>
        <View className="flex flex-col ">
          {items2.map((item) => {
            return <Item key={item.label} {...item} />;
          })}
        </View>
      </View>
    </View>
  );
}

function Item({ label, value }) {
  return (
    <View className="flex h-[60px] items-center">
      <View className="w-[160px] font-medium">{label}</View>
      <View className="flex-grow">{value}</View>
    </View>
  );
}

export default WriteOffForm;
