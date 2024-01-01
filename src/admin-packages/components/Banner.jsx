import { View} from "@tarojs/components";
import {Image} from "@antmjs/vantui";
import BgImg from '../../assets/images/admin-index-bg.svg'

function Banner() {
	return <View className="absolute top-0 h-[396px] w-full">
			<Image src={BgImg} width="100%" height="100%"  />
		</View>
}

export default Banner