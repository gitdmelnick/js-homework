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

  constructor(brand, model, yearOfManufacturing, maxSpeed, fuelConsumption) {
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#fuelConsumption = fuelConsumption;
  }

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
    if (!Number.isSafeInteger(litres) || litres <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if (this.#currentFuelVolume + litres > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += litres;
  }

  drive(speed, time) {
    if (!Number.isSafeInteger(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }
    if (!Number.isSafeInteger(time) || time <= 0) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    let consumedFuel = (speed * time / 100 * this.#fuelConsumption)
    if (consumedFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива')
    }
    this.#currentFuelVolume -= consumedFuel;
    this.#mileage += speed * time;
  }

  get brand() {
    return this.#brand;
  }

  set brand(str) {
    if(typeof str !== 'string' || str.length < 1 || str.length > 50) {
      throw new Error('');
    }
    this.#brand = str;
  }

  get model() {
    return this.#model;
  }

  set model(str) {
    if(typeof str !== 'string' || str.length < 1 || str.length > 50) {
      throw new Error('');
    }
    this.#model = str;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    if(!Number.isInteger(year) || year < 1900 || year > 2021) {
      throw new Error('');
    }
    this.#yearOfManufacturing = year;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if(!Number.isInteger(value) || value < 100 || value > 300) {
      throw new Error('');
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if(!Number.isInteger(value) || value < 5 || value > 20) {
      throw new Error('');
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if(!Number.isSafeInteger(value)) {
      throw new Error('');
    }
    this.#fuelConsumption = value;
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

// const car = new Car('Mercedes', 'SL350', 1972, 250, 5);

// module.exports = { Stack };
