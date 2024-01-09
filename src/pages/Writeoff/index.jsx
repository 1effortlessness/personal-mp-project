import PageWithTabBar from "src/components/PageWithTabBar";
import { InfiniteScroll, Search } from "@antmjs/vantui";
import { View, ScrollView } from "@tarojs/components";
import { Colors } from "src/config/theme";
import { useRequest } from "taro-hooks";
import apis from "src/apis";

definePageConfig({
  navigationBarTitleText: "核销记录"
});
function Writeoff() {
  const { runAsync, params, data } = useRequest(apis.writeoff.getWriteoffList, {
    defaultParams: [
      {
        pageNum: 1,
        pageSize: 10,
        mobile: ""
      }
    ],
    debounceWait: 300
  });
  console.log(params, "params");
  return (
    <PageWithTabBar className="h-screen relative flex flex-col items-center write-off">
      <View className="w-full px-[48px] mt-[48px]">
        <Search
          shape="round"
          background={Colors.background.under}
          placeholder="请输入手机号搜索"
          inputAlign="center"
          onChange={(e) => runAsync({ ...params?.[0], mobile: e.detail })}
        />
      </View>

      <ScrollView scrollY className="flex-grow relative">
        <View className="absolute inset-0 px-5 pt-5 flex flex-col gap-[40px]">
          {data?.result.content.map((item) => {
            return <WriteOffItem key={item} />;
          })}
          <InfiniteScroll
            loadMore={async () => {
              const data = await runAsync({
                ...params?.[0],
                pageNum: params?.[0].pageNum + 1
              });
              if (data?.result?.content.length < 10) {
                return Promise.resolve("complete");
              }
              return Promise.resolve("loading");
            }}
          />
        </View>
      </ScrollView>
    </PageWithTabBar>
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
    <View className="shadow-md rounded-[20px]">
      <View className="px-6 py-3 bg-primary text-center text-white font-medium rounded-t-[20px]">
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

export default Writeoff;
