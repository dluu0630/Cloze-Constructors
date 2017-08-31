var ClozeCard = function(text, cloze) {
    if(this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
        this.partial = text;
        this.fullText = text;
        this.clozeCheck = function() {            
            var containsCloze = text.includes(cloze);
    
            if(containsCloze) {
                this.partial = this.text.replace(cloze, "...");
            } 
             else {
                throw "Error, cloze deletion does not appear";
            };
        
            }
            this.clozeCheck();
      } else {
        return new ClozeCard(text, cloze);
      } 
}

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText); 

module.exports = ClozeCard;