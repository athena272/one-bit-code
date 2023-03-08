function setSpaceShiptDetails()
{
  console.log(spaceShipName);
  console.log(spaceShipType);
  
  // Por estar como var, ele se torna global e fica com valor undefined
  var spaceShipName = "Elemental"; 
  let spaceShipType = "Discovery";

  console.log(spaceShipName);
  console.log(spaceShipType);
}


setSpaceShiptDetails();