

$('.click').on('click',function(){
let pvrValue=$('#myinput').val()
if($(this).text()=='='){
    var arithmeticRegex = /"([^"]*)"|([-+]?\d+(\.\d+)?)([\/*+\-]([-+]?\d+(\.\d+)?))/g;

    if (arithmeticRegex.test(pvrValue)) {
        var result = eval(pvrValue);
        $('#result').empty().append('Result: '+result)
      } else {
        alert('You have some error with input')
      }

    


}else{
    let finalValue=pvrValue+$(this).text()
    $('#myinput').val(finalValue)
}


    
})

$('.clicks').on('click',function(){
  
    if($(this).text()=='AC'){

        $('#myinput').val('')
        $('#result').empty()

    
    
    }else if($(this).text()=='Del'){
        var str=$('#myinput').val()

        var arr = Array.from(str);
        arr.pop();
        const myString = arr.join('');
        $('#myinput').val(myString)


    }
})