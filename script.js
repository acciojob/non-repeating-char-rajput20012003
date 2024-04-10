function firstNonRepeatedChar(str) {
    // Create a map to store the frequency of each character
    const charFrequency = new Map();
    
    // Iterate through the string to populate the map
    for (let char of str) {
        // If the character already exists in the map, increment its count
        if (charFrequency.has(char)) {
            charFrequency.set(char, charFrequency.get(char) + 1);
        } else {
            // Otherwise, initialize its count to 1
            charFrequency.set(char, 1);
        }
    }
    
    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charFrequency.get(char) === 1) {
            return char; // Return the first non-repeated character
        }
    }
    
    return null; // Return null if no non-repeated character is found
}

// Example usage:
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
