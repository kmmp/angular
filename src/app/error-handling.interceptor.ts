import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// tslint:disable-next-line:max-line-length
import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpHeaderResponse, HttpProgressEvent, HttpSentEvent, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) { }
    // tslint:disable-next-line:max-line-length
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(error => {
            if (error instanceof HttpErrorResponse) {
                this.messageService.error(`Błąd:${error.message}`);
            }
            return Observable.throw(error);
        });
    }
}
