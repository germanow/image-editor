export default function generateId(){
    let degree = 3;
    var randomNumber = "";
    for(let i = 0; i < degree; i++){
        randomNumber += Math.floor(Math.random()*10);
    }
    let timestamp = Date.now().toString();
    return timestamp+randomNumber;
}