export type HttpResponse<Any = any> = {
  statusCode: number;
  data: Any;
};

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
});
