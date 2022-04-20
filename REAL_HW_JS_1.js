let age_1 = prompt("Сколько Вам лет? ", );
    var age_2 = 18,
        age_3 = 60
     
    if (age_1 < age_2 ) {
       document.write("you don't have acces cause your age is " + age_1 + ", it is less, than " + age_2)
    }
    else if  (age_1 >= age_3) {
        document.write("keep calm and watch Culture channel")
    } 
    else if (age_1 < age_3 && age_1 >= age_2 ) {
        document.write("you are welcome")
    }
    else if (typeof  age_1 === "string"  ){
        document.write("Only numbers")
    }
    
     
     
    