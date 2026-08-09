export const SITE_NAME = "Khai Guitar Lessons";
export const CALENDLY_URL = "https://calendly.com/jackkhai06/30min";
export const INSTAGRAM_URL = "https://www.instagram.com/jackkhaii/";
export const WHATSAPP_NUMBER = "601116318144";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const TRIAL_MESSAGE =
  "Hi! I visited your site and would like to claim a free trial lesson [Online / In-Person] for [me / my child / someone else].";

export const GIG_MESSAGE =
  "Hi! Are you available to gig? Here are my event details:\nDate: \nEvent type: \nLocation: ";

export const GEAR_MESSAGE =
  "Hi! I don't have a guitar yet and would like to claim a free trial lesson, plus some advice on which guitar or ukulele to buy for [me / my child].";

export const TRIAL_MESSAGE_ZH =
  "你好！我在网站上看到了你的信息，想预约一堂免费试听课【线上 / 面授】，对象是【我自己 / 我的孩子 / 其他人】。";

export const GIG_MESSAGE_ZH =
  "你好！请问你有空表演吗？以下是我的活动详情：\n日期：\n活动类型：\n地点：";

export const GEAR_MESSAGE_ZH =
  "你好！我还没有吉他，想预约一堂免费试听课，并请你推荐适合【我自己 / 我的孩子】购买的吉他或尤克里里。";
