export default class BaseResponse<T> {
  constructor(message: string, data?: T, status?: number) {}

  static successResponse<T>(message: string, data?: T) {
    const returnData = {
      status: 200,
      message: message,
      data: data,
    };
    return returnData;
  }

  static errorResponse<T>(status: number, message: string, data?: T) {
    const returnData = {
      status: status,
      message: message,
      data: data,
    };
    return returnData;
  }
}
