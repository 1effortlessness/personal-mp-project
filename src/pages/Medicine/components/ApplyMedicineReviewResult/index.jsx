import { View, Text } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, {
  DescCard
} from "src/common-components/Medicine/MedicineBgView";
import { userSelector } from "src/store/modules/user";
import { useSelector } from "react-redux";
import utils from "src/utils";

/** @description 申请材料审核结果页 */
const ApplyMedicineReviewResult = () => {
  const currentRole = useSelector(userSelector.currentRole);
  const reviewResult = "pass";
  return (
    <MedicineBgView>
      <View className="pb-[48px]">
        {/* 审核中 */}
        {/* <DescCard title="" className="mt-[538px] flex justify-center">
          <Text className="text-3xl w-full text-center">
            您已经上传材料，请耐心等待审核
          </Text>
        </DescCard> */}
        {/* 审核中 */}
        <DescCard title="领药说明" classNames="">
          <View className="mt-4">
            张XX医生给您赠送一支地舒单抗注射液（鲁可欣®）
          </View>
          <View className="mt-4">
            *鲁可欣的兑换权益请
            <Text className="text-[#00D1FF]">查看权益页</Text>
          </View>
        </DescCard>

        <DescCard title="温馨提示" className="mt-[40px]">
          <View className="mt-4">
            因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。{" "}
          </View>
        </DescCard>

        <View className="flex flex-col items-center my-[48px]">
          <ReviewText reviewOpinion={reviewResult} />
        </View>

        <View className="grid grid-cols-2 gap-8">
          {reviewResult === "fail" && (
            <>
              <Button
                onClick={() =>
                  utils.navigator.gotoApplyMedicineMaterialsReview(
                    currentRole,
                    "reason"
                  )
                }
                type="primary"
                round
                block
                plain
              >
                查看失败原因
              </Button>
              <Button type="primary" round block>
                重新提交材料
              </Button>
            </>
          )}

          {reviewResult === "pass" && (
            <>
              <Button
                onClick={() =>
                  utils.navigator.gotoApplyMedicineMaterialsReview(
                    currentRole,
                    "check"
                  )
                }
                className="px-[64px]"
                type="primary"
                round
                block
              >
                查看审核材料
              </Button>
              <Button className="px-[64px]" type="primary" round block>
                立即使用卡券
              </Button>
            </>
          )}

          {reviewResult === "reject" && (
            <>
              <Button
                onClick={() =>
                  utils.navigator.gotoApplyMedicineMaterialsReview(
                    currentRole,
                    "reason"
                  )
                }
                className="px-[64px]"
                type="primary"
                round
                block
                plain
              >
                查看驳回原因
              </Button>
              <Button className="px-[64px]" type="primary" round block>
                重新提交材料
              </Button>
            </>
          )}
        </View>
      </View>
    </MedicineBgView>
  );
};

const ReviewText = ({ reviewOpinion }) => {
  if (reviewOpinion === "fail")
    return (
      <Text className="text-white text-base font-medium">
        抱歉您的申请材料：<Text className="text-red">未通过审核</Text>
        ，请您重新提交
      </Text>
    );

  if (reviewOpinion === "pass") {
    return (
      <Text className="text-white text-base font-medium">
        恭喜您已经通过材料审核，您可以在兑换券选项卡
      </Text>
    );
  }

  if (reviewOpinion === "reject") {
    return (
      <Text className="text-white text-base font-medium">
        抱歉您的申请材料：<Text className="text-red">已被驳回</Text>
        ，请您重新提交
      </Text>
    );
  }
};

export default ApplyMedicineReviewResult;
