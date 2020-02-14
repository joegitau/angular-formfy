export class Customer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public sendNewsletter = false,
    public addressType = "home",
    public address?: string,
    public address2?: string,
    public city?: string,
    public postalCode?: string
  ) {}
}
