"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        var _this = this;
        this.fileName = fileName;
        this.data = [];
        this.read = function () {
            _this.data = (0, fs_1.readFileSync)(_this.fileName, 'utf-8')
                .split('\n')
                .map(function (item) { return item.split(','); })
                .map(_this.mapRow);
        };
    }
    return CsvFileReader;
}());
exports.default = CsvFileReader;
