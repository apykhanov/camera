export enum AppRoute {
  ProductPage = '/camera',
  Root = '/',
  NotFound = '/not-found',
}

export enum APIRoute {
  Cameras = '/cameras',
  Review = '/reviews',
  Order= '/orders',
}

export enum NameSpace {
  Cameras = 'CAMERAS',
  Reviews = 'REVIEWS',
  Order = 'ORDER',
}

export const DateFormat = {
  AttributeFormat: 'YYYY-MM-DD',
  ReviewDateFormat: 'DD MMMM'
};
