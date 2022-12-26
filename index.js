function scuberGreetingForFeet(scuberGreetingForFeet){

  if(scuberGreetingForFeet<=400){
    return "This one is on me!";

  }
  else if(scuberGreetingForFeet>400 && scuberGreetingForFeet <2000){

    return "That will be twenty bucks.";
  }

  else if(scuberGreetingForFeet>2000 && scuberGreetingForFeet<2500){
  
    return "I will gladly take your thirty bucks.";
  }
  else{
  
    return "No can do.";
  }
  // Write your code here!
}

function ternaryCheckCity(ternaryCheckCity){
  // Write your code here!

 return ternaryCheckCity=="NYC"? "Ok, sounds good.": "No go." ;
}

function switchOnCharmFromTip(switchOnCharmFromTip){
  // Write your code here!
  switch(switchOnCharmFromTip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}


scuberGreetingForFeet(2600);
ernaryCheckCity("uu");
