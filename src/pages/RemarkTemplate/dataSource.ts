/** 月份选项 */
export const monthOptions = [
  {
    value: 1,
    label: "1月（Jan）",
  },
  {
    value: 2,
    label: "2月（Feb）",
  },
  {
    value: 3,
    label: "3月（Mar）",
  },
  {
    value: 4,
    label: "4月（Apr）",
  },
  {
    value: 5,
    label: "5月（May）",
  },
  {
    value: 6,
    label: "6月（Jun）",
  },
  {
    value: 7,
    label: "7月（Jul）",
  },
  {
    value: 8,
    label: "8月（Aug）",
  },
  {
    value: 9,
    label: "9月（Sep）",
  },
  {
    value: 10,
    label: "10月（Oct）",
  },
  {
    value: 11,
    label: "11月（Nov）",
  },
  {
    value: 12,
    label: "12月（Dec）",
  },
];

/** 字体选项 */
export const fontOptions = [
  { value: 1, label: "Font1" },
  { value: 2, label: "Font2" },
  { value: 3, label: "Font3" },
  { value: 4, label: "Font4" },
  { value: 5, label: "Font5" },
  { value: 6, label: "Font6" },
  { value: 7, label: "Font7" },
  { value: 8, label: "Font8" },
  { value: 9, label: "Font9" },
];

/** 月份Map */
export const monthMap = new Map<number, { name: string; color: string }>([
  [1, { name: "Jan.png", color: "dba7a2" }],
  [2, { name: "Feb.png", color: "5d25b1" }],
  [3, { name: "Mar.png", color: "d5bc3c" }],
  [4, { name: "Apr.png", color: "ecede9" }],
  [5, { name: "May.png", color: "e2e4d2" }],
  [6, { name: "Jun.png", color: "d8d6cf" }],
  [7, { name: "Jul.png", color: "c73d00" }],
  [8, { name: "Aug.png", color: "d49146" }],
  [9, { name: "Sep.png", color: "d8c5d3" }],
  [10, { name: "Oct.png", color: "8f0006" }],
  [11, { name: "Nov.png", color: "ebe8e2" }],
  [12, { name: "Dec.png", color: "dad3c9" }],
]);

/** 字体Map */
export const fontMap = new Map<number, string>([
  [1, "AurelliaScript"],
  [2, "BabyLovely"],
  [3, "Belinday"],
  [4, "AlexBrush-Regular"],
  [5, "Bacalisties"],
  [6, "AbigailRegular"],
  [7, "AutumnChant"],
  [8, "DavisonSpencerian"],
  [9, "FreebooterScript"],
]);
