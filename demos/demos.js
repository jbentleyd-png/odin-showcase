export const demos = [
  // RUBY:
  {
    title: "Basic Ruby Puzzles",
    video: "./videos/demo.mp4", // relative to HMTL's path, not this file
    github:
      "https://github.com/jbentleyd-png/ruby_basic_projects/blob/main/cc.rb",
    description: `"Imagine we had a decently long description. We explain the technology, the underlying concepts, and any hiccups we encountered. Could just be a copy of the README, for that matter. Nah, let's make it shorter than the README. People can just go read that thing itself.`,
  },
  {
    title: "Tic Tac Toe",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/tic_tac_toe",
    description: `Using Ruby and OOP to create a two-player tic tac toe game.`,
  },
  {
    title: "Mastermind",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/mastermind",
    description: `Another OOP project to practice Ruby skills.`,
  },
  {
    title: "Hangman",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/hangman",
    description: `TOP project to play save-able games of hangman using file serialization.`,
  },
  {
    title: "Connect Four",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/tdd_connect_four",
    description: `A project to practice test-driven development while building a terminal game.`,
  },
  {
    title: "Recursion",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/recursion_project",
    description: `Creating fibonacci sequence and merge sort recursively to practice.`,
  },
  {
    title: "Linked Lists",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/Linked-list-ruby",
    description: `Implementing a linked list in Ruby to learn CS fundamentals.`,
  },
  {
    title: "HashMap",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/hash_map",
    description: `implementing a hash map in ruby to learn about CS`,
  },
  {
    title: "Binary Search Tree",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/bst_project",
    description: `Making a Balanced binary search tree to learn CS principles.`,
  },
  {
    title: "Knight's Travails",
    video: "./videos/demo.mp4",
    github: "https://github.com/jbentleyd-png/Knights_Travails",
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

    description: `My capstone project for the Odin: Ruby course. Using OOP, testing, and file serialization (and whatever else I need) to create a 2-player chess game in the terminal.
    \n
    I learned a lot about memory and aliasing errors when building this project. Checking for checkmate and stalemate require simulating potential moves without mutating the current layout of the board and the status of each team's pieces. I used .dup to make copies and avoid mutating arrays. I used Marshal.load to create simulated boards when testing for checkmate and stalemate.
    \n
    To test for checkmate, you can input the Fool's Mate (starting coordinates precede ending coordinates): Red----Yellow F2 F3, E7 E6; G2 G4, D8 H4.
    \n
    To test for stalemate, you can input the the ten-move stalemate: Red----Yellow E2 E3, A7 A5; D1 H5, A8 A6; H5 A5, H7 H5; H2 H4, A6 H6; A7 C7, F7 F6; C7 D7, E8 F7; D7 B7, D8 D3; B7 B8, D3 H7; B8 C8, F7 G6; C8 E6.`,
  },
];
