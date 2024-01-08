import { View } from "@tarojs/components";
import { Image } from "@antmjs/vantui";
import adminAvatar from "src/assets/icons/admin-logo.svg";
import doctorAvatar from "src/assets/icons/doctorAvatar.svg";
import patientAvatar from "src/assets/icons/patientAvatar.svg";
import proxyAvatar from "src/assets/icons/proxyAvatar.svg";
import ScanImg from "src/assets/icons/scan.svg";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";

export function MedicineLogo() {
  const currentRole = useSelector(userSelector.currentRole);
  const AvatarMap = {
    patient: patientAvatar,
    doctor: doctorAvatar,
    proxy: proxyAvatar,
    worker: adminAvatar
  };
  return (
    <Image
      src={AvatarMap[currentRole] || patientAvatar}
      width={116}
      height={116}
    />
  );
}

function BannerInfo() {
  const currentRoleBasicInfo = useSelector(userSelector.currentRoleBasicInfo);
  return (
    <View className="flex items-center gap-4 relative text-white">
      <MedicineLogo />
      <View className="flex justify-between gap-2 flex-grow">
        <View className="flex-grow">
          <View className="text-white font-medium mb-3">
            {currentRoleBasicInfo?.shopName}
          </View>
          <View className="flex">
            <View className="bg-[#7598C2] text-white text-[22px] rounded-full min-w-[140px] py-0.5 px-3 text-center">
              {currentRoleBasicInfo.name}
            </View>
          </View>
        </View>
        <View
          className="flex flex-col items-center gap-1"
          onTap={() => {
            // todo: goto scan page
            console.log("goto scan page");
          }}
        >
          <Image src={ScanImg} width={60} height={60} />
          <View className="text-[24px]">扫码核销</View>
        </View>
      </View>
    </View>
  );
}

export default BannerInfo;
