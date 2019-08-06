function createPhoneNumber(numbers){

    let temp = '';
    let result = '';

    for (let i = 0; i < numbers.length; i++){

        temp = numbers[i];

        if (i == 0){
            result += '(';
            result += numbers[i];
        }

        else if (i == 1){
            result += numbers[i];
            
        }

        else if (i == 2){
            result += numbers[i];
            result += ')';
            result += ' ';
        }

        else if (i == 3){
            result += numbers[i];
        }

        else if (i == 4){
            result += numbers[i];
        }

        else if (i == 5){
            result += numbers[i];
            result += '-';
        }

        else if (i == 6){
            result += numbers[i];
        }

        else if (i == 7){
            result += numbers[i];
        }

        else if (i == 8){
            result += numbers[i];
        }

        else if (i == 9){
            result += numbers[i];
        }
    }
    return result;
}

console.log(createPhoneNumber([7,8,6,2,3,5,6,5,6,7]));
