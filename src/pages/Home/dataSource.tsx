import { TabsProps } from "antd";
import RemarkTemplate from "../RemarkTemplate";

/** 工具标签 */
export const toolsTabs: TabsProps["items"] = [
  {
    key: "remarkTemplate",
    label: "备注模板",
    children: <RemarkTemplate />,
  },
];
