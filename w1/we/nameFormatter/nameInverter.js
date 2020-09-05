const nameInverter = function(name) {

  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];

  if (name === undefined) {
    throw new Error('Error');
  }

  const trimmedName = name.trim();

  if (trimmedName === '') {
    return '';
  }

  for (let honorific of honorifics) {
    if (trimmedName === honorific) {
      return "";
    }
  }

  let parts = trimmedName.split(" ");

  if (parts.length === 2) {

    for (let honorific of honorifics) {
      if (parts[0] === honorific) {
        return trimmedName;
      }
    }

    return `${parts[1]}, ${parts[0]}`;
  } else if (parts.length === 3) {
    return `${parts[0]} ${parts[2]}, ${parts[1]}`;
  }

  return trimmedName;
};

module.exports = nameInverter;