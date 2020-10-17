export default function getDumberName() {
  let firstName = 'Donald'
  let lastName = 'Trump'
  switch (Math.round(Math.random() * 10)) {
    case (0):
      firstName = 'Flomold'
      break
    case (1):
      firstName = 'Blomerd'
      break
    case (2):
      firstName = 'Trundle'
      break
    case (3):
      firstName = 'Dumbald'
      break
    case (4):
      firstName = 'Flombord'
      break
    case (5):
      firstName = 'Tronald'
      break
    case (6):
      firstName = 'Sir Fuck Boi'
      break
    case (7):
      firstName = 'Garbage'
      break
    case (8):
      firstName = 'Sad'
      break
    case (9):
      firstName = 'Wrong'
      break
  }

  switch (Math.round(Math.random() * 10)) {
    case (0):
      lastName = 'Dormp'
      break
    case (1):
      lastName = 'Flump'
      break
    case (2):
      lastName = 'Zump'
      break
    case (3):
      lastName = 'Pump'
      break
    case (4):
      lastName = 'Bump'
      break
    case (5):
      lastName = 'Dump'
      break
    case (6):
      lastName = 'Drump'
      break
    case (7):
      lastName = 'Tump'
      break
    case (8):
      lastName = 'Toomp'
      break
    case (9):
      lastName = 'Doomp'
      break
  }

  return `${firstName} ${lastName}`
}