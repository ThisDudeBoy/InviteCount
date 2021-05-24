const Discord = require("discord.js"),
moment = require("moment");


  

module.exports = {

    /**
     * @param {array} array The array to loop
     * @param {function} callback The callback function to call each time
     */
    async asyncForEach (array, callback) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    },
    

    /**
     * @param {string} message The message to format
     * @param {object} member The member who joined/has left
     * @param {object} inviter The user who invite the member
     * @param {object} invite The used invite informations
     * @param {string} locale The moment locale to use
     * @param {object} inviterData The mongoose document of the inviter
     * @returns {string} The formatted string
     */
    formatMessage(message, member, inviter, invite, locale, inviterData){
        moment.locale(locale);
        return message
        .replace(/{user}/g, member.toString())
        .replace(/{user.name}/g, member.user.username)
        .replace(/{user.tag}/g, member.user.tag)
        .replace(/{user.createdat}/g, moment(member.user.createdAt, "YYYYMMDD").fromNow())
        .replace(/{guild}/g, member.guild.name)
        .replace(/{guild.count}/g, member.guild.memberCount)
        .replace(/{inviter}/g, inviter.toString())
        .replace(/{inviter.tag}/g, inviter.tag)
        .replace(/{inviter.name}/g, inviter.username)
        .replace(/{inviter.invites}/g, inviterData.invites + inviterData.bonus - inviterData.fake - inviterData.leaves)
        .replace(/{invite.code}/g, invite.code)
        .replace(/{invite.uses}/g, invite.uses)
        .replace(/{invite.url}/g, invite.url);
    },

    

    /**
     * Generate a random ID (used for states)
     * @returns {string} The generated ID
     */
    
    randomID(){
        return Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    },

    lastXDays (numberOfDays, monthIndex) {
        const days = [];
        for (let i = 0; i < numberOfDays; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            let day = date.getDate();
            const month = monthIndex[date.getMonth()];
            if (day < 10) day = `0${day}`;
            days.push(`${day} ${month}`);
        }
        return days.reverse();
    },

    joinedXDays (numberOfDays, members) {
        // Final result
        const days = [];
        const isSameDay = (firstDate, secondDate) => {
            return `${firstDate.getDate()}|${firstDate.getMonth()}|${firstDate.getFullYear()}` ===
            `${secondDate.getDate()}|${secondDate.getMonth()}|${secondDate.getFullYear()}`;
        };
        // Pointer
        let lastDate = 0;
        // Sort the members by their joined date
        members = members.sort((a,b) => b.joinedTimestamp - a.joinedTimestamp);
        for (let i = 0; i < numberOfDays; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            // For each member in the server
            members.forEach((member) => {
                // Get the joinedDate
                const joinedDate = new Date(member.joinedTimestamp);
                // If the joinedDate is the same as the date which we are testing
                if (isSameDay(joinedDate, date)){
                    // If the last item in the array is not the same day counter
                    if (lastDate !== joinedDate.getDate()){
                        lastDate = joinedDate.getDate();
                        days.push(1);
                    } else {
                        let currentDay = days.pop();
                        days.push(++currentDay);
                    }
                }
            });
            // If nobody joins this day, set to 0
            if (days.length < i) days.push(0);
        }
        return days.reverse();
    },


     
     /**
     * Compare two arrays
     * @param {Array} value The first array
     * @param {Array} other The second array
     * @returns {Boolean} Whether the arrays are equals
     */

      isEqual(value, other){
        const type = Object.prototype.toString.call(value);
        if (type !== Object.prototype.toString.call(other)) return false;
        if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;
        const valueLen = type === "[object Array]" ? value.length : Object.keys(value).length;
        const otherLen = type === "[object Array]" ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;
        const compare = (item1, item2) => {
            const itemType = Object.prototype.toString.call(item1);
            if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
                if (!isEqual(item1, item2)) return false;
            }
            else {
                if (itemType !== Object.prototype.toString.call(item2)) return false;
                if (itemType === "[object Function]") {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }
            }
        };
        if (type === "[object Array]") {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }
        return true;
    }

}

