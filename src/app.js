import { useLaunch } from "@tarojs/taro";
import { Provider } from "react-redux";
import "./app.scss";
import store from "./store";

function App({ children }) {
  // children 是将要会渲染的页面
  return <Provider store={store}>
    <Bootstrap>{children}</Bootstrap>
  </Provider>;
}

function Bootstrap({ children }) {
  useLaunch(() => {
    console.log("App launched.");
  });

  return children;
}

export default App;
