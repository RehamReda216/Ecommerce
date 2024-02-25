import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class headerInterceptor implements HttpInterceptor{
  constructor(){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token : any = localStorage.getItem('userToken')

    let updatedReq= request.clone({
      headers: request.headers.set ('token',token)
    })

    return next.handle(updatedReq);
  }

};
