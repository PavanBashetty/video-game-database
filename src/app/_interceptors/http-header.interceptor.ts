import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

export const httpHeaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    // const authToken = environment.apiKey;
    const modifiedReq = req.clone({
        setHeaders: {
            'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            // Authorization: `Bearer ${authToken}`
        },
        setParams: {
            key: 'e40e743af2c94b0c916a8aa618fb4473'
        }
    });
    return next(modifiedReq);
};


