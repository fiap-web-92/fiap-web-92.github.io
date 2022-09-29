const resultado = document.querySelector("#resultado");

let myFunc1 = {
  showArguments() {
    resultado.innerHTML = arguments;
    console.log(arguments);
  },
};

//chamando a função
myFunc1.showArguments(
  "Full-Stack Developer",
  "React",
  "NodeJS",
  "TypeScript"
);

let myFunc2 = {
  showArguments: () => {
    // resultado.innerHTML = arguments;
    // console.log(...arguments);
  },
};

myFunc2.showArguments(
  "Full-Stack Developer",
  "React",
  "NodeJS",
  "TypeScript"
);

let user = {
  name: "Isadora",
  usandoArrow: () => {
    console.log("Meu nome é ", this.name, " Arrow Function");
  },
  usandoNominal() {
    console.log("Meu nome é ", this.name, " Nominal Function");
  },
};

user.usandoArrow();
user.usandoNominal();