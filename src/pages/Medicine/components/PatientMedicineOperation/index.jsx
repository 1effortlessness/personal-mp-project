import { Text, View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, {
  DescCard
} from "../../../../common-components/Medicine/MedicineBgView";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import utils from "src/utils";

/**
 *
 * @description 患者领取药品操作页
 */
const PatientMedicineOperation = () => {
  const currentRoleBasicInfo = useSelector(userSelector.currentRoleBasicInfo);
  // null 未进行操作 false代托管 true自用
  const isSelfUse = currentRoleBasicInfo?.selfuse || null;
  return (
    <MedicineBgView>
      <DescCard title="领药说明" className="mt-[608px]">
        <View className="mt-4">
          张XX医生给您赠送一支地舒单抗注射液（鲁可欣®）
        </View>

        <View className="mt-4">
          *鲁可欣的兑换权益请
          <Text className="text-[#00D1FF]"> 查看权益页</Text>
        </View>
      </DescCard>

      <DescCard title="温馨提示" className="mt-[40px]">
        <View className="mt-4">
          因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。
        </View>
      </DescCard>

      {isSelfUse === null && (
        <>
          <View className="w-full mt-[48px]">
            <Button
              onClick={utils.navigator.gotoApplyMedicineInfo}
              round
              type="primary"
              block
            >
              申请领药
            </Button>
          </View>
          <View className="w-full my-[48px]">
            <Button openType="share" round type="primary" block>
              授权他人代操作
            </Button>
          </View>
        </>
      )}

      {isSelfUse === false && (
        <View className="w-full my-[48px] px-[64px] flex items-center flex-col">
          <Text className="mb-5 text-white text-base">
            你已授权王五账号代操作
          </Text>
          <Button type="primary" plain round block>
            取消授权
          </Button>
        </View>
      )}
    </MedicineBgView>
  );
};

export default PatientMedicineOperation;
