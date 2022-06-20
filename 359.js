
var Logger = function() {
    this.myMap = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.myMap.has(message)){
        let nextTime = this.myMap.get(message);
        if(timestamp >= nextTime) {
            this.myMap.set(message, timestamp + 10);
            return true;
        }
        else return false;
    }
    this.myMap.set(message, timestamp + 10);
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */