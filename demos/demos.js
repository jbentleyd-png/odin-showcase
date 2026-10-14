export const demos = [
  // RUBY:
  {
    title: "Basic Ruby Puzzles",
    video: "./videos/basics.mp4",
    github: "https://github.com/jbentleyd-png/ruby_basic_projects",
    youtube: "https://www.youtube.com/watch?v=hxYVrjAcMdg&t=57s",
    description: `Four mini-projects using ruby to solve beginner CS problems.`,
  },
  {
    title: "Tic Tac Toe",
    video: "./videos/tic-tac-toe.mp4", // relative to HMTL's path, not this file
    github: "https://github.com/jbentleyd-png/tic_tac_toe",
    youtube: "https://youtu.be/KqXm6rYDlRo",
    description: `Using Ruby and OOP to create a two-player tic tac toe game.`,
  },
  {
    title: "Mastermind",
    video: "./videos/mastermind.mp4",
    github: "https://github.com/jbentleyd-png/mastermind",
    youtube: "https://youtu.be/MaXFKKAjn1I",
    description: `Another OOP project to practice Ruby skills.

    \n In this program, the user plays against the computer in the terminal.

    \nOn program start, the user can choose to either guess or set a code composed of four colors, which may repeat.

    \nIf the player chooses to guess, they must input a set of four letter corresponding to colors each round. After an input, the program will give feedback on the guess using * signs. A red symbol indicated that one of the four letters is the correct color in the correct position, while a white symbol indicates that one of the letters is the correct color in an incorrect position. There may be up to four total symbols, and their display order does not correspond to the order of the letters the user inputted.


    \nIf the player chooses to set the code, they likewise input a four-letter combination, and the computer uses a rudimentary algorithm to try to guess the combination. The computer first inputs 6 guesses, each using all of the saem color (e.g. 'GGGG' for all green). This determines how many letters of each color are in the code. After finding that information, the computer simply guesses random combinations of the correct colors.

    \nSince the computer does not use any logic based on the symbol feedback after round 6, sometimes it gets lucky and wins, but it often loses.

    \nThis was my first time making a program of this complexity, and I tried to separate methods into appropriate files.`,
  },
  {
    title: "Hangman",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/hangman",
    youtube: null,
    description: `TOP project to play save-able games of hangman using file serialization.`,
  },
  {
    title: "Connect Four",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/tdd_connect_four",
    youtube: null,
    description: `A project to practice test-driven development while building a terminal game.`,
  },
  {
    title: "Recursion",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/recursion_project",
    youtube: null,
    description: `Creating fibonacci sequence and merge sort recursively to practice.`,
  },
  {
    title: "Linked Lists",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/Linked-list-ruby",
    youtube: null,
    description: `Implementing a linked list in Ruby to learn CS fundamentals.`,
  },
  {
    title: "HashMap",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/hash_map",
    youtube: null,
    description: `implementing a hash map in ruby to learn about CS`,
  },
  {
    title: "Binary Search Tree",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/bst_project",
    youtube: null,
    description: `Making a Balanced binary search tree to learn CS principles.`,
  },
  {
    title: "Knight's Travails",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/Knights_Travails",
    youtube: null,
    description: `Applying DSA to find the shortest route for a Knight piece to travel to get between any two spaces on a chess board. 
    \n
    I first implemented the algorithm using recursion to do depth-first-search, but I realized that that method could only give me the FASTEST route if I was lucky. So I switched to BST and was successful.
    \n
    The knight_moves method doesn't give all of the fastest routes from one space to another, but it does give one of them.`,
  },
  {
    title: "Chess",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/chess_project",
    youtube: null,
    description: `My capstone project for the Odin: Ruby course. Using OOP, testing, and file serialization (and whatever else I need) to create a 2-player chess game in the terminal.
    
    \nI learned a lot about memory and aliasing errors when building this project. Checking for checkmate and stalemate require simulating potential moves without mutating the current layout of the board and the status of each team's pieces. I used .dup to make copies and avoid mutating arrays. I used Marshal.load to create simulated boards when testing for checkmate and stalemate.
    
    \nTo test for checkmate, you can input the Fool's Mate (starting coordinates precede ending coordinates): Red----Yellow F2 F3, E7 E6; G2 G4, D8 H4.
    
    \nTo test for stalemate, you can input the the ten-move stalemate: Red----Yellow E2 E3, A7 A5; D1 H5, A8 A6; H5 A5, H7 H5; H2 H4, A6 H6; A7 C7, F7 F6; C7 D7, E8 F7; D7 B7, D8 D3; B7 B8, D3 H7; B8 C8, F7 G6; C8 E6.`,
  },
];
