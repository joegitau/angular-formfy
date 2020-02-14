import { AbstractControl } from '@angular/forms';

export function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const mainEmail = c.get('email');
  const confirmEmail = c.get('confirmEmail');

  // this conditions makes sure that validation is skipped as our function returns to the form group rather than the individual field
  if(mainEmail.pristine || confirmEmail.pristine) {
    return null;
  }

  if(mainEmail.value === confirmEmail.value) {
    return null;
  }
  return {'match': true};
}
