/** 备注模板 */
import { memo, useState, useMemo, useCallback } from "react";
import { Select, message } from "antd";
import copy from "copy-to-clipboard";
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

  /** 一键复制备注 */
  const copyRemark = useCallback(() => {
    const text = `素材名：${materialName}\n字体：${fontName}\n字体颜色：${fontColor}`;
    if (copy(text, { format: "text/plain" })) {
      message.success("复制成功");
    } else {
      message.error("复制失败");
    }
  }, [materialName, fontName, fontColor]);

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
        素材名：{materialName} <br />
        字体：{fontName} <br />
        字体颜色：{fontColor}
      </div>
      <div className="text-blue-500 cursor-pointer mt-2" onClick={copyRemark}>
        一键复制
      </div>
    </div>
  );
};

export default memo(RemarkTemplate);
