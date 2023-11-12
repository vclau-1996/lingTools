/** 主页 */
import { memo } from "react";
import { Tabs } from "antd";
import { toolsTabs } from "./dataSource";

const Home = () => {
  return (
    <div className="w-[1200px] mx-auto pt-[100px]">
      <h1 className="text-4xl font-bold">麦子的工具箱</h1>

      <Tabs defaultActiveKey="remarkTemplate" items={toolsTabs} />
    </div>
  );
};

export default memo(Home);
