const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const searchString = 'Bondhu';
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString);
// console.log(doesExist);

const lyricsLowerCase = lyrics.toLowerCase()
// // const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// // console.log(doesExistOneLine);

// // -------------------------------------
// // indexOf

// console.log(lyrics.indexOf('kala'));
// console.log(lyrics.indexOf('Tumi'))
// // 

// if(lyrics.indexOf('sada') !== -1){
//     console.log('exists inside the string')
// }
// else {
//     console.log('cannot find it');
// }

// // startsWith
console.log(lyrics.startsWith('2umi'))

// // endswith
// const fileName = 'mybiodata.pdf';
// const otherFile = 'mypic.png';

fileName.endsWith('.pdf')