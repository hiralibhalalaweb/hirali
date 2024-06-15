{
	let i;
	for(i=0;i<=24;i=i+2)
	{
		if(i%4==0)
		{
			console.log(String.fromCharCode(i+65));
		}
		else
		{
			console.log(String.fromCharCode(i+97));
		}
		
	}
}