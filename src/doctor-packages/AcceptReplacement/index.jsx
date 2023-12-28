import PageWithTabBar from "@/components/PageWithTabBar";
import MedicineBgView, {
  DescCard
} from "@/pages/Medicine/components/MedicineBgView";
import { Button } from "@antmjs/vantui";
import { View } from "@tarojs/components";

/** @description 药代接受授权 */
const AcceptReplacement = () => {
  return (
    <MedicineBgView noTabbar>
      <DescCard title="" className="mt-[608px] flex flex-col items-center">
        XXX授权您，代为参与活动
      </DescCard>

      <DescCard title="授权说明" className="mt-[40px]">
        <View className="mt-4 text-base">
          <View>
            您被授权操作领药申请材料提交的相关事宜，并可以设置代领人。
          </View>
          <View className="mt-1">
            本次授权有效期为30天，授权到期后您可以让授权用户再发起授权。
          </View>
          <View className="mt-1">
            在提交材料提交审核成功之前，授权用户可以随时取消受权，以恢复独立操作权限。
          </View>
        </View>
      </DescCard>

      <View className="mt-[48px] w-full grid grid-cols-2 gap-[48px]">
        <Button type="primary" plain round block>
          登陆领药
        </Button>
        <Button type="primary" round block>
          登陆领药
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default AcceptReplacement;
