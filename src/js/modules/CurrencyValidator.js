"use strict";
import XRegExp from 'xregexp';
export default class {
    /**
     * @param currencyFormat (string) set the currency format, default is Rp (case insensitive)
     */
    constructor(currencyFormat = 'rp') {
        //assign currency unit
        this.currencyFormat = currencyFormat;

        // Build regular expression object
        this.vRegExp = this.createRegExp();
    }

    validate(text) {
        // Trim unnecessary whitespace
        text = text.trim();

        if(!text){
            return {
                code: -1, // the text is empty
                value: null,
                message: 'Please enter numeric currency',
                suggestion: null // no suggestion
            }
        }
        //get match values
        let match = XRegExp.exec( text, this.vRegExp);

        // ** VALIDATION LOGIC START HERE **//

        // matchText is null, then no match at all, invalid and no correct suggestion
        if (!match) {
            return {
                code: 0, // no matches
                value: null,
                message: 'No matches',
                suggestion: null // no suggestion
            }
        }

        // check for 100% match, otherwise not valid
        // but a correct suggestion will be offered
        if (text.length === match[0].length) {
            return {
                code: 1, // successfully 100% match
                value: this.getNumberFromText(text), //raw value
                message: 'Success',
                suggestion: null // no correct suggestion is offered, because 100% match
            }
        }
        else {
            return {
                code: 2, // less than 100% match
                value: null,
                message: 'Invalid format',
                suggestion: this.suggestCorrection(text) // offer a 100% correct format
            }
        }
    }

    // Offer possible correct format
    suggestCorrection(text) {
        return 'Rp ' + this.getNumberFromText(text);
    }


    getNumberFromText(text){
        let match = XRegExp.exec(text, XRegExp('(?:Rp(?:\\s)?)?(?<decimal>(:?[0-9]*\\s?[0-9]+(?:\\,[0-9]{3,})?(?:\\.[0-9]{3})*))(?<comma>\\,[0-9]{1,2})?', 'ig'));
        if(!match){
            return '';
        }

        if(match.length > 1){
            let result =  match.decimal.match(/[0-9]+/g);

            result = result.join("");
            result = parseFloat(result);
            if(match.comma ){
                result += match.comma.replace(',','.');
            }
            return result;
        }

        return '';

    }

    createRegExp() {
        return XRegExp('(?:' + this.currencyFormat + '\\s?)?(?<decimal>\\d+(?:\\.\\d{3})*){1}(?<comma>,[0-9]{1,2})?', 'ig');
    }
}