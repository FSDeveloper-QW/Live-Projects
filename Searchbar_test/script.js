// JavaScript code
// JavaScript
const users = [
  { name: "fabien potencier" },
  { name: "andrew nebitt" },
  { name: "taylor otwell" },
  { name: "egoist" },
  { name: "hugo giraudel" },
  { name: "thibault duplessis" },
  { name: "juho vepsalainen" },
  { name: "nelson" },
  { name: "alex crichton" },
  { name: "jongleberry" },
];

const searchInput = document.getElementById("searchBox");
const list = document.getElementById("list");

function setList(group) {
  for (let person of group) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.innerText = person.name;
    link.href = "/url/to/profile";

    item.appendChild(link);
    list.appendChild(item);
  }
  if (group.length === 0) {
    noResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function noResults() {
  const item = document.createElement("li");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
}

searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  clearList();

  if (value && value.length > 0) {
    value = value.trim();
    setList(
      users.filter((person) => {
        return person.name.includes(value);
      })
    );
  }
});
