"use strict";

function check() {
  cim = reg.mail.value;

  if (cim.length == 0) {
    alert('Nem adott meg e-mail címet!');
  }

  jelsz = reg.pass.value;

  if (jelsz.length == 0) {
    alert('Nem adott meg jelszót!');
  }

  if (jelsz.length > 1 && jelsz.length < 8) {
    alert('A jelszó legalább 8 karakter kell, hogy tartalmazzon!');
  }

  jelsz2 = reg.pass2.value;

  if (jelsz2 != jelsz && jelsz.length >= 8) {
    alert('A két jelszó nem egyezik!');
  }

  evsz = reg.ev.value;

  if (evsz > 0 && (evsz < 1942 || evsz > 2024)) {
    alert('A születési évének 1941 és 2023 közti évszámnak kell lennie!');
  }

  if (evsz == 0) alert('Nem adott meg születési évet!');
  irszam = reg.irs.value;

  if (isNaN(irszam)) {
    alert('Az irányítószám csak számokat tartalmazhat!');
  }

  if (irszam.length >= 5 && irszam.length >= 1) {
    alert('Az irányítószámnak pontosan 4 karakternek kell lennie!');
  }

  if (irszam == 0) {
    alert('Nem adott meg irányítószámot!');
  }

  elfogadom = reg.confirm;

  if (document.getElementById("confirm").checked == false) {
    alert('Nem fogadta el a regsztrációs feltételeket!');
  }
}