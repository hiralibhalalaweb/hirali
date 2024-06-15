{
	let tax,a = prompt();
	if(a<=2500)
	{
		tax=a*0;
		console.log("your tax is %d rs per income",tax);
	}
	else if(2500<a&& a<=5000)
	{
		tax=(a-2500)*0.1;
		console.log("your tax is %d rs per income",tax);
	}
	else if(5000<a&&a<=10000)
	{
		tax=250+(a-5000)*0.2;
		console.log("your tax is %d rs per income",tax);
	}
	else
	{
		tax=250+1000+(a-10000)*0.3;
		console.log("your tax is %d rs per income",tax);
	}	
}