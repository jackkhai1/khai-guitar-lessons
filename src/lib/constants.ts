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
