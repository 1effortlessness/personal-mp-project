import { View, Image } from "@tarojs/components";
import { Button, Loading } from "@antmjs/vantui";
import IDFront from "@/assets/images/IDFront.png";
import IDBacked from "@/assets/images/IDBacked.png";
import classNames from "classnames";
import Taro from "@tarojs/taro";

const ImageCls = "w-[215px] h-[137px]";
const IDCardCls = "flex flex-col flex-1 items-center ";
const UploadID = ({ value, onChange, ...viewProps }) => {
  console.log(value, "value");
  return (
    <View className={classNames("flex justify-between gap-[52px] ")}>
      {/* 身份证照片正面 */}
      <View className={IDCardCls}>
        <View className="mb-[40px] border-[4px] border-solid border-ID p-[4px]">
          <Image className={ImageCls} src={value?.front || IDFront} />
          {/* <Loading className={ImageCls} /> */}
        </View>
        <Button onClick={() => Taro.chooseImage({})} type="primary" block>
          点击上传人像面
        </Button>
      </View>
      {/* 身份证照片背面 */}
      <View className={IDCardCls}>
        <View className="mb-[40px] border-[4px] border-solid border-ID p-[4px]">
          <Image className={ImageCls} src={value?.backed || IDBacked} />
          {/* <Loading className={ImageCls} /> */}
        </View>
        <Button type="primary" block>
          点击上传国徽面
        </Button>
      </View>
    </View>
  );
};

export default UploadID;
