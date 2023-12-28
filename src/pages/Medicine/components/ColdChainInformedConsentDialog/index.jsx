import { Dialog } from "@antmjs/vantui";
import { View, ScrollView } from "@tarojs/components";
import styles from "./index.module.scss";

const ColdChainInformedConsentDialog = () => {
  return (
    <Dialog
      className={styles.override}
      use-slot
      show
      theme="round-button"
      confirmButtonText="已阅读，并完全理解"
      confirmButtonColor="white"
    >
      <View className="px-[36px] pt-[58px]">
        {/* title */}
        <View className="w-full text-center text-large text-primary font-extrabold">
          冷链知情同意书
        </View>

        {/* body */}

        <ScrollView scrollY className="mt-[36px] h-[900px]">
          <View>
            冷链知情同意书s详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案。
            冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案。
            冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案。
            冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案。
            冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案冷链知情同意书详细描述文案。
          </View>
        </ScrollView>
      </View>
    </Dialog>
  );
};

export default ColdChainInformedConsentDialog;
