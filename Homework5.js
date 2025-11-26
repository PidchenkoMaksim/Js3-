// num 1


const student = {
  name: "Ім'я",
  speciality: "Спеціальність",
  averageGrade: 0,
  missedLessons: 0,

        getInfo: function() {
        console.log(
`Студент: ${this.name},
Спеціальність: ${this.speciality},
Середній бал: ${this.average},
Пропущено занять: ${this.missedLessons}`
    );
  }
};


const student1 = {
  name: "Максим",
  speciality: "Frontend",
  average: 87,
  missedLessons: 3
};

const student2 = {
  name: "Анна",
  speciality: "Дизайн",
  average: 92,
  missedLessons: 1
};

const student3 = {
  name: "Антон",
  speciality: "Backend",
  average: 79,
  missedLessons: 5
};


student.getInfo.call(student1);  
student.getInfo.apply(student2); 

const showStudent3 = student.getInfo.bind(student3);
showStudent3();                 



// num 2

// додаток в html файлі

document.getElementById("htmlBtn").onclick = function() {
  document.getElementById("output").textContent =
    "HTML — це мова розмітки, що визначає структуру веб-сторінки.";
};

document.getElementById("cssBtn").onclick = function() {
  document.getElementById("output").textContent =
    "CSS — це мова стилів, яка відповідає за зовнішній вигляд елементів.";
};


// num 3