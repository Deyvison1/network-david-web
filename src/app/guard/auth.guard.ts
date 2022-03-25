import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { NotificationService } from '../services/notification.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: RouterService,
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService
  ) {}

  canActivate(): boolean {
    if (this.localStorageService.getItem('logado') !== null) return true;

    this.router.redirectionTo('home');
    this.notificationService.notificationSimple('Sessão não esta ativa');
    return false;
  }
}
