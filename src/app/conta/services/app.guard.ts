import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{// guarda de autenticação

user = {admin: true, logger: false};

  canLoad(): boolean {
      return this.user.admin;
  }

  canActivate(): boolean {
    return this.user.logger;
}
}
