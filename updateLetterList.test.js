const updateLetterList = require('./updateLetterList.js');

test('updaten van de lijst met letters die al geraden zijn', () => {
  const letter = 'b';
  expect(updateLetterList()).toContain(letter);
});
