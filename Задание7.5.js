//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    connected = function() {
        console.log(`${this.name} connected to the network`);
        this.connect = true;
    }
    unconnected = function () {
        console.log(`${this.name} is Off`);
        this.connect = false;
      }
}
class TV extends ElectricalAppliance {
    constructor(name, power, diameter) {
        super(name, power);
        this.diameter = diameter;
    }
}

const television = new TV("Television", 100, 80);

television.status = function () {
    if (this.connect) {
      console.log(`${this.name} is working`);
      this.turn = true;
    } else {
      console.log(`${this.name} is off`);
      this.turn = false;
    }
  }

  television.connected();
  television.status();
  console.log(television);

  class PC extends ElectricalAppliance {
    constructor(name, power, OS) {
        super(name, power);
        this.OS =  OS;
    }
  }

  const computer = new PC("Computer", 500, "Windows");

  computer.status = function () {
    if (this.connect) {
      console.log(`${this.name} ready for work`);
      this.turn = true;
    } else {
      console.log(`${this.name} not working`);
      this.turn = false;
    }
  }

  computer.status();
  console.log(computer); 
