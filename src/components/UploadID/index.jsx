import { View } from "@tarojs/components";
import { Button, Image, Loading } from "@antmjs/vantui";
// @ts-ignore
import IDFront from "@/assets/images/IDFront.png";
// @ts-ignore
import IDBacked from "@/assets/images/IDBacked.png";
import classNames from "classnames";
import Taro from "@tarojs/taro";

const IDCardCls = "flex flex-col flex-1 items-center";
const UploadID = ({ value, onChange, ...viewProps }) => {
  console.log(value, "value");
  return (
    <View className="flex justify-between gap-[52px]">
      {/* 身份证照片正面 */}
      <View className={IDCardCls}>
        <Image
          className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
          src={value?.front || IDFront}
          width={236}
          height={158}
          renderLoading={<Loading />}
        />
        <Button onClick={() => Taro.chooseImage({})} type="primary" block>
          点击上传人像面
        </Button>
      </View>
      {/* 身份证照片背面 */}
      <View className={IDCardCls}>
        <Image
          className="p-[10px] border-ID border-[2px] border-solid mb-[40px]"
          src={value?.backed || IDBacked}
          width={236}
          height={158}
          renderLoading={<Loading />}
        />

        <Button type="primary" block>
          点击上传国徽面
        </Button>
      </View>
    </View>
  );
};

export default UploadID;
