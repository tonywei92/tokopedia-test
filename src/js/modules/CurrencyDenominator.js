"use strict";
export default class {
    constructor(availablePartitions = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50]) {
        this.availablePartitions = availablePartitions;
    }

    get(money) {
        // Validate the 'money' value is number before denominate
        if (this.isNumber(money)) {
            return this.denominate(parseFloat(money));
        }
        else{
            // throw exception if value of 'money' is not a number
            throw money + " is not a number!";
        }
    }

    // function for denominate
    denominate(money) {
        let moneyLeft = money;
        //initialize result object
        let denominations = {
            values :{},
            money: money,
            moneyleft: 0
        };

        //start calculating
        this.availablePartitions.map(function (value) {
                if (value > moneyLeft || moneyLeft===0) {
                    denominations['values'][value]=0;
                }
                else {
                    //get remaining of money after mod
                    let max = moneyLeft % value; //
                    let val = moneyLeft - max;
                    moneyLeft = moneyLeft - val;
                    //get how many the money partititon used
                    val = val/value;
                    denominations['values'][value]= val;
                }
                return value;
            }
        );
        //get money left
        denominations['moneyleft'] = moneyLeft;
        return denominations;
    }

    //is it number?
    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

}