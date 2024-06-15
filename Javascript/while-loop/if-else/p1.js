{
	let bill;
	let a = prompt();
	if(a<=100)
	{
		bill=50+a*0.6;
		console.log("your bill is %d rs per unit",bill);
	}
	else if( 100<a&&a<=300)
	{
		bill=50+60+(a-100)*0.8;
		console.log("your bill is %d rs per unit",bill);
	}
	else 
	{
		bill=50+60+160+(a-300)*0.9;
		console.log("your bill is %d rs per unit",bill);
	}


	if(bill>300)
	{
		bill=bill+(bill*0.15);
	    console.log("\n your bill is %d rs per unit with 15% bill",bill);
	}
}