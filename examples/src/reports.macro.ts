function extract(s: string): string[] {
  return s
    .split('\n')
    .map(s => s.trim())
    .filter(s => s);
}

let engList = extract(`
Nudity or pornography
Violence
Harassment
Suicide or self-harm
False news
Spam
Unauthorized sales
Hate speech
Terrorism
Copyright infringement
Other (please specify)
`);
let zhList = extract(`
裸露或色情
暴力
騷擾
自殺或自殘
虛假新聞
垃圾訊息
未經授權銷售
仇恨言論
恐怖主義
侵犯版權
其他 (請列明)
`);
let codes = engList.map(reason => reason.split('(')[0].trim());
type Reason = {
  Code: string;
  Eng: string;
  Zh: string;
};
let reasons: Reason[] = codes.map((code, i) => ({
  Code: code,
  Eng: engList[i],
  Zh: zhList[i],
}));
`
/**
 * Referenced the complain reason list on Facebook
 * */

export type ReasonCodeType =${reasons.map(x => `\n  | '${x.Code}'`).join('')}
;

export type ReasonType = {
  Code: ReasonCodeType
  Eng: string
  Zh: string
  Remark?: string
};

export let reasons = ${JSON.stringify(reasons, null, 2)};
`.trim();
