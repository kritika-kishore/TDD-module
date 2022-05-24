function add(numbers) {
    if (numbers === "")
    {
        return 0;
    }

    else 
    {
        console.log("number test " + numbers);
        if (numbers.substr(0, 2) === "//") 
            {
            if (!isNaN(numbers[2]) && (numbers[3] != '\n')) {
                
                return "Incorrect format for custom delimiter"
            }
            else {
                const newNumbers = numbers.substr(4);
                let delimiter = numbers[2];
                let numArray = newNumbers.split(delimiter);
                return calcResult(numArray);
            }
        }
        else
        {console.log("Enter normal split condition")
            let numArray = numbers.split(/[\n,]+/);
            return calcResult(numArray);
        }
        
    }
    
}
function checkElement(element)
{
   return (!isNaN( parseInt(element)))
}
function checkNegetives(numArray)
{
    let negetives = [];
    for (let i = 0; i < numArray.length; i++)
    {
        if (parseInt(numArray[i]) < 0)
        {
            negetives.push(parseInt(numArray[i]));
        }
    }    
    return negetives;
}
function getSum(numArray)
{
    let total = 0;
    for (let i = 0; i < numArray.length; i++)
    {
        total += parseInt(numArray[i]);
    }
    return total
}
function calcResult(numArray)
{
    let value = numArray.every(checkElement); 
    let negetiveNumbers = checkNegetives(numArray);

    
        if (negetiveNumbers.length > 0) {
            throw new Error("Negetive numbers are not allowed :" + negetiveNumbers);
        }
            if (value && numArray.length > 1) {
                console.log(getSum(numArray))
                return (getSum(numArray));
            }
            else if (value && numArray.length == 1) {
                return (parseInt(numArray[0]));
            }
            else {
                return ("Incorrect input format");
            }
        
    
}
//add("1\n-2,-5");
module.exports = add