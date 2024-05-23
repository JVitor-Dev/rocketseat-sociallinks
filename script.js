function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const imgAlt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto do perfil contendo joão vitor dando um leve sorriso, sem acessórios, vestido com camisa preta e com fundo verde"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto do perfil contendo joão vitor dando um leve sorriso, sem acessórios, vestido com camisa preta e com fundo branco"
    )
  }
}
