import { ScrollView, View } from "@tarojs/components";
import 视图bg2 from "@/assets/images/视图bg2.png";
import 药 from "@/assets/images/药.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Image } from "@antmjs/vantui";

const bottomBgColor = "linear-gradient(180deg, #181F78 0%, #000B37 100%)";
const MedicineBgView = ({ children, noTabbar, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      style={viewProps.style}
      className={classNames(
        "safe-area-view bg-cover overflow-hidden",
        viewProps.className
      )}
    >
      <View className="absolute z-0">
        <Image src={视图bg2} width={750} height={772} />
      </View>
      <View
        className={classNames("w-full absolute top-[772px]", styles.bgBottom)}
        style={{ background: bottomBgColor }}
      />
      <ScrollView
        scrollY
        className={classNames(
          "z-10 relative",
          noTabbar ? "h-screen" : "safe-area-view"
        )}
      >
        <Logo />
        <View className="w-full flex justify-center mt-[162px]">
          <Image src={药} width={250} height={479} />
        </View>
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
        "z-10"
      )}
    >
      <View className="text-3xl font-bold">{title}</View>
      {children}
    </View>
  );
};

const Logo = () => {
  return (
    <View className="absolute left-0 top-0 z-10">
      <Image src={logo} width={332} height={120} />
    </View>
  );
};
export default MedicineBgView;
