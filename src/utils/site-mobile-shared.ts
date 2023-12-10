import ActionBar from '../pages/action-bar/index.vue'
import ActionSheet from '../pages/action-sheet/index.vue'
import AddressEdit from '../pages/address-edit/index.vue'
import AddressList from '../pages/address-list/index.vue'
import Area from '../pages/area/index.vue'
import BackTop from '../pages/back-top/index.vue'
import Badge from '../pages/badge/index.vue'
import Barrage from '../pages/barrage/index.vue'
import Button from '../pages/button/index.vue'
import Calendar from '../pages/calendar/index.vue'
import Card from '../pages/card/index.vue'
import Cascader from '../pages/cascader/index.vue'
import Cell from '../pages/cell/index.vue'
import Checkbox from '../pages/checkbox/index.vue'
import Circle from '../pages/circle/index.vue'
import Col from '../pages/col/index.vue'
import Collapse from '../pages/collapse/index.vue'
import ConfigProvider from '../pages/config-provider/index.vue'
import ContactCard from '../pages/contact-card/index.vue'
import ContactEdit from '../pages/contact-edit/index.vue'
import ContactList from '../pages/contact-list/index.vue'
import CountDown from '../pages/count-down/index.vue'
import CouponList from '../pages/coupon-list/index.vue'
import DatePicker from '../pages/date-picker/index.vue'
import Dialog from '../pages/dialog/index.vue'
import Divider from '../pages/divider/index.vue'
import DropdownMenu from '../pages/dropdown-menu/index.vue'
import Empty from '../pages/empty/index.vue'
import Field from '../pages/field/index.vue'
import FloatingBubble from '../pages/floating-bubble/index.vue'
import FloatingPanel from '../pages/floating-panel/index.vue'
import Form from '../pages/form/index.vue'
import Grid from '../pages/grid/index.vue'
import Highlight from '../pages/highlight/index.vue'
import Icon from '../pages/icon/index.vue'
import Image from '../pages/image/index.vue'
import ImagePreview from '../pages/image-preview/index.vue'
import IndexBar from '../pages/index-bar/index.vue'
import Lazyload from '../pages/lazyload/index.vue'
import List from '../pages/list/index.vue'
import Loading from '../pages/loading/index.vue'
import NavBar from '../pages/nav-bar/index.vue'
import NoticeBar from '../pages/notice-bar/index.vue'
import Notify from '../pages/notify/index.vue'
import NumberKeyboard from '../pages/number-keyboard/index.vue'
import Overlay from '../pages/overlay/index.vue'
import Pagination from '../pages/pagination/index.vue'
import PasswordInput from '../pages/password-input/index.vue'
import Picker from '../pages/picker/index.vue'
import PickerGroup from '../pages/picker-group/index.vue'
import Popover from '../pages/popover/index.vue'
import Popup from '../pages/popup/index.vue'
import Progress from '../pages/progress/index.vue'
import PullRefresh from '../pages/pull-refresh/index.vue'
import Radio from '../pages/radio/index.vue'
import Rate from '../pages/rate/index.vue'
import RollingText from '../pages/rolling-text/index.vue'
import Search from '../pages/search/index.vue'
import ShareSheet from '../pages/share-sheet/index.vue'
import Sidebar from '../pages/sidebar/index.vue'
import Signature from '../pages/signature/index.vue'
import Skeleton from '../pages/skeleton/index.vue'
import Slider from '../pages/slider/index.vue'
import Space from '../pages/space/index.vue'
import Stepper from '../pages/stepper/index.vue'
import Steps from '../pages/steps/index.vue'
import Sticky from '../pages/sticky/index.vue'
import Style from '../pages/style/index.vue'
import SubmitBar from '../pages/submit-bar/index.vue'
import Swipe from '../pages/swipe/index.vue'
import SwipeCell from '../pages/swipe-cell/index.vue'
import Switch from '../pages/switch/index.vue'
import Tab from '../pages/tab/index.vue'
import Tabbar from '../pages/tabbar/index.vue'
import Tag from '../pages/tag/index.vue'
import TextEllipsis from '../pages/text-ellipsis/index.vue'
import TimePicker from '../pages/time-picker/index.vue'
import Toast from '../pages/toast/index.vue'
import TreeSelect from '../pages/tree-select/index.vue'
import Uploader from '../pages/uploader/index.vue'
import Watermark from '../pages/watermark/index.vue'

