"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = __importDefault(require("../MatchResult"));
var WinsAnalyzis = /** @class */ (function () {
    function WinsAnalyzis(team) {
        var _this = this;
        this.team = team;
        this.run = function (matches) {
            var Draw = MatchResult_1.default.Draw, HomeWin = MatchResult_1.default.HomeWin, AwayWin = MatchResult_1.default.AwayWin;
            var wins = 0;
            for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                var key = matches_1[_i];
                if (key[1] === _this.team && key[5] === HomeWin) {
                    wins++;
                }
                else if (key[2] === _this.team && key[5] === AwayWin) {
                    wins++;
                }
            }
            return "Team " + _this.team + " won " + wins + " time";
        };
    }
    return WinsAnalyzis;
}());
exports.default = WinsAnalyzis;
