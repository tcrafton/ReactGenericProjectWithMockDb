const books = [
  {
    id: 1,
    title: "Atomic Habits",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    authorID: 1,
    link:
      "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_2?crid=2336M1A51YXXM&dchild=1&keywords=atomic+habits+james+clear&qid=1594128332&sprefix=atomic+h%2Caps%2C171&sr=8-2",
  },
  {
    id: 2,
    title:
      "Barking Up the Wrong Tree: The Surprising Science Behind Why Everything You Know About Success Is (Mostly) Wrong",
    description:
      "Much of the advice we’ve been told about achievement is logical, earnest…and downright wrong. In Barking Up the Wrong Tree, Eric Barker reveals the extraordinary science behind what actually determines success and most importantly, how anyone can achieve it.",
    authorID: 2,
    link:
      "https://www.amazon.com/Barking-Wrong-Tree-Surprising-Everything/dp/0062416057/ref=sr_1_1?crid=190DQMKIN8S9G&dchild=1&keywords=barking+up+the+wrong+tree+by+eric+barker&qid=1594128357&sprefix=barking+up+the+%2Caps%2C168&sr=8-1",
  },
  {
    id: 3,
    title: "Educated",
    description:
      "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University",
    authorID: 3,
    link:
      "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501/ref=sr_1_2?crid=1HYD5E6CIC4ZU&dchild=1&keywords=educated&qid=1594128452&sprefix=educ%2Caps%2C169&sr=8-2",
  },
  {
    id: 4,
    title: "World Order",
    description:
      "Henry Kissinger offers in World Order a deep meditation on the roots of international harmony and global disorder.",
    authorID: 4,
    link:
      "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501/ref=sr_1_2?crid=1HYD5E6CIC4ZU&dchild=1&keywords=educated&qid=1594128452&sprefix=educ%2Caps%2C169&sr=8-2",
  },
];

const authors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Eric Barker" },
  { id: 3, name: "Tara Westover" },
  { id: 4, name: "Henry Kissinger" },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  books,
  authors,
};
