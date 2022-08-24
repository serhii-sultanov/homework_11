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

function isWeekend() {
  let currentDate = new Date().getDay();
  return currentDate === 0 || currentDate === 6;
}

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = formatDateOfBirth(birthDayDate);
  }

  celebrate() {
    console.log("Happy Birthday, let’s celebrate");
  }
}

class Employee extends Person {
  #salary;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }

  getYearSalary() {
    console.log(this.#salary * 12);
  }

  celebrate() {
    const birthDate = new Date(this.birthDayDate).getDate();
    const birthMonth = new Date(this.birthDayDate).getMonth();
    const currentYear = new Date().getFullYear();
    const currentBirthDate = new Date(currentYear, birthMonth, birthDate);

    if (isWeekend(currentBirthDate)) {
      return super.celebrate();
    } else {
      console.log("Happy Birthday, but I need to work");
    }
  }
}

const personMollie = new Person("Mollie", "Noel", 34, "1988-08-18");
const employeeDominick = new Employee(
  "Dominick",
  "Palmer",
  27,
  "1995-08-18",
  2000,
  "Web Designer"
);

console.log(personMollie);
personMollie.celebrate();
console.log(employeeDominick);
employeeDominick.celebrate();
employeeDominick.getYearSalary();
