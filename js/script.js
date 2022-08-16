"use strict";

function formatDateOfBirth(birthDay) {
  const dateOfBirth = new Date(birthDay);

  let birthYear = dateOfBirth.getFullYear();
  let birthMonth = dateOfBirth.getMonth() + 1;
  let birthDate = dateOfBirth.getDate();

  if (birthMonth < 10) {
    birthMonth = `0${birthMonth}`;
  }
  if (birthDate < 10) {
    birthDate = `0${birthDate}`;
  }

  return `${birthYear}-${birthMonth}-${birthDate}`;
}

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = formatDateOfBirth(birthDayDate);
  }

  celebrate() {
    let birthDate = new Date(this.birthDayDate).getDate();
    let birthMonth = new Date(this.birthDayDate).getMonth();

    if (
      birthDate === new Date().getDate() &&
      birthMonth === new Date().getMonth()
    ) {
      return "Happy Birthday, let’s celebrate";
    }
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, birthDayDate, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
  }

  #salary = 2000;

  getYearSalary() {
    console.log(this.#salary * 12);
  }

  celebrate() {
    const isWeekend = new Date().getDay() === 6 || new Date().getDay() === 0;
    if (super.celebrate() && isWeekend) {
      return super.celebrate();
    } else if (super.celebrate()) {
      return "Happy Birthday, but I need to work";
    }
  }
}

const personMollie = new Person("Mollie", "Noel", 34, "1988-08-16");
const employeeDominick = new Employee(
  "Dominick",
  "Palmer",
  27,
  "1995-08-16",
  "Web Designer"
);

console.log(personMollie);
console.log(personMollie.celebrate());
console.log(employeeDominick);
console.log(employeeDominick.celebrate());
employeeDominick.getYearSalary();
