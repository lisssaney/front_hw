let low = prompt("Enter the lower bound: ");
let up = prompt("Enter the upper bound: ");

let extra = low;
let text = "";
if (low > up)
{
    low = up;
    up = extra;
}
while ((low++ <= up))
{
    if (low % 2 == 0)
        text += low + " ";
        // document.write(low + "\n");
}
alert(text);