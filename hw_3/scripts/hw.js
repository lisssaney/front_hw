function even_numbers(low, up)
{
    let extra = low;
    let text = "the list of even numbers: \n";
    if (low > up)
    {
        low = up;
        up = extra;
    }
    while (low <= up)
    {
        if (low % 2 == 0)
            text += low + " ";
        low++;
    }
    return text;
}

let low = prompt("Enter the lower bound: ");
let up = prompt("Enter the upper bound: ");

alert(even_numbers(low, up));
