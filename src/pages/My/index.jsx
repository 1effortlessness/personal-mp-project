import { Text, View } from "@tarojs/components";

import { Icon } from "@antmjs/vantui";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { useMemo } from "react";
import PageWithTabBar from "src/components/PageWithTabBar";
import LogOutButton from "src/components/LogOutButton";
import Banner from "src/common-components/WorkerSpace/Banner";
import Container from "src/common-components/WorkerSpace/Container";
import { MedicineLogo } from "src/common-components/WorkerSpace/BannerInfo";
import CardContainer from "src/common-components/WorkerSpace/CardContainer/CardContainer";
import SelectSignInRole from "src/components/SelectSignInRole";

function My() {
  const currentRole = useSelector(userSelector.currentRole);

  return (
    <PageWithTabBar>
      <SelectSignInRole />
    </PageWithTabBar>
  );
  return (
    <PageWithTabBar>
      <Banner />
      <Container>
        <View className="flex justify-center">
          <MedicineLogo />
        </View>
        <CardContainer title="基本信息" titleAlign="justify-start">
          <BasicInfo />
        </CardContainer>
        {currentRole === "worker" && (
          <View className="shadow-md bg-white rounded-[20px] p-4 flex justify-between items-center text-primary font-semibold">
            <Text>援助药收货</Text>
            <Icon name="arrow" size="16px" />
          </View>
        )}
        {currentRole === "worker" && (
          <View className="shadow-md bg-white rounded-[20px] p-4 flex justify-between items-center text-primary font-semibold">
            <Text>我关注的医生</Text>
            <Icon name="arrow" size="16px" />
          </View>
        )}
      </Container>
      <LogOutButton />
    </PageWithTabBar>
  );
}

function BasicInfo() {
  const currentRole = useSelector(userSelector.currentRole);
  const currentRoleBasicInfo = useSelector(userSelector.currentRoleBasicInfo);
  const data = useMemo(() => {
    if (currentRole === "doctor") {
      return [
        { label: "姓名", value: currentRoleBasicInfo?.name },
        { label: "手机号", value: currentRoleBasicInfo.mobile },
        { label: "所属医院", value: currentRoleBasicInfo.hospital }
      ];
    }

    if (currentRole === "patient") {
      return [
        { label: "姓名", value: currentRoleBasicInfo?.name },
        { label: "手机号", value: currentRoleBasicInfo?.mobile },
        { label: "身份证号", value: currentRoleBasicInfo?.identityCard },
        { label: "就诊医院", value: currentRoleBasicInfo?.hospital },
        { label: "就诊医生", value: currentRoleBasicInfo?.doctor },
        { label: "疾病类型", value: "骨质疏松症" }
      ];
    }

    if (currentRole === "proxy") {
      return [
        { label: "姓名", value: currentRoleBasicInfo?.name },
        { label: "手机号", value: currentRoleBasicInfo?.mobile },
        { label: "公司名", value: currentRoleBasicInfo?.companyName }
      ];
    }

    if (currentRole === "worker")
      return [
        { label: "姓名", value: currentRoleBasicInfo?.name },
        { label: "手机号", value: currentRoleBasicInfo?.mobile },
        { label: "药店名", value: currentRoleBasicInfo?.shopName }
      ];
    return [];
  }, [currentRole, currentRoleBasicInfo]);
  return (
    <View className="flex flex-col gap-1.5">
      {data.map((item) => {
        return (
          <View className="h-[60px] items-center flex gap-4" key={item.label}>
            <View className="w-[140px] font-bold flex-shrink-0">
              {item.label}
            </View>
            <View>{item.value}</View>
          </View>
        );
      })}
    </View>
  );
}

export default My;
