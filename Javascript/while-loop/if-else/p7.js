{
	let ch = prompt();
	if(65<=ch&&ch<=90)
	{
		console.log(String.fromCharCode(ch+32));
	}
	else
	{
		console.log(String.fromCharCode(ch-32));
	}
}