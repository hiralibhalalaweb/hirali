{
	let i=1,n = prompt("enter n:"),j=1;
	while(i<=n)
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
        i++;
	}
}