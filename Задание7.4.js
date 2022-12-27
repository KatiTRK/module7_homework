//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.connect = false;
}
  ElectricalAppliance.prototype.connected = function() {
    console.log(`${this.name} connected to the network`);
    this.connect = true;
  }
  ElectricalAppliance.prototype.unconnected = function() {
    console.log(`${this.name} is Off`);
    this.connect = false;
  }

  function TV(name, power, diameter) {
    this.name = name,
    this.power = power,
    this.diameter = diameter
  }
  TV.prototype = new ElectricalAppliance();

  const television = new TV("Television", 100, 80);

  television.turnOn = function() {
    console.log(`${this.name} is working`);
    this.turn = true;
  }
  
  television.turnOff = function() {
    console.log(`${this.name} is off`);
    this.turn = false;
  }
  
  television.connected();
  television.turnOff();
  console.log(television);

  function PC(name, power, OS) {
    this.name = name,
    this.power = power,
    this.OS = OS
  }

  PC.prototype = new ElectricalAppliance();

  const computer = new PC("Computer", 500, "Windows");

  computer.turnOn = function() {
    console.log(`${this.name} is on`);
    this.turn = true;
  }

  computer.turnOff = function() {
    console.log(`${this.name} is off`);
    this.turn = false;
  }

  computer.connected();
  computer.turnOn();
  console.log(computer);