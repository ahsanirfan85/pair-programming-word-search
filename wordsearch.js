const wordSearch = (letters, word) => { 

  // The first part of this function checks if the given word is in the matrix from 'left to right

  // This part of the function joins the nested array into one string. 'horizontaljoin' then will be an array of strings.
  const horizontalJoin = letters.map(ls => ls.join(''))

  // This part of the function compares the given word with each element in the array 'horizontalJoin' and returns 'true' if any of the elements in the array contain the given word or it returns 'false' if it cannot find the given word anywhere.
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

  // The second part of the function checks if the given word can be found vertically. To test for the given word vertically, we need to: (1) transpose the matrix (2) join the letters again (3) do the comparison again

  // This function transposes the letters matrix
  const transposedMatrix = transpose(letters);
  //Do same thing we did horizontal
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  //Run same loop again with vertical
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  // const diagMatrix = diagonal(letters, false);

  // console.log(diagMatrix);

  // //const diagJoin = diagMatrix.map(ls => ls.join(""));



  // for (let l of diagJoin) {
  //   if (l.includes(word)) return true;
  // }

  return false;
}

const transpose = function(matrix) {
  let returnMatrix = [];
  for (let i = 0; i < matrix[0].length ; i++) {
    returnMatrix.push([]);
    for (let j = 0; j < matrix.length; j++)
    returnMatrix[i].push(matrix[j][i]);
  }
  return returnMatrix;
}

function diagonal(array, bottomToTop) {
  let Ylength = array.length;
  let Xlength = array[0].length;
  let maxLength = Math.max(Xlength, Ylength);
  let temp;
  let returnArray = [];
  for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (let y = Ylength - 1; y >= 0; --y) {
          var x = k - (bottomToTop ? Ylength - y : y);
          if (x >= 0 && x < Xlength) {
              temp.push(array[y][x]);
          }
      }
      if(temp.length > 0) {
          returnArray.push(temp.join(''));
      }
  }
  returnArray.shift();
  returnArray.pop();
  return returnArray;
}

module.exports = wordSearch;

/* 

a,b,c,d,e
f,g,h,i,j
k,l,m,n,o

a,
f,b
k,g,c
l,h,d
m,i,e
n,j
o

*/