function telephoneCheck(str) {
    let result;
    const formats = [
      /^\d{10}$/,
      /^\d{3,3}-\d{3,3}-\d{4,4}/,
      /^\d{3,3} \d{3,3} \d{4,4}/,
      /^\(\d{3,3}\)\d{3,3}-\d{4,4}/,
      /^(\d{3,3}) \d{3,3}-\d{4,4}/,
      /^1\d{10}/,
      /^1 \d{3,3} \d{3,3} \d{4,4}/,
      /^1 \d{3,3}-\d{3,3}-\d{4,4}/,
      /^1 \(\d{3,3}\)\d{3,3}-\d{4,4}/,
      /^1\(\d{3,3}\)\d{3,3}-\d{4,4}/,
      /^1 (\d{3,3}) \d{3,3}-\d{4,4}/,
      /^1 \(\d{3,3}\) \d{3,3}-\d{4,4}/
    ];
  
    result = formats.some(regex => regex.test(str))
  
  return result;
    
  }
  
  console.log(telephoneCheck("27576227382"));