// export class Customer {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public email: string,
//     public sendNewsletter = false,
//     public addressType = "home",
//     public address?: string,
//     public address2?: string,
//     public city?: string,
//     public postalCode?: string
//   ) {}
// }

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  phone: string;
  notification: boolean;
  sendNewsletter: false;
  rating: number;
  addressType?: string;
  address?: string;
  address2?: string;
  city?: string;
  postalCode?: string;
}
