{
    let i,n = prompt("enter n:"),a=0,b=1,c;
    console.log(b);
	for(i=1;i<=n;i++)
	{
		c=a+b;
		console.log(c);
		a=b;
		b=c;
	}
}