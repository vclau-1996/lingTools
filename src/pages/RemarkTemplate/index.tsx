/** 备注模板 */
import { memo, useState, useMemo } from "react";
import { Select } from "antd";
import { monthOptions, fontOptions, monthMap, fontMap } from "./dataSource";

const RemarkTemplate = () => {
  const [month, setMonth] = useState(1);
  const [font, setFont] = useState(1);

  /** 素材名 */
  const materialName = useMemo(() => monthMap.get(month)?.name ?? "", [month]);

  /** 字体 */
  const fontName = useMemo(() => fontMap.get(font) ?? "", [font]);

  /** 字体颜色 */
  const fontColor = useMemo(() => monthMap.get(month)?.color ?? "", [month]);

  return (
    <div className="text-start">
      <div className="mb-6">
        月份：
        <Select
          options={monthOptions}
          value={month}
          className="w-[150px]"
          onChange={(value) => {
            setMonth(value);
          }}
        ></Select>
      </div>
      <div className="mb-6">
        字体：
        <Select
          className="w-[150px]"
          options={fontOptions}
          defaultValue={1}
          onChange={(value) => {
            setFont(value);
          }}
        ></Select>
      </div>
      <div>
        素材名：{materialName} 字体：{fontName} 字体颜色：{fontColor}
      </div>
    </div>
  );
};

export default memo(RemarkTemplate);
