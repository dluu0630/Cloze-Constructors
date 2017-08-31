var BasicCard = function(front, back) {
    
        if(this instanceof BasicCard) {
        this.front = front;
        this.back = back;
        }
        else {
            return new BasicCard(front, back);
        }
    }

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 
console.log(firstPresident.back); 

module.exports = BasicCard;