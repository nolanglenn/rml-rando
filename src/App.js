import React, { Component } from 'react'
import GamesAndInfo from './components/GamesAndInfo'
import games from './GamesDB'

state = {
  game: games[0].game,
  info: games[0].info
}

generateRandomGame = (arr) => {
  // get random numbers
  let num = Math.floor(Math.random() * games.length)

  let newGame = games[num]

  this.setState({
    game: newGame.game,
    info: newGame.info
  })

  this.shuffleGames(games)

}
