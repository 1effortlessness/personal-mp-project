import { View, Image, ScrollView } from "@tarojs/components";
import 视图bg from "@/assets/images/视图bg.png";
import 视图bg2 from "@/assets/images/视图bg2.png";
import 药 from "@/assets/images/药.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import classNames from "classnames";

const MedicineBgView = ({ children, noTabbar, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      style={classNames({ backgroundImage: `url(${视图bg})` }, viewProps.style)}
      className={classNames("h-full bg-cover", viewProps.className)}
    >
      <Image src={视图bg2} className="w-[750px] h-[772px] absolute z-0" />
      <View
        className="h-[675px] w-full absolute top-[772px]"
        style={{
          background: "linear-gradient(180deg, #181F78 0%, #000B37 100%)"
        }}
      ></View>
      <ScrollView
        scrollY
        className={classNames(
          "z-10 relative",
          noTabbar ? "h-screen" : styles.safeAreaView
        )}
      >
        <Image
          src={logo}
          className="w-[332px] h-[120px] absolute left-0 top-0 z-10"
        />
        <Image
          src={药}
          className="w-[250px] h-[479px] top-[162px] left-[250px] absolute"
        />
        <View
          className={classNames(
            "flex flex-col items-center px-[48px]",
            noTabbar && "pb-[48px]"
          )}
        >
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

export const DescCard = ({ children, title, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      className={classNames(
        viewProps.className,
        styles.textContainerCard,
        "z-10 font-bold"
      )}
    >
      <View className="text-3xl">{title}</View>
      {children}
    </View>
  );
};

export default MedicineBgView;
