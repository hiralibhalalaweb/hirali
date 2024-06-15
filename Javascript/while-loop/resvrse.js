{
    let i , n=123457 , reversedNumber = 0;
    while(n != 0) 
    {
        i = n % 10;
        reversedNumber = reversedNumber * 10 + i ;
        n=parseInt(n/10);
    }
    console.log(reversedNumber);
}