/**
 * @param {string} s
 * @return {string[]}
 */

// output array of all repeating subsequences of size 10
// store currentSequece for the window we have
// also store prevSeqeuce for the one we want to compare it to
// define an initial window of first ten nucelotides
// 

var findRepeatedDnaSequences = function(s) {
    const size = 10;
    let currentWindow = "";

  // create a set for storing every unique 10 char sequence
  const sequences = new Set()
//   create a set for storing only one copy of each repeat sequences 
const repeatSeq = new Set()

    // define an initial window of first ten nucelotides
    for (let i = 0; i < size; i++){
        let nucleotide = s[i];
        currentWindow+= nucleotide;
    }

    // add initial window to set
    sequences.add(currentWindow)
  
    // loop over sequece starting at end of intitial window, from currentSequence we remove first nucelotide and adding the new one, compare to prevSequence 
    for (let j = size; j < s.length; j++){
        // remove first nucelotide from currentWindow and add the new one
        currentWindow = currentWindow.slice(1) + s[j]
        // see if the currentWindow sequnece is in the set of already encountered sequences
        if (sequences.has(currentWindow)) {
            repeatSeq.add(currentWindow);
        }
        else {
            sequences.add(currentWindow);
        }
        // update prevWindow
        prevWindow = currentWindow
    }

    return [...repeatSeq];
};

// "AAAAAAAAAAAAA""
