import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {

    public static denominatorMap=[];
    private tolerance = .01;

    public unicodeMap = {
        "2": {
            "1":"\u00BD"
        },
        "3": {
            "1":"\u2153",
            "2":"\u2154"
        },
        "4": {
            "1":"\u00BC",
            "3":"\u00BE"
        },
        "5": {
            "1":"\u2155",
            "2":"\u2156",
            "3":"\u2157",
            "4":"\u2158"
        },
        "6": {
            "1":"\u2159",
            "5":"\u215A"
        },
        "7": {
            "1":"\u2150",
        },
        "8": {
            "1":"\u215B",
            "3":"\u215C",
            "5":"\u215D",
            "7":"\u215E"
        },
        "9": {
            "1":"\u2151"
        }
    }

  transform(text: any, maxDenominator=64): String {
    if (FractionPipe.denominatorMap.length < maxDenominator) {
            FractionPipe.createDenominatorMap(maxDenominator);
        }

        var v = text;
        if (typeof v !== "number") {
            v = Number(v);
        }

        if (isNaN(v)) {
            return text;
        }

        var decimalPortion = v%1;
        var integerPortion = Math.floor(v);
        for (var i=0;i<maxDenominator;i++) {
            for (var j=0;j<FractionPipe.denominatorMap[i].length;j++) {
                if (decimalPortion === FractionPipe.denominatorMap[i][j]) {
                    return this.formatResult(integerPortion, j+1,i+1);
                }
            }
        }

        for (var i=0;i<maxDenominator;i++) {
            for (var j=0;j<FractionPipe.denominatorMap[i].length;j++) {
                if (decimalPortion + this.tolerance > FractionPipe.denominatorMap[i][j] &&
                    decimalPortion - this.tolerance < FractionPipe.denominatorMap[i][j]) {
                    return this.formatResult(integerPortion, j+1,i+1);
                }
            }
        }

        return text;
    }

    static createDenominatorMap(maxDenominator:number) {
        while (FractionPipe.denominatorMap.length < maxDenominator) {
            var currentDenominator = FractionPipe.denominatorMap.length+1;
            var m = [];
            for (var i=1;i<= currentDenominator;i++) {
                m.push(i/currentDenominator);
            }
            FractionPipe.denominatorMap.push(m);
        }
    }

    formatResult(integerPortion, numerator, denominator) {

        if (this.unicodeMap[denominator.toString()] &&
            this.unicodeMap[denominator.toString()][numerator.toString()]) {

            return [
                integerPortion ? integerPortion:'',
                integerPortion ? ' ':'',
                this.unicodeMap[denominator.toString()][numerator.toString()]
            ].join('');
        }

        return [
            integerPortion ? integerPortion:'',
            integerPortion ? ' ':'',
            numerator,
            "/",
            denominator].join('');
  }

}
