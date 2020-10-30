//maybe add a .sort so the questions are in random order every time
const store = {

    questions: [
        {
            question: "What was Tandem's previous name?",
            answers: [
                "Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"
            ],
            correctAnswer: "Devmynd"
        },
        {
            question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
            answers: [
                "Iacta alea est!",
                "Vidi, vini, vici",
                "Aegri somnia vana",
                "Et tu, Brute?"
            ],
            correctAnswer: "Et tu, Brute?"
        },
        {
            question: "A group of tigers are referred to as:",
            answers: [
                "Chowder", "Pride", "Destruction", "Ambush"
            ],
            correctAnswer: "Ambush"

        },
        {
            question: "What is the top speed an average cat can travel?",
            answers: [
                "42 mph", "13 mph", "9 mph", "31 mph"
            ],
            correctAnswer: '3-4 Years'
        },
        {
            question: "A cat can jump to _____ times its own height:",
            answers: [
                "3", "9", "7", "5"
            ],
            correctAnswer: "5"
        },
    ],
    questionNumber: 0,
    score: 0,
    isFeedback: false,
    isCorrect: true
};



export default store
