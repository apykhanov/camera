export type Goods = {
      'id': number;
      'name': string;
      'vendorCode': string;
      'type': string;
      'category': string;
      'description': string;
      'level': string;
      'price': number;
      'rating': number;
      'reviewCount': number;
      'previewImg': string;
      'previewImg2x': string;
      'previewImgWebp': string;
      'previewImgWebp2x': string;
}

export type Order = {
  'camerasIds': number[];
  'coupon': string | null;
  'tel': string;
}

export type Promo = {
  'id': number;
  'name': string;
  'previewImg': string;
  'previewImg2x': string;
  'previewImgWebp': string;
  'previewImgWebp2x': string;
}
