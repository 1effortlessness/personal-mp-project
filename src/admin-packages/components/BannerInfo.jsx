import { View } from "@tarojs/components";
import { Image } from "@antmjs/vantui";
import AvatarImg from "../assets/admin-logo.svg";
import ScanImg from "../assets/scan.svg"

function BannerInfo() {
  return (
    <View className="flex items-center gap-4 relative text-white">
      <Image src={AvatarImg} width={116} height={116} />
      <View className="flex justify-between gap-2 flex-grow">
        <View className="flex-grow">
          <View className="text-white font-medium mb-3">
            南京九天药房（文晖路店）
          </View>
          <View className="flex">
            <View className="bg-[#7598C2] text-white text-[22px] rounded-full min-w-[140px] py-0.5 px-3 text-center">
              李天
            </View>
          </View>
        </View>
	      <View className="flex flex-col items-center gap-1" onTap={() => {
          // todo: goto scan page
          console.log('goto scan page')
        }}
	      >
          <Image src={ScanImg} width={60} height={60} />
          <View className="text-[24px]">扫码核销</View>
        </View>
      </View>
    </View>
  );
}

export default BannerInfo