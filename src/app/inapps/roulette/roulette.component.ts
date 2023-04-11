import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
// Counter clockwise
const symbolSegments: any = {
  1: "TROPICAL <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>Gratis bolso Corona Tropical</span>",
  2: "VERANO2 <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>15% de Descuento en cervezas</span>",
  3: "TADAFUN <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>3$ de Descuento en cervezas</span>",
  4: "SUMMERLOVE <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>4$ de Descuento en cervezas</span>",
  5: "SOL <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>25% De Descuento en cervezas</span>",
  6: 'Lo Sentimos, Sigue participando',
  7: "SIXCARNAVAL <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>Six pack Gratis</span>",
  8: "RULETA <br> <span style='font-size:0.9rem;font-family: Monserrat !important;'>$2 de Descuento en cerveza</span>",
};

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css'],
})
export class RouletteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const wheel = document.querySelector('.wheel') as HTMLElement;
    const startButton = document.querySelector('.button') as HTMLElement;
    // const display = document.querySelector(".display") as HTMLElement | null;

    let deg: number = 0;
    let zoneSize: number = 45; // deg

    const handleWin = (actualDeg: any) => {
      const winningSymbolNr: number = Math.ceil(actualDeg / zoneSize);
      Swal.fire({
        title: `<h3 style='font-size: 2.2rem !important; font-family: Bright !important; color: #270a45;'>${
          winningSymbolNr != 6
            ? '¡Felicidades, ganaste!'
            : symbolSegments[winningSymbolNr]
        }</h3>`,
        imageUrl: '/assets/img/logo_tada.png',
        width: '21em',
        imageWidth: '12rem',
        imageHeight: '5rem',
        imageAlt: 'Custom image',
        html: `${
          winningSymbolNr != 6
            ? `<h3 style='font-size:0.9rem;font-family: Monserrat !important;'>Tu cupón de regalo es: </h2><br><h3 style='font-family: Bright !important;font-size: 2.6rem;color: #270a45;'>
              ${symbolSegments[winningSymbolNr]} 
              </h3>`
            : ''
        }`,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    };

    startButton?.addEventListener('click', () => {
      // Reset display
      // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(3000 + Math.random() * 3000);
      // Set the transition on the wheel
      wheel.style.transition = 'all 5s ease-out';
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
      // Enable button when spin is over
      // startButton.style.pointerEvents = "auto";
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      setTimeout(() => {
        handleWin(actualDeg);
      }, 1000);
    });
  }
}
