// Each entry is 4 lines long, and each line has 27 characters.
// The first 3 lines of each entry contain an account number
// written using pipes and underscores, and the fourth line is blank.
// Each account number should have 9 digits, all of which should be in the range 0-9.

// Pseudocode

// PATTERN PARSER
// when given a valid specific pattern, it parses the number into lines that correspond to a, b, c, and d
// each line is split into groups of three indices
// indexes 0-2 of each line make up the first number, and so on.

// number patterns are made up of a[0]-a[2]
//                        b[0]-b[2]
//                        c[0]-c[2]


// PATTERN TO NUMBER
// takes a sequence of 9 characters and matches it with a from 0-9 based on specific
// character sequences.


var CheckForValidEntryPattern = function(input){
  var validEntryPatternRegex = /([ |_]*\n)([ |_]*\n)([ |_]*\n)([ |_]*\n)/;
  return validEntryPatternRegex.test(input)
}

// NEXT, I'd like to complete the number parser by:

// Writing the function that takes the groups in the entry pattern regex
// and assigns them as lines a, b, c, and d.

// Writing the function that splits those lines into groups
// of 3 indices and assembles the number patterns

// Writing the function that takes number patterns and compares
// them to known patterns and returns numbers if there is a match

// Combining all of the functions above to successfully find and
// return sequences of numbers from valid entries.
