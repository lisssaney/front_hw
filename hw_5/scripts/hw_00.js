function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;

    return (arr);
}


function sort_func(arr, order, myfunc)
{
    if (order != "a" && order != "d")
        return ("The order variable is not correct. Try a or d!")
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = 0; j < arr.length - i - 1; j++)
        {
            if ((arr[j] > arr[j+1]) && (order == "a"))
                arr = myfunc(arr, j, j+1);
            else if ((arr[j] < arr[j+1]) && (order == "d"))
                arr = myfunc(arr, j+1, j);     
        }
     
    }
    return ("Sorted array: " + arr);
}

let arr = [];
let len = prompt("Enter the length of the array");
for (let i = 0; i < len; i++)
{
    arr[i] = prompt("Enter an array number: ");
}

let order = prompt("Enter a for ascending order ot d for descinding one: ");

alert(sort_func(arr, order, swap));
