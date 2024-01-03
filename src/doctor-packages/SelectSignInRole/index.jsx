// @ts-nocheck
import { Image, View } from "@tarojs/components";
import defaultAvatar from "@/assets/icons/defaultAvatar.png";
import 患者bg from "@/assets/images/患者bg.png";
import 公益bg from "@/assets/images/公益bg.png";
import 药店bg from "@/assets/images/药店bg.png";
import 医生bg from "@/assets/images/医生bg.png";
import 视图bg from "@/assets/images/视图bg.png";
import logo from "@/assets/images/logo.png";
import { gotoLogin, gotoPasswordSignIn } from "@/utils/navigator";

const RoleLoginBoxCls =
  "w-[256px] h-[256px] flex flex-col justify-center items-center text-white text-2xl bg-cover";
const SelectSignInRole = () => {
  return (
    <View
      style={{
        backgroundImage: `url(${视图bg})`
      }}
      className="flex flex-col items-center h-screen bg-cover"
    >
      <Image src={logo} className="w-[332px] h-[120px] self-start" />
      <View className="mt-[88px]">
        <Image src={defaultAvatar} className="h-[116px] w-[116px]" />
      </View>
      <View className="flex justify-center mt-[28px] text-white">未登录</View>

      <View
        onClick={() => gotoLogin("patient")}
        className="grid grid-cols-2 gap-10 mt-20"
      >
        <View
          style={{ backgroundImage: `url(${患者bg})` }}
          className={RoleLoginBoxCls}
        >
          患者登录
        </View>
        <View
          onClick={() => gotoLogin("doctor")}
          style={{ backgroundImage: `url(${医生bg})` }}
          className={RoleLoginBoxCls}
        >
          医生登录
        </View>
        <View
          onClick={() => gotoPasswordSignIn("worker")}
          style={{ backgroundImage: `url(${药店bg})` }}
          className={RoleLoginBoxCls}
        >
          药店工作人员
          <View>登录</View>
        </View>
        <View
          onClick={() => gotoLogin("proxy")}
          style={{ backgroundImage: `url(${公益bg})` }}
          className={RoleLoginBoxCls}
        >
          公益专员登录
        </View>
      </View>
    </View>
  );
};

export default SelectSignInRole;
