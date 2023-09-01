var a = +prompt('Enter the Num');
if(isNaN (a)){
    "Enter the Number"
}else{
    document.write('Result:' + "<br>")
    document.write(`The value of a is: ${a}` + "<br>");
    document.write('..................................'+'<br>')
    document.write(``+`<br>`)
    a++;
    document.write(`The value of ++a is: ${a}` +`<br>`);
    document.write(`Now the value of a is:${a}`+`<br>`);
    document.write(``+ `<br>`);
    document.write(``+ `<br>`);
    document.write(`The value of a++ is:${a}`+ `<br>`);
    ++a
    document.write(`Now value of ++a is: ${a}`+ `<br>`);
   --a
    document.write(``+ `<br>`);
    document.write(``+ `<br>`);
    document.write(`The value of --a is: ${a}`+`<br>`);
    document.write(`Now value --a is:${a}`+`<br>`)
    document.write(``+`<br>`);
    document.write(``+`<br>`);
    document.write(`The value of a-- is: ${a}`+ `<br>`)
    --a
    document.write(`Now the value of a-- is: ${a}`+`<br>`);
}

var a = 2;
var b = 1;

var  Result = --a  - --b + ++b + b-- + --a + ++b + ++a - --b + --a + -- b ;
                
                console.log(Result)