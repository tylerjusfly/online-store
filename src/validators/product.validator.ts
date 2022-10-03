import validator from 'validator';

export class ProductValidator {
  static imageWhiteList: string[] = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/AVIF',
  ];

  //   static validate(body, file: Express.Multer.File, toValidate: string[]) {
  //     const errors: string[] = [];
  //   }
}
