const submit = () => {
    let cool = 0;
    let dweeb = 0;
    let jock = 0;
    let prep = 0;
  
  let glassesA = "";
  let glassesQ = document.getElementsByName("glasses");
  for (let i in glassesQ) {
    if (glassesQ[i].checked) glassesA = glassesQ[i];
  }
  
  let jacketA = "";
  let jacketQ = document.getElementsByName("jacket");
  for (let i in jacketQ) {
    if (jacketQ[i].checked) jacketA = jacketQ[i];
  }
  
  let activityA = "";
  let activityQ = document.getElementsByName("activity");
  for (let i in activityQ) {
    if (activityQ[i].checked) activityA = activityQ[i];
  }
  
  if (glassesA.value == "darkAviators") cool++;
  else if (glassesA.value == "thickRimGlasses") dweeb++;
  else if (glassesA.value == "oakleys") jock++;
  else if (glassesA.value == "raybans") prep++;
  
  if (jacketA.value == "leatherJacket") cool++;
  else if (jacketA.value == "peacoat") dweeb++;
  else if (jacketA.value == "varsityJacket") jock++;
  else if (jacketA.value == "blazer") prep++;
  
  if (activityA.value == "arson") cool++;
  else if (activityA.value == "book") dweeb++;
  else if (activityA.value == "run") jock++;
  else if (activityA.value == "letigate") prep++;
  
  let result;
  if ((cool > dweeb && cool > jock) && dweeb == 0) result = "You're the coolest dude in town.";
  else if ((cool > dweeb && cool > jock) && dweeb > 0) result = "Your cool facade cannot entirely mask the dweeb in you.";
  else if (dweeb > cool && dweeb > jock && dweeb > prep) result = "You're a massive dweeb. Be ashamed.";
  else if ((jock > cool && jock > dweeb) && dweeb == 0) result = "You are a hero of sports.";
  else if ((jock > cool && jock > dweeb) && dweeb > 0) result = "You can catch a football but you still deserve a wedgie.";
  else if ((prep > cool && prep > dweeb) && dweeb == 0) result = "Your mouth's silver spoon has diamonds on the soles of its shoes.";
  else if ((prep > cool && prep > dweeb) && dweeb > 0) result = "You spend a quarter hour choosing cufflinks each morning, but I'll still steal your lunchmoney.";
  else result = "Can't get a read on you."
  
  document.getElementById("results").innerHTML = result;
  ;
  
  }