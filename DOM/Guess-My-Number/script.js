'use-strict'
let secret = (document.querySelector('.number').value = Math.floor(
  Math.random() * 20
))
console.log(secret)
let highScore = Number(document.querySelector('.highscore').textContent)
console.log(highScore)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  let score = Number(document.querySelector('.score').textContent)

  const msg = message => {
    document.querySelector('.message').textContent = message
  }

  if (guess < 0) {
    msg('Please enter A  Valid Number !!')
  }
  if (guess == secret) {
    const num = (document.querySelector('.score').textContent = score)
    if (highScore < num) {
      highScore = num
    }
    document.querySelector('.highscore').textContent = highScore
    document.querySelector('.number').textContent = secret
    msg('You Won ❤️👍')
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  } else {
    if (score > 1) {
      msg(guess > secret ? 'Too High Number ' : 'Too Low Number')
      document.querySelector('.score').textContent = score - 1
    } else {
      msg('You Lost The Game...')
    }
  }
})
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20
  msg('Start guessing...')
  secret = document.querySelector('.number').value = Math.floor(
    Math.random() * 20
  )
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
  console.log(secret)
})
