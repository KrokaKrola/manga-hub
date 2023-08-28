import { Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';
import { MainServiceName } from '../../../microservice';

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter<RpcException> {
    catch(e: RpcException): Observable<never> {
        const error = e.getError();
        const data = error instanceof Object ? { ...error } : error;

        return throwError(
            () =>
                new RpcException({
                    ...data,
                    service: MainServiceName,
                    isRpc: true,
                })
        );
    }
}
