arry = [1, 2, 3, 4, 5];

function calculateAverage(arry) {
    var total = 0;
    var count = 0;

    arry.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;

}

function average(arry){
    alert(calculateAverage(arry));
}

console.log(calculateAverage(arry));

function largestNumber(arry){
    const highest = Math.max(...arry)
    alert(highest)
}
  
function smallestNumber(arry){
    const smallest = Math.min(...arry)
    alert(smallest)
}

function toSmall(){
    let myGreeting = document.getElementById("letters").value;

    alert(myGreeting.toLowerCase());
}

function toBig(){
    let myGreeting = document.getElementById("letters").value;

    alert(myGreeting.toUpperCase());
}


