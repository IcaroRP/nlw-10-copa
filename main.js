function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
  </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "12:00", "ecuador")) + //ok
  createCard(
    "21/11",
    "segunda",
    createGame("england", "9:00", "iran") +
      createGame("senegal", "12:00", "netherlands") +
      createGame("usa", "15:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "06:00", "saudi-arabia") +
      createGame("denmark", "09:00", "tunisia") +
      createGame("mexico", "12:00", "poland") +
      createGame("france", "15:00", "australia")
  ) + createCard(
    "23/11",
    "quarta",
    createGame("morocco", "06:00", "croatia") +
      createGame("germany", "09:00", "japan") +
      createGame("spain", "12:00", "costa-rica") +
      createGame("belgium", "15:00", "canada")
  )