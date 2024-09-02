import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";


export const httpLoggingInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn):Observable<HttpEvent<any>>=>{
    const startTime = new Date().getTime();
    return next(req).pipe(
        map(event=>{
            if(event instanceof HttpResponse){
                const endTime = new Date().getTime();
                const difference = endTime - startTime;
                console.log(event.url + ' Took ' + difference + ' miliseconds')
                return event
            }
            return event
        })
    )
}