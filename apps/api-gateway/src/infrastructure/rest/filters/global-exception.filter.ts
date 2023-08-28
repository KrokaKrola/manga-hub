import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter<Error> {
    private readonly redirectRegexp = new RegExp('/redirect?\\S+');

    // eslint-disable-next-line
    catch(exception: any, host: ArgumentsHost) {
        if (typeof exception === 'string') {
            return this.handleStringException(exception, host);
        }

        if (exception instanceof HttpException) {
            return this.handleGatewayException(exception, host);
        }

        if (exception?.error && exception?.error?.isRpc === true) {
            return this.handleRpcException(exception, host);
        }

        const status = exception?.status
            ? exception?.status
            : HttpStatus.INTERNAL_SERVER_ERROR;

        return this.handleGatewayException(
            new HttpException(exception.response, status),
            host
        );
    }

    // eslint-disable-next-line
    private handleGatewayException(
        exception: HttpException,
        host: ArgumentsHost
    ) {
        console.log(exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode =
            typeof exception.getStatus() === 'number'
                ? exception.getStatus()
                : HttpStatus.BAD_REQUEST;

        if (statusCode !== HttpStatus.UNPROCESSABLE_ENTITY)
            return response.status(statusCode).json({
                service: 'api-gateway',
                message: exception.message,
                timestamp: new Date().toISOString(),
                path: request.url.replace(this.redirectRegexp, ''),
            });

        // eslint-disable-next-line
        const exceptionResponse: any = exception.getResponse();

        return response.status(statusCode).json({
            service: 'api-gateway',
            message: exceptionResponse.message,
            timestamp: new Date().toISOString(),
            path: request.url.replace(this.redirectRegexp, ''),
        });
    }

    // eslint-disable-next-line
    private handleStringException(exception: String, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

        return response.status(statusCode).json({
            service: 'api-gateway',
            message: exception,
            timestamp: new Date().toISOString(),
            path: request.url.replace(this.redirectRegexp, ''),
        });
    }

    // eslint-disable-next-line
    private handleRpcException(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception?.error?.status ?? HttpStatus.BAD_REQUEST;

        return response.status(statusCode).json({
            service: exception?.error?.service,
            message: exception?.message ?? exception?.error?.message,
            timestamp: new Date().toISOString(),
            path: request.url.replace(this.redirectRegexp, ''),
        });
    }
}
