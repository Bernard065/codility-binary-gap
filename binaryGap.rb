def solution(n)
    # Convert n to binary
    binary = n.to_s(2)
    # Initialize the maximum gap length to zero
    max_gap = 0
    # Initialize the current gap length to zero
    current_gap = 0
    # Flag to indicate if we started counting a gap
    started_counting = false

    binary.chars.each do |char|
        if char == '1'
            # If we encounter a one, we may have just finished a gap
            if started_counting && current_gap > max_gap
                # Update the maximum gap length if the current gap is longer
                max_gap = current_gap
            end
            # Reset the current gap length and set the flag
            current_gap = 0
            started_counting = true
        elsif started_counting
            # If we encounter a zero while counting, increment the current gap length
            current_gap += 1
        end
    end
    return max_gap
end

puts solution(1041)