// @ts-nocheck
import { View } from "@tarojs/components";
import defaultAvatar from "@/assets/icons/defaultAvatar.png";
import 患者bg from "@/assets/images/患者bg.png";
import 公益bg from "@/assets/images/公益bg.png";
import 药店bg from "@/assets/images/药店bg.png";
import 医生bg from "@/assets/images/医生bg.png";
import BackgroundView from "./components/BackgroundView";
import classNames from "classnames";
import utils from "src/utils";
import { Image } from "@antmjs/vantui";

const RoleLoginBoxCls =
  "w-[256px] h-[256px] flex flex-col justify-center items-center text-white text-2xl bg-cover";
const SelectSignInRole = () => {
  return (
    <BackgroundView>
      <View className="flex flex-col items-center h-screen z-10">
        <Image
          className="mt-[208px]"
          src={defaultAvatar}
          height={116}
          width={116}
        />
        <View className="flex justify-center mt-[28px] text-white">未登录</View>

        <View className="grid grid-cols-2 gap-10 mt-20">
          <JumpBox
            onClick={() => utils.navigator.gotoLogin("patient")}
            imageBg={患者bg}
            className={RoleLoginBoxCls}
          >
            患者登录
          </JumpBox>
          <JumpBox
            onClick={() => utils.navigator.gotoLogin("doctor")}
            imageBg={医生bg}
          >
            医生登录
          </JumpBox>
          <JumpBox
            onClick={() => utils.navigator.gotoPasswordSignIn("worker")}
            imageBg={药店bg}
          >
            药店工作人员
            <View className="flex justify-center">登录</View>
          </JumpBox>
          <JumpBox
            onClick={() => utils.navigator.gotoLogin("proxy")}
            imageBg={公益bg}
          >
            公益专员登录
          </JumpBox>
        </View>
      </View>
    </BackgroundView>
  );
};

const JumpBox = ({ imageBg, onClick, children }) => {
  return (
    <View onClick={onClick} className={classNames(RoleLoginBoxCls, "relative")}>
      <Image src={imageBg} className="h-full w-full absolute" />
      <View className="absolute z-10">{children}</View>
    </View>
  );
};

export default SelectSignInRole;
