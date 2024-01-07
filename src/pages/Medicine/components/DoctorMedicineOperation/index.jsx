import { View, Text } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, {
  DescCard
} from "../../../../common-components/Medicine/MedicineBgView";
import utils from "src/utils";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { useMemo, useState } from "react";
import { useRequest } from "taro-hooks";
import apis from "src/apis";
/**
 *
 * @description 医生对药品的操作页
 */

const DoctorMedicineOperation = () => {
  const doctor = useSelector(userSelector.doctor);
  const operationStatus = useMemo(() => {
    if (doctor?.proxy) return "proxy";
    if (doctor?.enabled) return "enabled";
  }, [doctor?.proxy, doctor?.enabled]);

  console.log(operationStatus, "operationStatus");

  const { run, loading: cancelProxyLoading } = useRequest(
    apis.medicine.cancelProxy,
    {
      manual: true
    }
  );
  return (
    <MedicineBgView>
      <DescCard title="领药说明" className="mt-[608px]">
        <View className="mt-4">
          您是齐鲁制药本次鲁可欣赠药活动名单上的医护人员，可以免费获赠一支鲁可欣给患有骨质疏松症的亲属朋友或自己使用。
        </View>

        <View className="mt-4">
          *鲁可欣的兑换权益请
          <Text className="text-[#00D1FF]">查看权益页</Text>
        </View>
      </DescCard>

      <DescCard title="温馨提示" className="mt-[40px]">
        <View className="mt-4">
          因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。
        </View>
      </DescCard>

      <View className="grid grid-cols-2 w-full gap-6 mt-[48px]">
        <Button
          onClick={utils.navigator.gotoApplyMedicineInfo}
          round
          type="primary"
          block
        >
          自用领药申请
        </Button>
        <Button id="转赠" openType="share" round type="primary" block>
          转赠他人
        </Button>
      </View>

      {operationStatus === "enabled" && (
        <View className="w-full my-[48px]">
          <Button id="代操作" openType="share" round type="primary" block>
            授权他人代操作
          </Button>
        </View>
      )}

      {operationStatus === "proxy" && (
        <View className="w-full my-[48px] flex items-center flex-col">
          <Text className="mb-5 text-white text-base">
            你已授权王五账号代操作
          </Text>
          <Button
            loading={cancelProxyLoading}
            onClick={() => run("doctor")}
            type="primary"
            plain
            round
            block
          >
            取消授权
          </Button>
        </View>
      )}

      {/* 已将药品转赠但未提交申请材料可取消 */}
      <View className="flex flex-col items-center mt-[48px]  mb-[20px]">
        <Text className="text-white text-base font-medium">
          你之前进行过转赠操作，是否要取消转赠
        </Text>
        <Text className="text-white text-base font-medium mt-[12px] mb-[48px]">
          （转赠操作只有在被转赠人未提交材料前，可取消）
        </Text>

        <Button round className="px-[64px]" type="primary" block plain>
          取消转增
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default DoctorMedicineOperation;
