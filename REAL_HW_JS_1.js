let age_1 = prompt("Сколько Вам лет? ", ),
    age_2 = 18,
    age_3 = 60
    age_4 = 0

if ((age_1 > age_4 ) == true){ 
     age_1 = Number (age_1)
}
else if (typeof (age_1) === 'string') {
    document.write("only numbers")
}

if (age_1 < age_2 ) {
    document.write("you don't have acces cause your age is " + age_1 + ", it is less, than " + age_2)
}
else if  (age_1 >= age_3) {
    document.write(" keep calm and watch Culture channel")
} 
else if (age_1 < age_3 && age_1 >= age_2 ) {
    document.write("you are welcome")
}

     
     
    