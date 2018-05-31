var phonePrice;
var accessoryPrice;
var spendingThreshold;
var taxRate = 1.08875;
var total = 0;

var bankAccount = prompt("How much money is in your bank account?")
var spendingThreshold = prompt("What is your spending threshold?")

if(spendingThreshold > 0 && bankAccount > 0 && spendingThreshold < bankAccount) {
	while (spendingThreshold > 0){
		phonePrice = prompt("How much is your phone? Press -1 to exit");
		if(phonePrice == -1){
			break;
		}
		else if((phonePrice * taxRate) < spendingThreshold){
			phonePrice *= taxRate;
			spendingThreshold -= phonePrice;
			total += phonePrice;
		}
		while (spendingThreshold > 0 && accessoryPrice != 1){
			accessoryPrice = prompt("How much is the accessory? Press -1 to exit.")
			if (accessoryPrice == -1){
				break;
			}
			else if((accessoryPrice * taxRate) < spendingThreshold){
				accessoryPrice *= taxRate;
				spendingThreshold -= accessoryPrice;
				total += accessoryPrice;
			}
		}
	}
	total = Math.round(total * 100) / 100;
	if (total > bankAccount){
		alert("You're broke bro...")
	}
	alert("Total Amount: $" + total);
}
else {
	alert("That's not possible bro, wtf you doing?");
}