/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

// carType: 1

var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

// parkingSystem = new ParkingSystem(1, 1, 0);
//  parkingSystem = {
//      big: 1,
//      medium: 1,
//      small: 0
//   }

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    // based on the car type, check if the corresponding lot is > 0 spaces
    // reduce that lot by 1, return true, if no spaces return false
// Switch case works but is code is repetetive for each case
    // switch (carType){
    //     case 1: 
    //         // big car
    //         if (this.big > 0){
    //             this.big = this.big - 1;
    //             return true
    //         }
    //         else {
    //             return false;
    //         }
    //     case 2: 
    //         // medium car
    //         if (this.medium > 0){
    //             this.medium = this.medium - 1;
    //             return true
    //         }
    //         else {
    //             return false;
    //         }
    //     case 3: 
    //         // small car
    //         if (this.small > 0){
    //             this.small = this.small - 1;
    //             return true
    //         }
    //         else {
    //             return false;
    //         }
    // }

    const carNumbers = {
        '1': 'big',
        '2':  'medium',
        '3': 'small'
    }
        const carKey = carType.toString(); // instantiated object keys have to be strings, not numbers
        // must use square brackets when indexing into object with a variable or string as the key
            if (this[carNumbers[carKey]] > 0){
                this[carNumbers[carKey]] = this[carNumbers[carKey]] - 1;
                return true
            }
            else {
                return false;
            }


};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
