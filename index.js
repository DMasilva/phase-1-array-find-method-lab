// code your solution here
function superbowlWin(record){

    let decision = record.find((decision)=>{
        
        if (decision.result==='W'){
            return true;
        }
    })
        if (decision){
            return decision.year
        }
}