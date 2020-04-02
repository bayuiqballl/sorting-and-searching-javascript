let numbers = [3, 7, 2, 1, 8, 5, 4, 6]

// code below here





function Sorting(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        let min = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[min] > numbers[j]) {
                min = j;
            }
            if (min !== i) {
                let temp = numbers[i];
                numbers[i] = numbers[min];
                numbers[min] = temp;
            }
        }
    }

    return numbers;
}

console.log(Sorting(numbers));


function Searching(num) {
    i = 0
    found = false;
    fincIndex = 0;

    console.log('\n');

    while (!found) {
        if (numbers[i] == num) {
            found = true;
            fincIndex = i
            console.log('angka ' + num + ' terdapat pada data tersebut');
        } else if (numbers.length == i) {
            console.log('angka ' + num + ' tidak ada pada data tersebut');
            break

        }
        i++;
    }


}


Searching(5);
Searching(9);