import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let _Router = inject(Router);
  if (localStorage.getItem('etoken') != null) {
    return true;
  } else {
    _Router.navigate(['/login']);
    return false;
  }
};