export const demos = {
  ActionBar,
  ActionSheet,
  AddressEdit,
  AddressList,
  Area,
  BackTop,
  Badge,
  Barrage,
  Button,
  Calendar,
  Card,
  Cascader,
  Cell,
  Checkbox,
  Circle,
  Col,
  Collapse,
  ConfigProvider,
  ContactCard,
  ContactEdit,
  ContactList,
  CountDown,
  CouponList,
  DatePicker,
  Dialog,
  Divider,
  DropdownMenu,
  Empty,
  Field,
  FloatingBubble,
  FloatingPanel,
  Form,
  Grid,
  Highlight,
  Icon,
  Image,
  ImagePreview,
  IndexBar,
  Lazyload,
  List,
  Loading,
  NavBar,
  NoticeBar,
  Notify,
  NumberKeyboard,
  Overlay,
  Pagination,
  PasswordInput,
  Picker,
  PickerGroup,
  Popover,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  Rate,
  RollingText,
  Search,
  ShareSheet,
  Sidebar,
  Signature,
  Skeleton,
  Slider,
  Space,
  Stepper,
  Steps,
  Sticky,
  Style,
  SubmitBar,
  Swipe,
  SwipeCell,
  Switch,
  Tab,
  Tabbar,
  Tag,
  TextEllipsis,
  TimePicker,
  Toast,
  TreeSelect,
  Uploader,
  Watermark
};

