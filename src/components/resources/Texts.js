export const getTexts = (props) => {

  const { currentPlayer } = { ...props }

  const texts = {
    title: 'Dixit',
    cardSelectionDialog: {
      question: {
        mainPlayer: 'What is your phrase?',
        otherPlayers: 'Sure to play this card?'
      },
      controls: {
        select: 'All set!',
        cancel: 'I changed my mind...'
      }
    },
    yourCards: 'Your cards...',
    whoseTurn: {
      currentPlayer: `It's the turn of ${currentPlayer} to play.`,
      yourTurn: 'It\'s your turn to play!'
    },
    rules: {
      title: 'How to play Dixit',
      play: 'Play!',
      description: 'Once upon a time, in a land far far away, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled... Enjoy the game!',
    },
    about: {
      title: 'About this app',
      description: 'Lorem Ipsum bla bla bla...'
    },
    divider: '~',
    login: {
      title: 'Choose a name & game to enter!',
      question: 'What\'s your name?',
      ready: 'I\'m ready!',
      nameUsed: 'Someone is using already this name...',
      fullGame: 'The game is full...'
    },
    navigation: {
      scoreNow: 'Score now',
      hallOfFame: 'Hall of fame',
      rules: 'How to play',
      userInfo: 'User info',
      home: 'Game',
      about: 'About'
    }
  }

  return texts
}
