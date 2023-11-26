import { TabsProps } from "antd";
import RemarkTemplate from "../RemarkTemplate";
import MarkTransform from "../MarkTransform";

/** 工具标签 */
export const toolsTabs: TabsProps["items"] = [
  {
    key: "remarkTemplate",
    label: "备注模板",
    children: <RemarkTemplate />,
  },
  {
    key: "markTransform",
    label: "特殊符号转化",
    children: <MarkTransform />,
  },
];
