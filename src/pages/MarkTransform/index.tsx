/**
 * 特殊符号转化
 * 规则：
 * 1. 默认将';'、','、'\n'转换为'|'
 * 2. 转换后去除所有空格
 */

import { Input, message } from "antd";
import copy from "copy-to-clipboard";
import { memo, useCallback, useMemo, useState } from "react";

const MARK_REG = /;|,|[\r\n]| +/g;
const TARGET_MARK = "-";

const MarkTransform = () => {
  const [value, setValue] = useState("");

  /** 根据正则对文本进行格式化 */
  const formateValue = useMemo(() => {
    if (!value) return "";
    const result = value.replace(MARK_REG, TARGET_MARK).replace(/-+/g, "-");

    return result;
  }, [value]);

  /** 一键复制备注 */
  const copyRemark = useCallback(() => {
    const text = formateValue;
    if (copy(text, { format: "text/plain" })) {
      message.success("复制成功");
    } else {
      message.error("复制失败");
    }
  }, [formateValue]);

  return (
    <div className="text-start">
      <div className="mb-6 flex items-start">
        文本输入：
        <Input.TextArea
          className="w-[400px]"
          rows={6}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      <div>格式化后的文本：{formateValue}</div>
      <div className="text-blue-500 cursor-pointer mt-2" onClick={copyRemark}>
        一键复制
      </div>
    </div>
  );
};

export default memo(MarkTransform);
