import { AbstractControl } from '@angular/forms';

export function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const mainEmail = c.get('email');
  const confirmEmail = c.get('confirmEmail');

  if(mainEmail.value === confirmEmail.value) {
    return null
  }
  return {'match': true};
}
