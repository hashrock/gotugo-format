function parseLine(str) {
  let m;
  m = /(\d+)年(\d+)月(\d+)日/.exec(str);
  if (m) {
    return new Date(+m[1], +m[2] - 1, +m[3]);
  }
  m = /(\d+)月(\d+)日/.exec(str);
  if (m) {
    return new Date(new Date().getFullYear(), +m[1] - 1, +m[2]);
  }
  m = /(\d+)[／\/](\d+)/.exec(str);
  if (m) {
    return new Date(new Date().getFullYear(), +m[1] - 1, +m[2]);
  }
}

/**
 * ゼロパディング（2桁専用）
 * @param {number}} str
 */
function zp(str) {
  return ("00" + str).slice(-2);
}

/**
 * 日付一つを文字列化する
 * @param {Date} date
 */
function serialize(date) {
  //とりあえず年は出力してない
  const dayStr = "日月火水木金土"[date.getDay()];

  return `${zp(date.getMonth() + 1)}月${zp(date.getDate())}日（${dayStr}）`;
}

module.exports = {
  parseLine,
  serialize
};
