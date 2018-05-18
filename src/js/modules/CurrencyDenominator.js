export default class {
    constructor(availablePartitions = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50], unit='Rp') {
        this.availablePartitions = availablePartitions;
        this.unit = unit;
    }

    get(money) {
        // Validate before process anything
        if (this.isNumber(money)) {
            return this.slice(money)
        }
        else{
            return false;
        }
    }

    slice(money) {
        let moneyLeft = money;
        //initialize result
        let denominations = {
            values :{},
            unit: this.unit,
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
        denominations['moneyleft'] = moneyLeft.toFixed(2);
        return denominations;
    }

    //is it number?
    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

}