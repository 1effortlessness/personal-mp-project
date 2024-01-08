import 兑换券active from "@/assets/icons/tabbar/兑换券active.png";
import 兑换券 from "@/assets/icons/tabbar/兑换券.png";
import 工作区active from "@/assets/icons/tabbar/工作区active.png";
import 工作区 from "@/assets/icons/tabbar/工作区.png";
import 核销记录active from "@/assets/icons/tabbar/核销记录active.png";
import 核销记录 from "@/assets/icons/tabbar/核销记录.png";
import 领药active from "@/assets/icons/tabbar/领药active.png";
import 领药 from "@/assets/icons/tabbar/领药.png";
import 首页active from "@/assets/icons/tabbar/首页active.png";
import 首页 from "@/assets/icons/tabbar/首页.png";
import 我的active from "@/assets/icons/tabbar/我的active.png";
import 我的 from "@/assets/icons/tabbar/我的.png";

export const DefaultConfig = [
  {
    text: "首页",
    key: "home",
    activeIcon: 首页active,
    icon: 首页,
    path: "pages/index/index"
  },
  {
    text: "领药",
    key: "medicine",
    activeIcon: 领药active,
    icon: 领药,
    path: "pages/Medicine/index"
  },
  {
    text: "兑换券",
    key: "certificate",
    activeIcon: 兑换券active,
    icon: 兑换券,
    path: "pages/Certificate/index"
  },
  {
    text: "我的",
    key: "my",
    activeIcon: 我的active,
    icon: 我的,
    path: "pages/My/index"
  }
];

export const ProxyTabBarConfig = [
  {
    text: "首页",
    key: "home",
    activeIcon: 首页active,
    icon: 首页,
    path: "pages/index/index"
  },
  {
    text: "我的",
    key: "my",
    activeIcon: 我的active,
    icon: 我的,
    path: "pages/My/index"
  }
];

export const WorkerTabBarConfig = [
  {
    text: "工作台",
    key: "workSpace",
    activeIcon: 工作区active,
    icon: 工作区,
    path: "pages/WorkSpace/index"
  },
  {
    text: "核销记录",
    key: "writeoff",
    activeIcon: 核销记录active,
    icon: 核销记录,
    path: "pages/Writeoff/index"
  },
  {
    text: "我的",
    key: "my",
    activeIcon: 我的active,
    icon: 我的,
    path: "pages/My/index"
  }
];
