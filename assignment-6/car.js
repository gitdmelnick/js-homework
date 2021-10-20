class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(litres) {
    if (typeof litres !== 'number' || litres <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if (!this.#maxFuelVolume) {
      throw new Error('Не задан максимальный объем топливного бака');
    }
    if (this.#currentFuelVolume + litres > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += litres;
  }

  drive(speed, time) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    }
    if (typeof time !== 'number' || time <= 0) {
      throw new Error('Неверное количество часов');
    }
    if (!this.#fuelConsumption) {
      throw new Error('Не задана максимальная скорость');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    if (!this.#fuelConsumption) {
      throw new Error('Не задано потребление топлива');
    }
    let fuelConsumed = (speed * time / 100 * this.#fuelConsumption)
    if (fuelConsumed > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }
    this.#currentFuelVolume -= fuelConsumed;
    this.#mileage += speed * time;
  }

  get brand() {
    return this.#brand;
  }

  set brand(str) {
    if(typeof str === 'string' && str.length >= 1 && str.length <= 50) {
      this.#brand = str;
    }
  }

  get model() {
    return this.#model;
  }

  set model(str) {
    if(typeof str === 'string' && str.length >= 1 && str.length <= 50) {
      this.#model = str;
    }

  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    if(Number.isInteger(year) && year >= 1900 && year <= 2021) {
      this.#yearOfManufacturing = year;
    }
    
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if(typeof value === 'number' && value >= 100 && value <= 300) {
      this.#maxSpeed = value;
    }
    
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if(typeof value === 'number' && value >= 5 && value <= 20) {
      this.#maxFuelVolume = value;
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if(typeof value === 'number' && value > 0) {
      this.#fuelConsumption = value;
    }

  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

}

let car = new Car();
car.maxFuelVolume = 20;
car.maxSpeed = 150;
// module.exports = { Car };
