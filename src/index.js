module.exports = function toReadable (number) {
  const readableNumberSimple = [
      'zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
      'eighteen', 'nineteen',
  ];
  const readableNumberComposite = [
    'twenty', 'thirty', 'forty', 'fifty', 'sixty','seventy', 'eighty', 'ninety'
  ];
  if (number < 20) {
      return readableNumberSimple[number]
  } else if (number < 100) {
      const splitedNum = String(number).split('');
      if (+splitedNum[1] === 0) {
          return readableNumberComposite[splitedNum[0]-2];
      }
      return `${readableNumberComposite[splitedNum[0]-2]} ${readableNumberSimple[splitedNum[1]]}`;
  } else {
      const splitedNum = String(number).split('');
      if (splitedNum[1] < 2) {
          const endNum = +(splitedNum[1] + splitedNum[2]);
          if (endNum === 0) {
              return `${readableNumberSimple[splitedNum[0]]} hundred`;
          }
          return `${readableNumberSimple[splitedNum[0]]} hundred ${readableNumberSimple[endNum]}`;
      }
      if (+splitedNum[2] === 0) {
          return `${readableNumberSimple[splitedNum[0]]} hundred ${readableNumberComposite[splitedNum[1]-2]}`;
      }
      return `${readableNumberSimple[splitedNum[0]]} hundred ${readableNumberComposite[splitedNum[1]-2]} ${readableNumberSimple[splitedNum[2]]}`;
  }
}
