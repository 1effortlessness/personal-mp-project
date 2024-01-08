import { Provider } from "react-redux";
import "./app.scss";
import store from "./store";
import Taro from "@tarojs/taro";
import { getToken, getTokenRole } from "./utils/storage";
import { useSignIn } from "./hooks/useSignIn";

function App({ children }) {
  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      <Bootstrap>{children}</Bootstrap>
    </Provider>
  );
}

function Bootstrap({ children }) {
  const { getUserMeInfo } = useSignIn(true);
  const init = async () => {
    const token = await getToken();
    if (token) {
      const tokenRole = await getTokenRole();
      getUserMeInfo(tokenRole);
    }
  };
  Taro.useLaunch(() => {
    init();
  });

  return children;
}

export default App;
