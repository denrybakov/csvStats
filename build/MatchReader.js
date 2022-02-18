"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __importDefault(require("./Util"));
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        var _this = this;
        this.reader = reader;
        this.matches = [];
        this.load = function () {
            _this.reader.read();
            _this.matches = _this.reader.data.map(function (row) { return [
                (0, Util_1.default)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ]; });
        };
    }
    MatchReader.fromCsv = function (fileName) {
        return new MatchReader(new CsvFileReader_1.default(fileName));
    };
    return MatchReader;
}());
exports.default = MatchReader;
