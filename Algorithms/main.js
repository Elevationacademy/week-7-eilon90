//exercise 1:
function printStars(num) {
    let asterisks = '*';
    for (i = 1; i < num + 1; i++) {
        console.log(asterisks);
        asterisks = asterisks + '*';
    }
}


//exercise 2:
function printBackwardsStars(num) {
    if (num < 0) {return}
    num = Math.floor(num);
    let asterisks = '*'.repeat(num);
    for (i = num + 1; i > 0 + 1; i--) {
        console.log(asterisks);
        asterisks = asterisks.slice(1);
    }
}


//exercise 3:
function printStarSeries(num, count) {
    let asterisks = '*';
    num = Math.floor(num);
    count = Math.floor(count);
    for (i = 0; i < count; i++) {
        for (j = 1; j < num + 1; j++) {
            console.log(asterisks);
            asterisks = asterisks + '*';
        }
        asterisks = asterisks.slice(1);
        for (j = 1; j < num + 1; j++) {
            asterisks = asterisks.slice(1);
            console.log(asterisks);
        }
        asterisks = '*';
    }
}


//exercise 4:
const reverse = function(str){
    
    let reversed = '';
    for (i = str.length - 1; i > -1; i--) {
        reversed += str[i];
    }
    console.log(reversed);
  }
  
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"
  


//exercise 5:
function isPalindrom(str) {
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    let str1 = str.trim().slice(0, str.length / 2);
    let str2;
    if (str.length % 2 === 0) {
        str2 = str.trim().slice(str.length / 2);
    }
    else {
        str2 = str.trim().slice(str.length / 2 + 1);
    }
    let reversedStr2 = '';
    for (i = str2.length - 1; i > -1; i--) {
        reversedStr2 += str2[i];
    }
    console.log(reversedStr2 === str1);
}

// isPalindrom('Taco Cat')


//exercise 6:



//exercise 7:


