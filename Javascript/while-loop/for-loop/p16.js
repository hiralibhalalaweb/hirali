{
	let i,n = prompt("enter n:"),j=1;
	for(i=1;i<=n;i++)
	{
		if(i%2==0)
		{
			j=i*i;
			console.log(j);
		}
		else
		{
			console.log(i);
		}
	}
}