alert('Think about a number and I will guess it')
alert('Multiply that number for 5')
alert('Add 12 to the result')
alert('Multiply it for 10')
alert('Add 5 to that')
alert('Multiply it for 2')

var res=parseInt(prompt('What number did you get?'))

var num=(res-250)/100;

document.write('<h2>The number you thought was ' +num+'</h2>');
