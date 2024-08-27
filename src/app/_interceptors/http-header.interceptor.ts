import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const httpHeaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const modifiedReq = req.clone({
        setHeaders: {
            'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        },
        setParams: {
            key: 'e40e743af2c94b0c916a8aa618fb4473'
        }
    });
    return next(modifiedReq);
};
