// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another?
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

//Making sure the unit tests are working below:

var detectNetwork = function(cardNumber) {
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumber.length === 14 && ((cardNumber[0] === '3' && cardNumber[1] === '8' ) || (cardNumber[0] === '3' && cardNumber[1] === '9'))) {
    return 'Diner\'s Club';
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  } else if (cardNumber.length === 15 && ((cardNumber[0] === '3' && cardNumber[1] === '4') || ( cardNumber[0] === '3' && cardNumber[1] === '7' ))) {
    return 'American Express';
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  } else if (((cardNumber[0] === '5' && cardNumber[1] === '1') || (cardNumber[0] === '5' && cardNumber[1] === '2' ) || (cardNumber[0] === '5' && cardNumber[1] === '3') || (cardNumber[0] === '5' && cardNumber[1] === '4') || (cardNumber[0] === '5' && cardNumber[1] === '5')) && cardNumber.length === 16) {
    return 'MasterCard';
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
  } else if (cardNumber[0] === '6' && (cardNumber[1] === '0' || cardNumber[1] === '5' || cardNumber[1] === '4' )) {
    let first4 = cardNumber.slice(0, 4);
    let first3 = cardNumber.slice(0, 3);
    if (( first4 === '6011' || cardNumber[1] === '5') && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    } else if ( first3 === '644' || first3 === '645' || first3 === '646' || first3 === '647' || first3 === '648' || first3 === '648' || first3 === '649' ) {
      return 'Discover';
    }
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  } else if ( cardNumber[0] === '6' && cardNumber[1] === '3' && cardNumber[2] === '0' && cardNumber[3] === '4') {
    return 'Maestro';
  } else if (( cardNumber[0] === '5' && cardNumber[1] === '0') && (cardNumber.length > 11 && cardNumber.length <= 20 )) {
    let first4 = cardNumber.slice(0, 4);
    if (first4 === '5018' || first4 === '5020' || first4 === '5038' ) {
      return 'Maestro';
    }
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
  } else if (( cardNumber[0] === '6' && cardNumber[1] === '2' ) && ( cardNumber.length > 15 && cardNumber.length < 20) ) {
    let first6 = cardNumber.slice(0, 6);
    for (let i = 622126; i <= 622925; i++) {
      console.log(first6);
      if (Number.parseInt(first6) === i) {
        return 'China UnionPay';
      }
    }
    let first3 = cardNumber.slice(0, 3);
    for (let i = 624; i <= 626; i++) {
      if (Number.parseInt(first3) === i) {
        return 'China UnionPay';
      }
    }

    let first4 = cardNumber.slice(0, 4);
    for ( let i = 6282; i <= 6288; i++) {
      if (Number.parseInt(first4) === i) {
        return 'China UnionPay';
      }
    }
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19     
  } else if ( cardNumber[0] === '4' && cardNumber[1] === '9' || cardNumber[0] === '6' && cardNumber[1] === '3' || cardNumber[0] === '6' && cardNumber[1] === '7' || cardNumber[0] === '5' && cardNumber[1] === '6' ) {
    let first4 = cardNumber.slice(0, 4);
    let first6 = cardNumber.slice(0, 6);
    if (first4 === '4903' || first4 === '4905' || first4 === '4911' || first4 === '4936' || first4 === '6333' || first4 === '6759' ) {
      return 'Switch';
    } else if (first6 === '564182' || first6 === '633110') {
      return 'Switch';
    }
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  } else if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  } else {
    return 'Enter a valid credit card';
  }
};