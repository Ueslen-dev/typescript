"use strict";
function logDetails(uid, item) {
    console.log("retornando " + uid + " e o tipo de item: " + item);
}
function logInfo(uid, user) {
    console.log("retornando " + uid + " do usu\u00E1rio: " + user);
}
function renderPlatform(platform) {
    return platform;
}
logDetails(356, 'Cerveja');
logDetails('356', 'Cerveja');
logInfo(896, 'Cleiton');
logInfo('896', 'Cleiton');
renderPlatform('Linux');
