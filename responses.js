function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hai"  ;
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input == "how are you")
    {
        return "Im good. How about You";
    }
    else if(input=="good")
    {
        return "Thats really great";
    }
    else if(input == "sad")
    {
        return "Dont worry. You will have a good day!";
    }
    else {
        return "Try asking something else!";
    }
}