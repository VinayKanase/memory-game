function returnNames(length, alreadyOccupiedNames) {
 let characters = [
  'Awilda',
  'Chloe',
  'Debbra',
  'Bernardina',
  'Kenia',
  'ian',
  'Annie',
  'Rosario',
  'Ashli',
  'Bennett'
 ];
 let names = [];
 for (let i = 0; i < length; i++) {
  const index = Math.floor(Math.random() * characters.length);
  names.push(characters[index]);
  characters.splice(index, 1);
 }
 return names;
}
function ImgLinkCreater(name) {
 return `https://robohash.org/${name}.png?size=150x150&set=${Math.floor(Math.random() * 2) ? 'set1' : 'set2'}`;
}

export default function createCharList(level) {
 const temp = returnNames(level + 4);
 const charList = [];
 temp.forEach((name) => {
  charList.push({
   name,
   imgLink: ImgLinkCreater(name)
  });
 });
 return charList;
}
createCharList(1);