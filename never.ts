function apiError(msg:any,code:any) :never
{
   throw {message:msg,apiCode:code}
}

console.log(apiError("Not Found",404));