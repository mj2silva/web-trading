export const isCharacterALetter = (char: string): boolean => {
  if (char.length !== 1) throw Error('El parámetro ingresado no es un caracter');
  return char.toUpperCase() !== char.toLowerCase();
};

export const capitalizeString = (text: string): string => {
  const capitalizedText = text
    .split(' ')
    .map((word) => {
      const wordArray = word.split('');
      let isCapitalized = false;
      const wordArrayCapital = wordArray.map((letter) => {
        if (isCapitalized) return letter.toLowerCase();
        if (isCharacterALetter(letter)) {
          isCapitalized = true;
          return letter.toUpperCase();
        }
        return letter;
      }).join('');
      return wordArrayCapital;
    });
  return capitalizedText.join(' ');
};

export const capitalizeFirst = (text: string): string => {
  let isCapitalized = false;
  const textArray = text.split('').map((letter) => {
    if (isCapitalized) {
      return letter.toLowerCase();
    }
    if (isCharacterALetter(letter)) {
      isCapitalized = true;
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  });
  return textArray.join('');
};
