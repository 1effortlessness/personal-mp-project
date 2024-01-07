// @ts-nocheck
import InfoCard from "@/components/InfoCard";
import PageWithTabBar from "@/components/PageWithTabBar";
import { View, Text } from "@tarojs/components";
import { Tag, Image, Button } from "@antmjs/vantui";
import { useRouter } from "@tarojs/taro";
import { useRequest } from "taro-hooks";
import apis from "src/apis";

const ApplyMedicineMaterialsReview = () => {
  const router = useRouter();

  const { data } = useRequest(apis.medicine.getApplyMedicineMaterialsReview, {
    defaultParams: [router.params?.role]
  });

  return (
    <PageWithTabBar className="bg-under px-[44px] py-[40px] relative">
      <View className="absolute top-0 left-0 p-[48px] w-full">
        <View className="text-3xl text-white rounded-[20px] bg-primary p-[36px] pb-[60px] text-center w-full">
          患者个人信息
        </View>
      </View>
      <View className="mt-[128px] relative z-10">
        <InfoCard title="患者个人信息">
          <TextCell title="姓名" value="yuanlin" />
          <TextCell title="姓名" value="yuanlin" />
          <TextCell title="姓名" value="yuanlin" />
          <View className="w-[140px] font-bold flex-shrink-0">身份证原件</View>
          <View className="flex justify-between gap-[52px] mt-[34px]">
            {/* 身份证照片正面 */}
            <Image
              className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
              src="https://img.yzcdn.cn/vant/leaf.jpg"
              width={236}
              height={158}
            />
            {/* 身份证照片背面 */}
            <Image
              className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
              src="https://img.yzcdn.cn/vant/leaf.jpg"
              width={236}
              height={158}
            />
          </View>
        </InfoCard>
        <ReviewOpinion />

        <InfoCard title="处方原件" className="mt-[40px]">
          <Image
            src="https://img.yzcdn.cn/vant/leaf.jpg"
            width={180}
            height={180}
          />
        </InfoCard>
        <ReviewOpinion />

        <InfoCard title="诊断证明原件" className="mt-[40px]">
          <Image
            src="https://img.yzcdn.cn/vant/leaf.jpg"
            width={180}
            height={180}
          />
        </InfoCard>
        <ReviewOpinion />

        <InfoCard title="代领人身份信息" className="mt-[40px]">
          <View className="flex justify-between gap-[52px] mt-[34px]">
            {/* 身份证照片正面 */}
            <Image
              className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
              src="https://img.yzcdn.cn/vant/leaf.jpg"
              width={236}
              height={158}
            />
            {/* 身份证照片背面 */}
            <Image
              className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
              src="https://img.yzcdn.cn/vant/leaf.jpg"
              width={236}
              height={158}
            />
          </View>
        </InfoCard>
        <ReviewOpinion />

        <InfoCard title="代领人委托书" className="mt-[40px]">
          <Image
            src="https://img.yzcdn.cn/vant/leaf.jpg"
            width={180}
            height={180}
          />
        </InfoCard>
        <ReviewOpinion />

        <View className="my-[40px]">
          <Button type="primary" block round>
            确定
          </Button>
        </View>
      </View>
    </PageWithTabBar>
  );
};

const TextCell = ({ title, value }) => {
  return (
    <View className="h-[60px] items-center flex gap-4">
      <View className="w-[140px] font-bold flex-shrink-0">{title}</View>
      <View>{value}</View>
    </View>
  );
};

const ReviewOpinion = ({ isPass, reason }) => {
  return (
    <View className="mt-[24px]">
      <View className="flex items-center">
        <Text className="font-extrabold w-[156px]">审核状态:</Text>
        {isPass ? (
          <Tag type="success" size="large">
            已通过
          </Tag>
        ) : (
          <Tag type="danger" size="large">
            不通过
          </Tag>
        )}
      </View>

      {!isPass && (
        <View className="flex  items-start">
          <Text className="font-extrabold flex-shrink-0 inline-block w-[156px]">
            理由:
          </Text>
          <Text>
            拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由拒绝理由
          </Text>
        </View>
      )}
    </View>
  );
};

export default ApplyMedicineMaterialsReview;
