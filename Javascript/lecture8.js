// 1.reverse number

var n = 12345 , reverse = 0 , remainder;

while (n>0){
    remainder = n%10;
    reverse = reverse * 10 + remainder;
    n = parseInt(n / 10);
}
console.log(reverse);