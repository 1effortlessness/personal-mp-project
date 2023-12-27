import MedicineBgView, { DescCard } from "../MedicineBgView";

const NoPermissionGetMedicine = () => {
  return (
    <MedicineBgView>
      <DescCard
        title=""
        className="flex justify-center items-center mt-[702px]"
      >
        您暂时未获得参与活动的资格
      </DescCard>
    </MedicineBgView>
  );
};

export default NoPermissionGetMedicine;
