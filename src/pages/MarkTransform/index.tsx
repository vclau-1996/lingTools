/**
 * 特殊符号转化
 * 规则：
 * 1. 默认将';'、','、'\r\n'转换为'|'
 * 2. 转换后去除所有空格
 */

import { Input, message } from "antd";
import copy from "copy-to-clipboard";
import { memo, useCallback, useMemo, useState } from "react";

/** 默认正则匹配规则 匹配';'、','、'\r\n'、' ' */
const MARK_REG = ";|,|[\r\n]| +";
/** 默认转换的目标符号 */
const TARGET_MARK = "|";

const MarkTransform = () => {
  const [value, setValue] = useState("");
  const [specialMark, setSpecialMark] = useState("");

  /** 动态正则规则，用户可自行配置特殊符号 */
  const regExp = useMemo(() => {
    try {
      const result = new RegExp(
        MARK_REG + (specialMark ? `|${specialMark}` : ""),
        "g"
      );
      return result;
    } catch (e) {
      message.error("该特殊符号不可转换，请联系管理员");
      return new RegExp(MARK_REG, "g");
    }
  }, [specialMark]);

  /** 根据正则对文本进行格式化 */
  const formateValue = useMemo(() => {
    if (!value) return "";
    const result = value.replace(regExp, TARGET_MARK).replace(/-+/g, "-");

    return result;
  }, [value, regExp]);

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
      <div className="mb-6 flex items-center">
        自定义符号：
        <Input
          className="w-[50px]"
          maxLength={1}
          onChange={(e) => {
            setSpecialMark(e.target.value);
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
