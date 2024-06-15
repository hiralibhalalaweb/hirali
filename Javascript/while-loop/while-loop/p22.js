{
	let i=0;
	while(i<=24)
	{
		if(i%4==0)
		{
			console.log(String.fromCharCode(i+65));
		}
		else
		{
			console.log(String.fromCharCode(i+97));
		}
		i=i+2
	}
}