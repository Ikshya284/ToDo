const todos = [
  { id: 1, title: "Buy groceries", deadline: "2026-07-12", isUrgent: false },
  {
    id: 2,
    title: "Finish project report",
    deadline: "2026-07-11",
    isUrgent: true,
  },
];


let nextId = 3;


function incrementNextId() {
  nextId++;
}


export { todos, nextId, incrementNextId };
