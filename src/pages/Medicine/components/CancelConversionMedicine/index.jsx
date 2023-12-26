import { View, Text } from "@tarojs/components";
import { Button, Dialog } from "@antmjs/vantui";
import MedicineBgView, { DescCard } from "../MedicineBgView";
import { useCallback } from "react";

const Dialog_ = Dialog.createOnlyDialog();

/** @description 取消转增药品 */
const CancelConversionMedicine = () => {
  const cancelConversionHandler = () => {
    alert("取消转增成功");
  };

  const alert = useCallback((title) => {
    Dialog_.alert({
      title: title || "",
    }).then((value) => {
      console.log("dialog result", value);
    });
  }, []);

  return (
    <MedicineBgView className="pb-[48px]">
      <DescCard title="领药说明" className="mt-[608px]">
        <View className="mt-4">
          您是齐鲁制药本次鲁可欣赠药活动名单上的医护人员，可以免费获赠一支鲁可欣给患有骨质疏松症的亲属朋友或自己使用。
        </View>

        <View className="mt-4">
          *鲁可欣的兑换权益请
          <Text className="text-[#00D1FF]">查看权益页</Text>
        </View>
      </DescCard>

      <DescCard title={"温馨提示"} className="mt-[40px]">
        <View className="mt-4">
          因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。{" "}
        </View>
      </DescCard>

      <View className="flex flex-col items-center mt-[48px]  mb-[20px]">
        <Text className="text-white text-[28px] font-medium">
          你之前进行过转赠操作，是否要取消转赠
        </Text>
        <Text className="text-white text-[28px] font-medium">
          （转赠操作只有在被转赠人未提交材料前，可取消）
        </Text>
      </View>

      <Button
        onClick={cancelConversionHandler}
        className="px-[64px]"
        type="primary"
        block
        plain
      >
        取消转增
      </Button>
      <Dialog_ />
    </MedicineBgView>
  );
};

export default CancelConversionMedicine;
