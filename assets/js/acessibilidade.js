// Inicio - acessibilidade
  // inicio - inverter cores     
  const btnInverterColor = document.querySelector('#invertColors');
  btnInverterColor.addEventListener('click', ()=>{
      document.body.classList.toggle('inversed');
      console.log('testando inverter color');
  });
// fim - inverter cores
// inicio - aumenta fonte e diminui
  const increaseButton = document.getElementById('increase');
  const decreaseButton = document.getElementById('decrease');
  function increaseFontSize() {
      event.preventDefault();
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, a, p');      
      elements.forEach(element => {
          const currentSize = window.getComputedStyle(element).fontSize;
          const currentSizeValue = parseFloat(currentSize);
          element.style.fontSize = (currentSizeValue + 2) + 'px';
      });
  }
  function decreaseFontSize() {
      event.preventDefault();
      const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, a, p');
      elements.forEach(element => {
          const currentSize = window.getComputedStyle(element).fontSize;
          const currentSizeValue = parseFloat(currentSize);
          element.style.fontSize = (currentSizeValue - 2) + 'px';
      });
  }
  increaseButton.addEventListener('click', increaseFontSize);
  decreaseButton.addEventListener('click', decreaseFontSize);
// fim - aumenta fonte e diminui
// 
  const iconCallAcess = document.querySelector('#btnAcessibilidade');
  const listIcons = document.querySelector('#menuAcessibilidade');
  iconCallAcess.addEventListener('click', function(){
      listIcons.classList.toggle('display-grid');
  });
// 
// inicio - destacar link
const destacarLink = document.querySelector('#highlightLinks');
const elementLinks = document.querySelectorAll('a');
destacarLink.addEventListener('click', ()=>{
    elementLinks.forEach(element => {
        element.classList.toggle('back-link');
    });
})
// fim - destacar link
// inicio - contrast
  const contrast = document.querySelector('.altocontrasteAcessibilidade');
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, span, body, div, section, li, ul');
  const iconBranco = document.querySelectorAll('.iconBranco');
  const iconPreto = document.querySelectorAll('.iconPreto');
  contrast.addEventListener('click', function() {
    elements.forEach(element => {
      element.classList.toggle('contrast-color');
    });
    iconBranco.forEach(iBranco => {
      iBranco.classList.toggle('displayBlock');
    });
    iconPreto.forEach(iPreto => {
      iPreto.classList.toggle('displayNone');
    });

  })
// fim - contrast
// fim -acessibilidade

