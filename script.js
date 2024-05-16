const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

window.addEventListener('scroll', function() {
  const parallax = document.getElementById('parallax');
  let scrollPosition = window.scrollY;

  parallax.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
})

document.getElementById('advancedForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Validação adicional se necessário
  const phone = document.getElementById('phone').value;
  
  // Se todas as validações passarem, submeter o formulário
  alert('Formulário enviado com sucesso!');
  this.submit();
});
