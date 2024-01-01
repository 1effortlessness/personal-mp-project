import {View} from "@tarojs/components";

function Container({children}) {
return <View className="relative px-5 py-9 flex-col flex gap-5">{children}</View>
}

export default Container