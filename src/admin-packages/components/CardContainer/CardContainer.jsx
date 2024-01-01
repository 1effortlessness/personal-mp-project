import { View } from "@tarojs/components";
import styles from "./style.module.scss";

function CardContainer({ children, title, titleAlign }) {
  return (
    <View className={styles.card}>
      <View
        className={`text-primary text-center mb-2 h-10 flex items-center font-bold ${
          titleAlign ? titleAlign : "justify-center"
        }`}
      >
        {title}
      </View>
      <View className="text-[#333]">{children}</View>
    </View>
  );
}

export default CardContainer;
