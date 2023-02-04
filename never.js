function apiError(msg, code) {
    throw { message: MessageChannel, apiCode: code };
}
console.log(apiError("server side error", 500));
