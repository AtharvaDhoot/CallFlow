function convertToNato(inputValue) {
    var natoCodes = {
      'A': 'Alpha',
      'B': 'Bravo',
      'C': 'Charlie',
      'D': 'Delta',
      'E': 'Echo',
      'F': 'Foxtrot',
      'G': 'Golf',
      'H': 'Hotel',
      'I': 'India',
      'J': 'Juliet',
      'K': 'Kilo',
      'L': 'Lima',
      'M': 'Mike',
      'N': 'November',
      'O': 'Oscar',
      'P': 'Papa',
      'Q': 'Quebec',
      'R': 'Romeo',
      'S': 'Sierra',
      'T': 'Tango',
      'U': 'Uniform',
      'V': 'Victor',
      'W': 'Whiskey',
      'X': 'X-ray',
      'Y': 'Yankee',
      'Z': 'Zulu'
    };

    var result = inputValue.split('').map(function (letter) {
      return natoCodes[letter.toUpperCase()] || letter;
    }).join(' ');

    return result;
  }

  function setupNatoConversion(inputId, resultId) {
    var inputElement = document.getElementById(inputId);
    var resultElement = document.getElementById(resultId);

    inputElement.addEventListener('input', function () {
      var inputValue = inputElement.value;
      var natoResult = convertToNato(inputValue);
      resultElement.innerText = natoResult;
    });
  }

  // Setup NATO conversion for each input/result pair
  setupNatoConversion('input1', 'result1');
  setupNatoConversion('input2', 'result2');
  setupNatoConversion('input3', 'result3');
  setupNatoConversion('input4', 'result4');
  setupNatoConversion('input5', 'result5');
  setupNatoConversion('input6', 'result6');



  