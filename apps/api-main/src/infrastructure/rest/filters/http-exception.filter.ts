import {
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { MainServiceName } from '../../../microservice';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException): Observable<never> {
        const statusCode = exception.getStatus();

        if (statusCode !== HttpStatus.UNPROCESSABLE_ENTITY) {
            return throwError(
                () =>
                    new HttpException(
                        {
                            service: MainServiceName,
                            message: exception.message,
                            timestamp: new Date().toISOString(),
                        },
                        statusCode
                    )
            );
        }
        // eslint-disable-next-line
        const exceptionResponse: any = exception.getResponse();

        return throwError(
            () =>
                new HttpException(
                    {
                        service: MainServiceName,
                        message: exceptionResponse.message,
                        timestamp: new Date().toISOString(),
                    },
                    statusCode
                )
        );
    }
}
