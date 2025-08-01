import { SellerContact } from './sellerContact';

import { SellerSocialLink } from './sellerSocialLink';

export interface Seller {
  name: string;
  contacts: SellerContact;
  workingHours: Record<string, string>;
  socialLinks: SellerSocialLink[];
  extraFields: Record<string, string>;
}
