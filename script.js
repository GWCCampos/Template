const changeImage = (imgNum) => {
  const image = document.querySelector('.imagemPrincipal')
  const titleImg = document.querySelector('.title-image')
  const textImg = document.querySelector('.text-image')
  image.style.backgroundImage = `url("./imagem/Fundo${imgNum}.jpg")`
  if (imgNum === 1) {
    titleImg.innerHTML = 'Aposte nas principais loterias em um único lugar'
    textImg.innerHTML = 'Bolões inteligentes que aumentam suas chances de ganhar.'
  }
  if (imgNum === 2) {
    titleImg.innerHTML = '+ de 7 milhões em prêmios distribuídos'
    textImg.innerHTML = 'Aposte com os bolões da Tribo da Sorte agora mesmo.'
  }
}

const buttonimage = (btnNum) => {
  const btn = document.getElementById(`btn-image-${btnNum}`)
  btn.addEventListener('click', () => {
    changeImage(btnNum);
  })
}

buttonimage(1);
buttonimage(2);