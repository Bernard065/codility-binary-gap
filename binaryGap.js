function solution(N) {
    let binary = N.toString(2); // Convert N to binary
    let maxGap = 0; // Initialize the maximum gap length to zero
    let currentGap = 0; // Initialize the current gap length to zero
    let startedCounting = false; // Flag to indicate if we started counting a gap

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            // If we encounter a one, we may have just finished a gap
            if (startedCounting && currentGap > maxGap) {
                // Update the maximum gap length if the current gap is longer
                maxGap = currentGap;
            }
            // Reset the current gap length and set the flag
            currentGap = 0;
            startedCounting = true;
        } else if (startedCounting) {
            // If we encounter a zero while counting, increment the current gap length
            currentGap++;
        }
    }

    return maxGap;
}


console.log(solution(1041))