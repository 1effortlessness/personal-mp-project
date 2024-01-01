import {Text, View} from "@tarojs/components";
import Banner from "../components/Banner";
import Container from "../components/Container";
import {MedicineLogo} from "../components/BannerInfo";
import CardContainer from "../components/CardContainer/CardContainer";
import {Icon} from "@antmjs/vantui";

function AdminMy() {
	return <View>
		<Banner />
		<Container>
			<View className="flex justify-center">
				<MedicineLogo />
			</View>
			<CardContainer title="基本信息" titleAlign="justify-start">
				<BasicInfo />
			</CardContainer>
			<View className="shadow-md bg-white rounded-[20px] p-4 flex justify-between items-center text-primary font-semibold">
				<Text>援助药收货</Text>
				<Icon name="arrow" size="16px" />
			</View>
		</Container>
	</View>
}

function BasicInfo () {
	const data = [
		{
			label: "姓名",
			value: '李四'
		},
		{
			label: '手机号',
			value: '18100000000'
		},
		{
			label: '药店名',
			value: 'xxxxxxx药店'
		}
	]
	return <View className="flex flex-col gap-1.5">
		{
			data.map(item => {
				return <View className="h-[60px] items-center flex gap-4" key={item.label}>
					<View className="w-[140px] font-bold flex-shrink-0">{item.label}</View>
					<View>{item.value}</View>
				</View>
			})
		}
	</View>
}

export default AdminMy