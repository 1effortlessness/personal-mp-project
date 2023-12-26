import { View, Image } from "@tarojs/components";
import 视图bg from "@/assets/images/视图bg.png";
import 视图bg2 from "@/assets/images/视图bg2.png";
import 药 from "@/assets/images/药.png";
import logo from "@/assets/images/logo.png";
import styles from "./index.module.scss";
import classNames from "classnames";

const MedicineBgView = ({ children, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      style={classNames({ backgroundImage: `url(${视图bg})` }, viewProps.style)}
      className={classNames(
        "flex flex-col items-center h-full bg-cover",
        viewProps.className
      )}
    >
      <Image src={logo} className="w-[332px] h-[120px] absolute left-0 z-10" />
      <Image src={视图bg2} className="w-[750px] h-[772px] absolute z-0" />
      <Image src={药} className="w-[250px] h-[479px] mt-[168px] absolute" />
      <View
        className="h-[860px] w-full absolute top-[772px]"
        style={{
          background: "linear-gradient(180deg, #181F78 0%, #000B37 100%)",
        }}
      ></View>
      <View className="z-10">{children}</View>
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
      <View className=" text-[34px]">{title}</View>
      {children}
    </View>
  );
};

export default MedicineBgView;
