// https://github.com/Mr-Rahat-hosen/assignment-js

// Bismillahir Rahmanir Rahim



// first problem kilomerter to meter

function kilometerToMeter(kilo){
    // check it first
    if (kilo == 0 ){
      return "hey..! what are doing. please give an positive integer, greater than 0 ";
    }
    var meter = 0;
    var meter = kilo * 1000;
    return meter;
  }
  // let's call this function and give an input to check your result
  var Meter = kilometerToMeter(0);
  console.log(Meter)
  // alhamdullila it's done
  
  // second problem budget calculator
  
  function budgetCalculator(watches, phones, laptops){
    if ( watches < 0 || phones < 0 || laptops < 0){
      return " hey..! what are doing watch, phone or laptop can't less than 0"
    }
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalPrice = 0;
    var watch = watches * watchPrice;
    let phoneTotalPrice = watch;
    var phone = phones * phonePrice;
    let watchTotalPrice = phone;
    var laptop = laptops * laptopPrice;
    var laptopTotalCost = laptop;
    let totalPrices = phoneTotalPrice + watchTotalPrice + laptopTotalCost;
    totalPrice = totalPrices;
    return totalPrice;
  }
  // let's call this function and give an input to check your result
  var totalCost = budgetCalculator(4, 3, 2);
  console.log(totalCost)
  // alhamdullila it's also be done
  
  // let's find the wired hotel total cost for a wired person
  
  function hotelCost(day){
    if( day < 0 ){
      return " The day can never be negative "
    }
    var totalRent = 0;
     if ( day <= 10){
      totalRent = day * 100;
  }else if ( day <= 20){
    var firstTenDay = 10 * 100;
    var remainingDay = day - 10;
    var afterTenDay = remainingDay * 80;
    totalRent =  firstTenDay + afterTenDay;
  } else{
    var firstTenDay = 10 * 100;
    var afterTenDay = 10 * 80;
    var remainingDay = day - 20;
    var afterTwentyDay = remainingDay * 50;
    totalRent = firstTenDay + afterTenDay + afterTwentyDay;
  }
    return totalRent;
  }
  // let's call this function and give an input to check your result
  var totalPay = hotelCost(22);
  console.log(totalPay)
  // alhamdullila it's also be done
  
  // find the largest name of your frind list
  
  function megaFriend(arr) {
      // check this array is empty or not, if empty than return with message.
      if (arr.length == 0) {
        return "This array is empty, please input a value."
    }
    var largeName = arr[0];
    // count name lenght 
     var largeNameLength = largeName.length;
  
    // loop for search new elemet is larger or not 
    for (var i = 0; i < arr.length; i++) {
        //store new element
        var element = arr[i];
        // count new element length
        var elementLength = element.length;
        // check new elemet lenght is greater or not
        if (largeNameLength < elementLength) {
            largeName = element;
             // replace previous element length with new element length
             largeNameLength = elementLength;
        }
    }
    return largeName;
  }
  // let's call this function and give an input to check your result
  var friends = ['ashik', 'fayes', 'rahat hosen', 'Maruf', 'Farhan', 'Jannat', 'limon sarder'];
  var bigestName = megaFriend(friends);
  console.log(bigestName);
  // alhamdullila, finally finished this assignment
  
  