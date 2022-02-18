"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (number) { return parseInt(number); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.default = dateStringToDate;
