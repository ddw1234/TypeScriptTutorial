"use strict";
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError("Not Found", 404));
