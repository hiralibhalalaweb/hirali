{
	let gross_salary,da,hra;
    let a = prompt();
	if(a<=5000)
	{
		da=(a*20)/100;
		hra=(a*8)/100;
		gross_salary=da+a+hra;
		console.log("gross_salary is %d",gross_salary);
	}
	else if(a<=10000)
	{
		da=(a*30)/100;
		hra=(a*12)/100;
		gross_salary=da+a+hra;
		console.log("gross_salary is %d",gross_salary);
	}
	else if(a<=15000)
	{
		da=(a*40)/100;
		hra=(a*15)/100;
		gross_salary=da+a+hra;
		console.log("gross_salary is %d",gross_salary);
	}
	else 
	{
		da=(a*50)/100;
		hra=(a*20)/100;
		gross_salary=da+a+hra;
		console.log("gross_salary is %d",gross_salary);
	}
}