const monBoutonNumero1 = document.getElementById("btn");
const leContenuDeMonMenu = document.getElementById("menuss1");
const monBoutonNumero2 = document.getElementById("btn2");
const leContenuDeMonMenu2 = document.getElementById("menuss2");
const mesSousMenus = document.querySelectorAll(".menu1 > a");
const btnSearch = document.querySelector(".btn-search");
const search = document.querySelector(".search");
const input = document.querySelector(".input-search");

monBoutonNumero1.addEventListener("click", (e) => {
  e.stopPropagation();
  leContenuDeMonMenu.classList.toggle("active");
  leContenuDeMonMenu2.classList.remove("active");
});

monBoutonNumero2.addEventListener("click", (e) => {
  e.stopPropagation();
  leContenuDeMonMenu2.classList.toggle("active");
  leContenuDeMonMenu.classList.remove("active");
});

mesSousMenus.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (window.innerWidth <= 1200) {
      e.preventDefault();
      e.stopPropagation();

      const liens = a.parentElement;

      document.querySelectorAll(".menu1").forEach((item) => {
        if (item !== liens) {
          item.classList.remove("open");
        }
      });

      liens.classList.toggle("open");
    }
  });
});

btnSearch.addEventListener("click", (e) => {
  e.stopPropagation();
  search.classList.toggle("active");

  if (search.classList.contains("active")) {
    input.focus();
  }
});

document.addEventListener("click", () => {
  monBoutonNumero1.classList.remove("active");
  monBoutonNumero2.classList.remove("active");
  mesSousMenus.forEach((a) => {
    a.parentElement.classList.remove("open");
  });
});

//les slides images
document.addEventListener("DOMContentLoaded", () => {
  const slideImages = document.querySelector(".slide-images");
  if (!slideImages) return;
  const slides = Array.from(slideImages.children);
  const container = document.querySelector(".container");
  const btnGauche = document.querySelector(".slide-bouton.gauche");
  const btnDroite = document.querySelector(".slide-bouton.droite");
  let count = 0;

  //le Fonctionnement des mes boutons
  const monSlide = (une) => {
    if (slides.length === 0) return;
    count = (count + une + slides.length) % slides.length;
    slideImages.style.transform = `translateX(-${count * 100}%)`;
  };

  //Mes boutons

  if (btnGauche) {
    btnGauche.addEventListener("click", () => monSlide(-1));
  }

  if (btnDroite) {
    btnDroite.addEventListener("click", () => monSlide(1));
  }

  let defilement = setInterval(() => {
    monSlide(1);
  }, 3000);

  container.addEventListener("mouseenter", () => {
    clearInterval(defilement);
  });

  container.addEventListener("mouseleave", () => {
    defilement = setInterval(() => {
      monSlide(1);
    }, 3000);
  });
});

//Mon mousemove
const monCurseur = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  monCurseur.style.left = mouseX + "px";
  monCurseur.style.top = mouseY + "px";
});

document.addEventListener("mouseover", (e) => {
  const monElement = e.target.closest('a, button, input, [role="button"]');
  if (monElement) {
    monCurseur.classList.add("ouvert");
  }
});

document.addEventListener("mouseout", (e) => {
  const monElement = e.target.closest('a, button, input, [role="button"]');
  if (monElement) {
    monCurseur.classList.remove("ouvert");
  }
});
