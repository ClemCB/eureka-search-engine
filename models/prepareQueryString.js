var nonSearchWords = ['a', 'an', 'the', 'is', 'and', 'or', 'www.', 'he', 'she', 'it', 'they', 'i'];

function prepareQueryString(query) {
  splitQueryString(query);
}

function splitQueryString(query) {
  query = query.split(' ');
  removeNonSearchWords(query);
}

function removeNonSearchWords(query_array) {
  query_array = difference(query_array, nonSearchWords);
  appendPercentageCharacter(query_array);
}

function appendPercentageCharacter(query_array) {
  query_array = query_array.map(function(word) {
    return "%" + word + "%";
  });
  return query_array;
}

function difference (query_array, wordsToRemove) {
  return query_array.filter(function(word) {
    return wordsToRemove.indexOf(word) < 0;
  });
}

module.exports = prepareQueryString;

// prepareQueryString("hello vicky")