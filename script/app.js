function alexMistakes(numberOfKata, timeLimit){
    //TODO
      let totalTimeToSolveKata = numberOfKata * 6;
      let noOfMistakes = 0;
      for(let pushUpTime =5; pushUpTime<timeLimit; pushUpTime*=2){
        console.log(pushUpTime);
        
        totalTimeToSolveKata += pushUpTime;
        if(totalTimeToSolveKata <= timeLimit)
          {
            
             noOfMistakes++;
          }else{
            break;
          }
      
      }
      return noOfMistakes;
    }

    console.log(alexMistakes(10,120))

