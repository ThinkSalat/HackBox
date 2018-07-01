
export const CARD = `
  id
  text
  prompt
  cardType
  numPrompts
  flavorText
`

export const PLAYER = `
  id
  username
  score
  hand {
    ${CARD}
  }
`

export const ANSWER = `
  id
  player {
    ${PLAYER}
  }
  answers
  votes {
    ${PLAYER}
  }
`;

export const RESPONSE = `
  id
  prompt {
    ${CARD}
  }
  answers {
    ${ANSWER}
  }
  players {
    ${PLAYER}
  }
`;

export const STATUS = `
  currentRound
  timer
  status
  gameOver
  gameStarted
  answerPhase
  votePhase
  allAnswered
  allVoted
`;

export const ROOM = `
  id
  code
  numRounds
  gameType
  discard {
    ${CARD}
  }
  players {
    ${PLAYER}
  }
  prompts {
    ${RESPONSE}
  }
  status {
    ${STATUS}
  }
`;