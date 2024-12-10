const car = {
  make: "Toyota",
  model: "Corolla",
  colour: "black",
};

const carDetails = `This is a ${car.colour} ${car.make} ${car.model}`;

console.log(carDetails);

const book = {
  title: "Homo Deus",
  author: "Yuval Noah Harari",
  pages: 450,
};

const bookDetails = `The book "${book.title}" by ${book.author} and contains ${book.pages} pages`;

console.log(bookDetails);

const Sita = {
  make: "human-ish",
  favColour: "black",
  hobbies: ["reading", "travelling", "hiking", "cooking"],
  family: {
    mother: {
      name: "Iza",
      age: 54,
      hobbies: ["birding", "cycling", "cooking", "reading"],
    },
    sister: {
      name: "Satya",
      age: 32,
      hobbies: ["travelling", "coding", "astronomy", "reading"],
    },
  },
};

console.log(`Sita's favourite colour is ${Sita.favColour}.`);

console.log(
  `Sita's mom's name ${
    Sita.family.mother.name
  } and her hobbies are: ${Sita.family.mother.hobbies.join(", ")}`
);

console.log(
  `Sita's sisters name: ${Sita.family.sister.name} and her age is: ${Sita.family.sister.age}`
);
