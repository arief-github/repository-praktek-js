people.map(person => person.nicknames[0] || person.firstName);
// multiple parameters? need ( )
people.map((person, idx) => person.nicknames[0] || person.firstName);
// parameter destructuring? need ( )
people.map(({
  person
}) => person.nicknames[0] || person.firstName);
// parameter default? need ( )
people.map((person = {}) => person.nicknames[0] || person.firstName);
// returning an object? need ( )
people.map(person =>
  ({
    preferredName: person.nicknames[0] || person.firstName
  })
);
