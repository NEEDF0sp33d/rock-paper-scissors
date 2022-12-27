"use strict";

function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"]

    let item = choices[Math.floor(Math.random() * choices.length)]

    return item.toLowerCase()

}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()

    if (computerSelection === playerSelection) {
        return ("It's a tie!")
    }else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return ("You lose!, rock beats scissors.")
    }else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return ("You lose!, scissors beats paper.")
    }else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return ("You lose!, paper beats rock.")
    }else {
        return (`You win!, ${playerSelection} beats ${computerSelection}`)
    }

}

function Game() {

    for (let i = 1; i <= 5; i++){
        let selection = prompt('choose')
        let outCome = playRound(selection, getComputerChoice())
        console.log(outCome)
    }

}

Game()

