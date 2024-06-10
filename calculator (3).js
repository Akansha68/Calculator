let a = document.getElementById('show');
function insertvalue(value){
    a.value += value;
}
function clerResult(){
    a.value = '';
}
function deleteResult(){
    a.value = a.value.slice(0, -1)
}
function calculate(){
    try{
        a.value = eval(a.value);
    }
    catch(error){
        a.result = "error";
    }
    
}