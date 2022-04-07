/* eslint-disable @typescript-eslint/ban-types */
import { Response } from 'express';

enum ResponseStatus {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

abstract class ApiResponse {
  constructor(
    protected status_code: ResponseStatus,
    protected message: string,
    protected data?: object | undefined | null,
  ) { }

  protected prepare<T extends ApiResponse>(res: Response, response: T): Response {
    return res.status(this.status_code).json(ApiResponse.sanitize(response));
  }

  public send(res: Response): Response {
    return this.prepare<ApiResponse>(res, this);
  }

  private static sanitize<T extends ApiResponse>(response: T): T {
    const clone: T = {} as T;
    Object.assign(clone, response);
    // @ts-ignore
    for (const i in clone) if (typeof clone[i] === 'undefined') delete clone[i];
    return clone;
  }
}

export class HResponse<T> extends ApiResponse {
  constructor(status_code: number, message: string, data: any) {
    super(
      (status_code = status_code === 204 ? 200 : status_code),
      (message = data
        ? data.message || data.error || data.errorMessage
          ? data.message || data.error || data.errorMessage
          : message
        : message
          ? message
          : null),
      (data = data),
    );
  }

  send(res: Response): Response {
    return super.prepare<HResponse<T>>(res, this);
  }
}

export class NotFoundResponse extends ApiResponse {
  private url: string | undefined;

  constructor(message = 'Not Found') {
    super(ResponseStatus.NOT_FOUND, message);
  }

  send(res: Response): Response {
    this.url = res.req?.originalUrl;
    this.data = null;
    return super.prepare<NotFoundResponse>(res, this);
  }
}

export class BadRequestResponse extends ApiResponse {
  constructor(message = 'Bad Parameters') {
    super(ResponseStatus.BAD_REQUEST, message);
  }
}

export class InternalErrorResponse extends ApiResponse {
  constructor(message = 'Internal Error') {
    super(ResponseStatus.INTERNAL_ERROR, message);
  }
}

export class AuthFailureResponse extends ApiResponse {
  constructor(message = 'Authentication Failure') {
    super(ResponseStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenResponse extends ApiResponse {
  constructor(message = 'Forbidden') {
    super(ResponseStatus.FORBIDDEN, message);
  }
}
