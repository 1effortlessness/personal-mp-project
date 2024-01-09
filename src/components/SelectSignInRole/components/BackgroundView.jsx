import { View, Image, ScrollView } from "@tarojs/components";
import 视图bg from "@/assets/images/视图bg.png";
import logo from "@/assets/images/logo.png";

const BackgroundView = ({ children }) => {
  return (
    <View className="z-0 w-full h-full relative">
      <Image
        src={视图bg}
        className="w-full safe-area-view absolute top-0 left-0 z-10"
      />
      <Image
        src={logo}
        className="w-[332px] h-[120px] absolute z-10 top-0 left-0"
      />

      <ScrollView
        scrollY
        className="absolute z-20 flex justify-center w-full safe-area-view"
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default BackgroundView;
