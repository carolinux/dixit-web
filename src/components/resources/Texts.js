export const getTexts = (props) => {

  const { currentPlayer } = { ...props }

  const texts = {
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
    }
  }

  return texts
}