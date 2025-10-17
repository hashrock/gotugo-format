export function parseLine(str: string): Date | undefined {
  let m: RegExpExecArray | null;
  
  // Pattern: 2019年11月17日
  m = /(\d+)年(\d+)月(\d+)日/.exec(str);
  if (m) {
    return new Date(+m[1], +m[2] - 1, +m[3]);
  }
  
  // Pattern: 11月17日
  m = /(\d+)月(\d+)日/.exec(str);
  if (m) {
    return new Date(new Date().getFullYear(), +m[1] - 1, +m[2]);
  }
  
  // Pattern: 11/17 or 11／17
  m = /(\d+)[／\/](\d+)/.exec(str);
  if (m) {
    return new Date(new Date().getFullYear(), +m[1] - 1, +m[2]);
  }
  
  return undefined;
}

/**
 * ゼロパディング（2桁専用）
 * @param num - Number to pad
 */
function zp(num: number): string {
  return ("00" + num).slice(-2);
}

/**
 * 日付一つを文字列化する
 * @param date - Date object to serialize
 */
export function serialize(date: Date): string {
  // とりあえず年は出力してない
  const dayStr = "日月火水木金土"[date.getDay()];
  
  return `${zp(date.getMonth() + 1)}月${zp(date.getDate())}日（${dayStr}）`;
}
