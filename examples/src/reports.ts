/**
 * Referenced the complain reason list on Facebook
 * */

import { alias, def } from './api-stub';

export let ReasonCodeType = `
  | 'Nudity or pornography'
  | 'Violence'
  | 'Harassment'
  | 'Suicide or self-harm'
  | 'False news'
  | 'Spam'
  | 'Unauthorized sales'
  | 'Hate speech'
  | 'Terrorism'
  | 'Copyright infringement'
  | 'Other'
`;
const { type, typeArray } = alias({
  ReasonCodeType,
});
export let ReasonType = `{
  Code: ${type(ReasonCodeType)}
  Eng: string
  Zh: string
  Remark?: string
}`;
alias({
  ReasonType,
});

export let reasons = [
  {
    "Code": "Nudity or pornography",
    "Eng": "Nudity or pornography",
    "Zh": "裸露或色情"
  },
  {
    "Code": "Violence",
    "Eng": "Violence",
    "Zh": "暴力"
  },
  {
    "Code": "Harassment",
    "Eng": "Harassment",
    "Zh": "騷擾"
  },
  {
    "Code": "Suicide or self-harm",
    "Eng": "Suicide or self-harm",
    "Zh": "自殺或自殘"
  },
  {
    "Code": "False news",
    "Eng": "False news",
    "Zh": "虛假新聞"
  },
  {
    "Code": "Spam",
    "Eng": "Spam",
    "Zh": "垃圾訊息"
  },
  {
    "Code": "Unauthorized sales",
    "Eng": "Unauthorized sales",
    "Zh": "未經授權銷售"
  },
  {
    "Code": "Hate speech",
    "Eng": "Hate speech",
    "Zh": "仇恨言論"
  },
  {
    "Code": "Terrorism",
    "Eng": "Terrorism",
    "Zh": "恐怖主義"
  },
  {
    "Code": "Copyright infringement",
    "Eng": "Copyright infringement",
    "Zh": "侵犯版權"
  },
  {
    "Code": "Other",
    "Eng": "Other (please specify)",
    "Zh": "其他 (請列明)"
  }
];
def({
  reasons: { type: typeArray(ReasonType), value: reasons },
});