import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const httpErrorsInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    return next(req).pipe(
        catchError((error:HttpErrorResponse)=>{
            let errorMessage = '';
            if(error.error instanceof ErrorEvent){
                errorMessage = `Client-side error: ${error.error.message}`;
            }else{
                errorMessage = `Client server-side error: ${error.status} ${error.message}`
            }
            return throwError(()=> new Error(errorMessage))
        })
    );
};