export const config = {
  "name": "vant",
  "build": {
    "srcDir": "src",
    "tagPrefix": "van-",
    "namedExport": true,
    "skipInstall": [
      "lazyload"
    ],
    "packageManager": "pnpm",
    "extensions": {
      "esm": ".mjs"
    },
    "site": {
      "publicPath": "/vant/"
    },
    "vetur": {
      "tagPrefix": "van-"
    },
    "css": {
      "removeSourceFile": true
    }
  },
  "site": {
    "defaultLang": "zh-CN",
    "darkModeClass": "van-theme-dark",
    "lightModeClass": "van-theme-light",
    "enableVConsole": false,
    "versions": [
      {
        "label": "v1",
        "link": "/vant/v1/"
      },
      {
        "label": "v2",
        "link": "/vant/v2/"
      },
      {
        "label": "v3",
        "link": "/vant/v3/"
      }
    ],
    "baiduAnalytics": {
      "seed": "af5d41bc4e446e76665dbe3ec18d55c3"
    },
    "headHtml": "<script>\nif (location.host === 'youzan.github.io') {\nlocation.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');\n}\n</script>\n",
    "locales": {
      "zh-CN": {
        "title": "Vant 4",
        "subtitle": "（适用于 Vue 3）",
        "description": "轻量、可定制的移动端组件库",
        "logo": "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        "langLabel": "中",
        "links": [
          {
            "logo": "https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg",
            "url": "https://vant-contrib.gitee.io/vant-weapp/"
          },
          {
            "logo": "https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",
            "url": "https://github.com/vant-ui/vant"
          }
        ],
        "nav": [
          {
            "title": "基础组件",
            "items": [
              {
                "path": "button",
                "title": "Button 按钮"
              },
              {
                "path": "cell",
                "title": "Cell 单元格"
              },
              {
                "path": "config-provider",
                "title": "ConfigProvider 全局配置"
              },
              {
                "path": "icon",
                "title": "Icon 图标"
              },
              {
                "path": "image",
                "title": "Image 图片"
              },
              {
                "path": "col",
                "title": "Layout 布局"
              },
              {
                "path": "popup",
                "title": "Popup 弹出层"
              },
              {
                "path": "space",
                "title": "Space 间距"
              },
              {
                "path": "style",
                "title": "Style 内置样式"
              },
              {
                "path": "toast",
                "title": "Toast 轻提示"
              }
            ]
          },
          {
            "title": "表单组件",
            "items": [
              {
                "path": "calendar",
                "title": "Calendar 日历"
              },
              {
                "path": "cascader",
                "title": "Cascader 级联选择"
              },
              {
                "path": "checkbox",
                "title": "Checkbox 复选框"
              },
              {
                "path": "date-picker",
                "title": "DatePicker 日期选择"
              },
              {
                "path": "field",
                "title": "Field 输入框"
              },
              {
                "path": "form",
                "title": "Form 表单"
              },
              {
                "path": "number-keyboard",
                "title": "NumberKeyboard 数字键盘"
              },
              {
                "path": "password-input",
                "title": "PasswordInput 密码输入框"
              },
              {
                "path": "picker",
                "title": "Picker 选择器"
              },
              {
                "path": "picker-group",
                "title": "PickerGroup 选择器组"
              },
              {
                "path": "radio",
                "title": "Radio 单选框"
              },
              {
                "path": "rate",
                "title": "Rate 评分"
              },
              {
                "path": "search",
                "title": "Search 搜索"
              },
              {
                "path": "slider",
                "title": "Slider 滑块"
              },
              {
                "path": "signature",
                "title": "Signature 签名"
              },
              {
                "path": "stepper",
                "title": "Stepper 步进器"
              },
              {
                "path": "switch",
                "title": "Switch 开关"
              },
              {
                "path": "time-picker",
                "title": "TimePicker 时间选择"
              },
              {
                "path": "uploader",
                "title": "Uploader 文件上传"
              }
            ]
          },
          {
            "title": "反馈组件",
            "items": [
              {
                "path": "action-sheet",
                "title": "ActionSheet 动作面板"
              },
              {
                "path": "barrage",
                "title": "Barrage 弹幕"
              },
              {
                "path": "dialog",
                "title": "Dialog 弹出框"
              },
              {
                "path": "dropdown-menu",
                "title": "DropdownMenu 下拉菜单"
              },
              {
                "path": "floating-panel",
                "title": "FloatingPanel 浮动面板"
              },
              {
                "path": "floating-bubble",
                "title": "FloatingBubble 浮动气泡"
              },
              {
                "path": "loading",
                "title": "Loading 加载"
              },
              {
                "path": "notify",
                "title": "Notify 消息通知"
              },
              {
                "path": "overlay",
                "title": "Overlay 遮罩层"
              },
              {
                "path": "pull-refresh",
                "title": "PullRefresh 下拉刷新"
              },
              {
                "path": "share-sheet",
                "title": "ShareSheet 分享面板"
              },
              {
                "path": "swipe-cell",
                "title": "SwipeCell 滑动单元格"
              }
            ]
          },
          {
            "title": "展示组件",
            "items": [
              {
                "path": "badge",
                "title": "Badge 徽标"
              },
              {
                "path": "circle",
                "title": "Circle 环形进度条"
              },
              {
                "path": "collapse",
                "title": "Collapse 折叠面板"
              },
              {
                "path": "count-down",
                "title": "CountDown 倒计时"
              },
              {
                "path": "divider",
                "title": "Divider 分割线"
              },
              {
                "path": "empty",
                "title": "Empty 空状态"
              },
              {
                "path": "highlight",
                "title": "Highlight 高亮文本"
              },
              {
                "path": "image-preview",
                "title": "ImagePreview 图片预览"
              },
              {
                "path": "lazyload",
                "title": "Lazyload 懒加载"
              },
              {
                "path": "list",
                "title": "List 列表"
              },
              {
                "path": "notice-bar",
                "title": "NoticeBar 通知栏"
              },
              {
                "path": "popover",
                "title": "Popover 气泡弹出框"
              },
              {
                "path": "progress",
                "title": "Progress 进度条"
              },
              {
                "path": "rolling-text",
                "title": "RollingText 翻滚文本"
              },
              {
                "path": "skeleton",
                "title": "Skeleton 骨架屏"
              },
              {
                "path": "steps",
                "title": "Steps 步骤条"
              },
              {
                "path": "sticky",
                "title": "Sticky 粘性布局"
              },
              {
                "path": "swipe",
                "title": "Swipe 轮播"
              },
              {
                "path": "tag",
                "title": "Tag 标签"
              },
              {
                "path": "text-ellipsis",
                "title": "TextEllipsis 文本省略"
              },
              {
                "path": "watermark",
                "title": "Watermark 水印"
              }
            ]
          },
          {
            "title": "导航组件",
            "items": [
              {
                "path": "action-bar",
                "title": "ActionBar 动作栏"
              },
              {
                "path": "back-top",
                "title": "BackTop 回到顶部"
              },
              {
                "path": "grid",
                "title": "Grid 宫格"
              },
              {
                "path": "index-bar",
                "title": "IndexBar 索引栏"
              },
              {
                "path": "nav-bar",
                "title": "NavBar 导航栏"
              },
              {
                "path": "pagination",
                "title": "Pagination 分页"
              },
              {
                "path": "sidebar",
                "title": "Sidebar 侧边导航"
              },
              {
                "path": "tab",
                "title": "Tab 标签页"
              },
              {
                "path": "tabbar",
                "title": "Tabbar 标签栏"
              },
              {
                "path": "tree-select",
                "title": "TreeSelect 分类选择"
              }
            ]
          },
          {
            "title": "业务组件",
            "items": [
              {
                "path": "address-edit",
                "title": "AddressEdit 地址编辑"
              },
              {
                "path": "address-list",
                "title": "AddressList 地址列表"
              },
              {
                "path": "area",
                "title": "Area 省市区选择"
              },
              {
                "path": "card",
                "title": "Card 商品卡片"
              },
              {
                "path": "contact-card",
                "title": "ContactCard 联系人卡片"
              },
              {
                "path": "contact-edit",
                "title": "ContactEdit 联系人编辑"
              },
              {
                "path": "contact-list",
                "title": "ContactList 联系人列表"
              },
              {
                "path": "coupon-list",
                "title": "Coupon 优惠券"
              },
              {
                "path": "submit-bar",
                "title": "SubmitBar 提交订单栏"
              }
            ]
          }
        ]
      },
      "en-US": {
        "title": "Vant 4",
        "subtitle": " (for Vue 3)",
        "description": "A lightweight, customizable Vue UI library for mobile web apps.",
        "logo": "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        "langLabel": "EN",
        "links": [
          {
            "logo": "https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",
            "url": "https://github.com/vant-ui/vant"
          }
        ],
        "nav": [
          {
            "title": "Basic Components",
            "items": [
              {
                "path": "button",
                "title": "Button"
              },
              {
                "path": "cell",
                "title": "Cell"
              },
              {
                "path": "config-provider",
                "title": "ConfigProvider"
              },
              {
                "path": "icon",
                "title": "Icon"
              },
              {
                "path": "image",
                "title": "Image"
              },
              {
                "path": "col",
                "title": "Layout"
              },
              {
                "path": "popup",
                "title": "Popup"
              },
              {
                "path": "space",
                "title": "Space"
              },
              {
                "path": "style",
                "title": "Built-in style"
              },
              {
                "path": "toast",
                "title": "Toast"
              }
            ]
          },
          {
            "title": "Form Components",
            "items": [
              {
                "path": "calendar",
                "title": "Calendar"
              },
              {
                "path": "cascader",
                "title": "Cascader"
              },
              {
                "path": "checkbox",
                "title": "Checkbox"
              },
              {
                "path": "date-picker",
                "title": "DatePicker"
              },
              {
                "path": "field",
                "title": "Field"
              },
              {
                "path": "form",
                "title": "Form"
              },
              {
                "path": "number-keyboard",
                "title": "NumberKeyboard"
              },
              {
                "path": "password-input",
                "title": "PasswordInput"
              },
              {
                "path": "picker",
                "title": "Picker"
              },
              {
                "path": "picker-group",
                "title": "PickerGroup"
              },
              {
                "path": "radio",
                "title": "Radio"
              },
              {
                "path": "rate",
                "title": "Rate"
              },
              {
                "path": "search",
                "title": "Search"
              },
              {
                "path": "slider",
                "title": "Slider"
              },
              {
                "path": "signature",
                "title": "Signature"
              },
              {
                "path": "stepper",
                "title": "Stepper"
              },
              {
                "path": "switch",
                "title": "Switch"
              },
              {
                "path": "time-picker",
                "title": "TimePicker"
              },
              {
                "path": "uploader",
                "title": "Uploader"
              }
            ]
          },
          {
            "title": "Action Components",
            "items": [
              {
                "path": "action-sheet",
                "title": "ActionSheet"
              },
              {
                "path": "barrage",
                "title": "Barrage"
              },
              {
                "path": "dialog",
                "title": "Dialog"
              },
              {
                "path": "dropdown-menu",
                "title": "DropdownMenu"
              },
              {
                "path": "floating-panel",
                "title": "FloatingPanel"
              },
              {
                "path": "floating-bubble",
                "title": "FloatingBubble"
              },
              {
                "path": "loading",
                "title": "Loading"
              },
              {
                "path": "notify",
                "title": "Notify"
              },
              {
                "path": "overlay",
                "title": "Overlay"
              },
              {
                "path": "pull-refresh",
                "title": "PullRefresh"
              },
              {
                "path": "share-sheet",
                "title": "ShareSheet"
              },
              {
                "path": "swipe-cell",
                "title": "SwipeCell"
              }
            ]
          },
          {
            "title": "Display Components",
            "items": [
              {
                "path": "badge",
                "title": "Badge"
              },
              {
                "path": "circle",
                "title": "Circle"
              },
              {
                "path": "collapse",
                "title": "Collapse"
              },
              {
                "path": "count-down",
                "title": "CountDown"
              },
              {
                "path": "divider",
                "title": "Divider"
              },
              {
                "path": "empty",
                "title": "Empty"
              },
              {
                "path": "highlight",
                "title": "Highlight"
              },
              {
                "path": "image-preview",
                "title": "ImagePreview"
              },
              {
                "path": "lazyload",
                "title": "Lazyload"
              },
              {
                "path": "list",
                "title": "List"
              },
              {
                "path": "notice-bar",
                "title": "NoticeBar"
              },
              {
                "path": "popover",
                "title": "Popover"
              },
              {
                "path": "progress",
                "title": "Progress"
              },
              {
                "path": "rolling-text",
                "title": "RollingText"
              },
              {
                "path": "skeleton",
                "title": "Skeleton"
              },
              {
                "path": "steps",
                "title": "Steps"
              },
              {
                "path": "sticky",
                "title": "Sticky"
              },
              {
                "path": "swipe",
                "title": "Swipe"
              },
              {
                "path": "tag",
                "title": "Tag"
              },
              {
                "path": "text-ellipsis",
                "title": "TextEllipsis"
              },
              {
                "path": "watermark",
                "title": "Watermark"
              }
            ]
          },
          {
            "title": "Navigation Components",
            "items": [
              {
                "path": "action-bar",
                "title": "ActionBar"
              },
              {
                "path": "back-top",
                "title": "BackTop"
              },
              {
                "path": "grid",
                "title": "Grid"
              },
              {
                "path": "index-bar",
                "title": "IndexBar"
              },
              {
                "path": "nav-bar",
                "title": "NavBar"
              },
              {
                "path": "pagination",
                "title": "Pagination"
              },
              {
                "path": "sidebar",
                "title": "Sidebar"
              },
              {
                "path": "tab",
                "title": "Tab"
              },
              {
                "path": "tabbar",
                "title": "Tabbar"
              },
              {
                "path": "tree-select",
                "title": "TreeSelect"
              }
            ]
          },
          {
            "title": "Business Components",
            "items": [
              {
                "path": "address-edit",
                "title": "AddressEdit"
              },
              {
                "path": "address-list",
                "title": "AddressList"
              },
              {
                "path": "area",
                "title": "Area"
              },
              {
                "path": "card",
                "title": "Card"
              },
              {
                "path": "contact-card",
                "title": "ContactCard"
              },
              {
                "path": "contact-edit",
                "title": "ContactEdit"
              },
              {
                "path": "contact-list",
                "title": "ContactList"
              },
              {
                "path": "coupon-list",
                "title": "Coupon"
              },
              {
                "path": "submit-bar",
                "title": "SubmitBar"
              }
            ]
          }
        ]
      }
    }
  }
}
