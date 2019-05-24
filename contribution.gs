function FCONSTR(input) {
  if (input < 25) {
    return "Red";
  }
  else if (input >= 50) {
    return "Green";
  }
  else if (input >= 25 && input < 50) {
    return "Yellow";
  }
  else return "NoData";
}

function FFEED(input) {
  if (input < 25) {
    return "Red";
  }
  else if (input >= 50) {
    return "Green";
  }
  else if (input >= 25 && input < 50) {
    return "Yellow";
  }
  else return "NoData";
}

function FCDMG(input) {
  if (input < 100000) {
    return "Red";
  }
  else if (input >= 1000000) {
    return "Green";
  }
  else if (input < 1000000 && input >= 100000) {
    return "Yellow";
  }
  else return "NoData";
}

function FPDMG(input) {
  if (input < 100000) {
    return "Red";
  }
  else if (input >= 1000000) {
    return "Green";
  }
  else if (input < 1000000 && input >= 100000) {
    return "Yellow";
  }
  else return "New Member";
}
  

function STATUS(constr, feed, cDmg, pDmg, dInc) {
  
    
  if (dInc == "New Member") {
    return "New Member";
  }
  else if (constr == "Red") {
    return "Check";
  }
  else if (constr == "Yellow") {
    if (cDmg == "Green") {
      return "Okay";
    }
    else return "Check";
  }
  else if (constr == "Green") {
    if (feed == "Green") {
      if (cDmg == "Green") {
          return "Good";
      }
      else return "Okay";
    }
    else if (feed == "Yellow") {
      if (cDmg == "Green") {
        return "Okay";
      }
      else if (dInc > 0) {
        return "Okay";
      }
      else return "Check";
    }
    else return "Check";
  }
  else return "Error";
      
      
 
}
