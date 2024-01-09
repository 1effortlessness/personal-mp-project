import PageWithTabBar from "@/components/PageWithTabBar";
import { View, Text, Image } from "@tarojs/components";
import { Search, Tag } from "@antmjs/vantui";
import { Colors, themeVars } from "src/config/theme";
import locationIcon from "@/assets/icons/location.png";

const ShopSearch = () => {
  return (
    <PageWithTabBar>
      <View className="px-[40px]">
        <Search
          className="my-[40px]"
          shape="round"
          background={Colors.background.under}
          placeholder="搜索药房"
          inputAlign="center"
        />

        {/* 店铺Card */}
        <ShopCard />
      </View>
    </PageWithTabBar>
  );
};

const ShopCard = () => {
  return (
    <View>
      {/* body */}
      <View className="rounded-[20px] pt-[32px] px-[30px] bg-white ">
        {/* 地址信息 */}
        <View className="flex items-center gap-[16px]">
          <Tag size="large" type="primary">
            山东省
          </Tag>
          <Text className="text-xl font-extrabold">南京九天药房(文晖路店)</Text>
        </View>

        {/* 店铺信息 */}
        <View className="flex items-center gap-[8px] mt-[24px] mb-[40px]">
          <Image src={locationIcon} className="w-[32px] h-[32px]" />
          <Text className="text-xl font-extrabold">店铺地址：</Text>
          <Text className="text-xl">山东省青岛市市南区中山路9号</Text>
        </View>
      </View>

      {/* 电话客服 */}

      <View className="h-[80px] bg-primary rounded-b-[20px] text-white flex items-center justify-center text-base">
        电话客服
      </View>
    </View>
  );
};

export default ShopSearch;
