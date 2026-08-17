export const SITE_NAME = "Khai Guitar Lessons";
export const CALENDLY_URL = "https://calendly.com/jackkhai06/30min";
export const INSTAGRAM_URL = "https://www.instagram.com/jackkhaii/";
export const WHATSAPP_NUMBER = "601116318144";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const TRIAL_MESSAGE =
  "Hi! I’d like to claim a free trial lesson.\n\n• Student: [Adult / Child]\n• Format: [In-Person / Online]\n• Day/Time preference: ";

export const GIG_MESSAGE =
  "Hi! Are you available to gig? Here are my event details:\nDate: \nEvent type: \nLocation: ";

export const GEAR_MESSAGE =
  "Hi! I don't have a guitar yet and would like to claim a free trial lesson, plus some advice on which guitar or ukulele to buy";

export const TRIAL_MESSAGE_ZH =
  "你好！我想预约一堂免费试听课。\n\n• 学生：【成人 / 孩童】\n• 形式：【面授 / 线上】\n• 偏好的日期/时间： ";

export const GIG_MESSAGE_ZH =
  "你好！请问你有空表演吗？以下是我的活动详情：\n日期：\n活动类型：\n地点：";

export const GEAR_MESSAGE_ZH =
  "你好！我还没有吉他，想预约一堂免费试听课，并想请你推荐适合购买的吉他或尤克里里。";
