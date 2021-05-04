describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
 
  it('prefix of 51 and a length of 16', function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });
 
  it('prefix of 52 and a length of 16', function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });
 
  it('prefix of 53 and a length of 16', function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011234567890123').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011234567890123456').should.equal('Discover');
  });

  it ('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
  
  for (let prefix = 644; prefix <= 649; prefix++) { 
    (function(prefix) {
      it ('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '4567890123456').should.equal('Discover');
      });    
      it ('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '4567890123456789').should.equal('Discover');
      });  
    }) (prefix); 
  }
});

describe('Maestro', function() {
  for (let length = 12, digit = '56478901'; length <= 19; length++, digit += 'x') {
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function() {
        detectNetwork('5018' + digit).should.equal('Maestro');
      });
    }) (length);
  }

  for (let length = 12, digit = '56478901'; length <= 19; length++, digit += 'x') {
    (function(length) {
      it('has a prefix of 5020 and a length of ' + length, function() {
        detectNetwork('5020' + digit).should.equal('Maestro');
      });
    }) (length);
  }

  for (let length = 12, digit = '56478901'; length <= 19; length++, digit += 'x') {
    (function(length) {
      it('has a prefix of 5038 and a length of ' + length, function() {
        detectNetwork('5038' + digit).should.equal('Maestro');
      });
    }) (length); 
  }

  for (let length = 12, digit = '56478901'; length <= 19; length++, digit += 'x') {
    (function(length) {
      it('has a prefix of 6304 and a length of ' + length, function() {
        detectNetwork('6304' + digit).should.equal('Maestro');
      });
    }) (length);
  }
});

describe('China UnionPay', function() {
  for (let prefix = 622126; prefix <= 622925; prefix++) { 
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '7890123456').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix + '78901234567').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix + '789012345678').should.equal('China UnionPay');
      });    
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '7890123456789').should.equal('China UnionPay');
      });  
    }) (prefix); 
  }

  for (let prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '4567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix + '45678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix + '456789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '4567890123456789').should.equal('China UnionPay');
      });
    }) (prefix); 
  }
   
  for (let prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix + '567890123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        detectNetwork(prefix + '5678901234567').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        detectNetwork(prefix + '56789012345678').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix + '567890123456789').should.equal('China UnionPay');
      });
    }) (prefix);
  }
});

describe('Switch', function() {
  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 4903 and a length of ' + length, function() {
        detectNetwork('4903' + digit).should.equal('Switch');
      });
    }) (length);
  }
  
  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 4905 and a length of ' + length, function() {
        detectNetwork('4905' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 4911 and a length of ' + length, function() {
        detectNetwork('4911' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 4936 and a length of ' + length, function() {
        detectNetwork('4936' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 6333 and a length of ' + length, function() {
        detectNetwork('6333' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '567890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 6759 and a length of ' + length, function() {
        detectNetwork('6759' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '7890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 564182 and a length of ' + length, function() {
        detectNetwork('564182' + digit).should.equal('Switch');
      });
    }) (length); 
  }

  for (let length = 16, digit = '7890123456'; length <= 19; length++, digit += 'x') {
    if (length === 17) {
      continue;
    }
    (function(length) {
      it('has a prefix of 633110 and a length of ' + length, function() {
        detectNetwork('633110' + digit).should.equal('Switch');
      });
    }) (length); 
  }
});