function apiError(msg,code):never
{
  throw {message:MessageChannel,apiCode:code}
}
console.log(apiError("server side error",500))