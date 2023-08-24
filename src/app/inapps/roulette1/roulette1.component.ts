import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

// Counter clockwise
const symbolSegments: any = {
  1: '¡Felicidades! ganaste una visita a la cerveceria nacional con el cupón mevoydevisita. Descarga la app y canjéalo',
  2: '¡Felicidades! ganaste $5 gratis en cerveza con el cupón dolaresmagicos. Descarga la app y canjéalo ',
  3: '¡Felicidades! ganaste 15% gratis en cerveza con el cupón 15magicos. Descarga la app y canjéalo',
  4: '¡Felicidades! ganaste 10% gratis en cerveza con el cupón 10magicos. Descarga la app y canjéalo',
  5: '¡Felicidades! ganaste $3 gratis en cerveza con el cupón Dolarmagico. Descarga la app y canjéalo',
  6: 'Lo Sentimos, Sigue participando',
  // 7: '¡Felicidades tienes un premio TaDa! Recíbelo en el stand.',
  // 8: '!Felicidades tienes $2 gratis en cervezas! Recibe tu cupón en el stand. ',
};

@Component({
  selector: 'app-roulette-1',
  templateUrl: './roulette1.component.html',
  styleUrls: ['./roulette1.component.css'],
})
export class RouletteComponent1 implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const wheel = document.querySelector('.wheel') as HTMLElement;
    const startButton = document.querySelector('.button') as HTMLElement;
    // const display = document.querySelector(".display") as HTMLElement | null;

    let deg: number = 0;
    let zoneSize: number = 60; // deg

    const handleWin = (actualDeg: any) => {
      const winningSymbolNr: number = Math.ceil(actualDeg / zoneSize);
      // Configuramos los colores que queremos que tenga el confetti
      const colors = ['#634a99', '#eea81c', '#ffffff'];
      confetti({
        particleCount: 100, // Número de partículas
        spread: 100, // Área en la que se distribuyen las partículas
        origin: { y: 0.6 }, // Posición de inicio
        colors: colors, // Colores del confetti
      });

      setTimeout(() => {
        Swal.fire({
          imageUrl: '/assets/img/color.png',
          width: '21em',
          imageWidth: '12rem',
          imageHeight: '5rem',
          imageAlt: 'Custom image',
          html: `<h3 style='font-size: 1.3rem;color: #270a45;'>
                ${symbolSegments[winningSymbolNr]} 
                </h3>`,
          showCloseButton: false,
          showConfirmButton: false,
          confirmButtonText: 'Volver a jugar',
          confirmButtonColor: '#270a45',
          allowOutsideClick: false,
        }).then((result) => {
          startButton.style.pointerEvents = 'auto';
          wheel.style.transform = `rotate(0deg)`;
        });
      }, 500);
    };

    startButton?.addEventListener('click', () => {
      // Reset display
      // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(3000 + Math.random() * 3000);
      let actualDeg = deg % 360;
      while (
        (actualDeg >= 135 && actualDeg <= 182) ||
        (actualDeg >= 0 && actualDeg <= 45) ||
        (actualDeg >= 180 && actualDeg <= 225)
      ) {
        // console.log("picca")
        deg = Math.floor(3000 + Math.random() * 3000);
        actualDeg = deg % 360;
      }
      // console.log(deg);
      // console.log(actualDeg);
      // Set the transition on the wheel
      wheel.style.transition = 'all 5s ease-out';
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
      // Enable button when spin is over
      // Remove blur
      wheel.classList.remove('blur');
      wheel.style.transition = 'none';
      let actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      setTimeout(() => {
        handleWin(actualDeg);
      }, 1000);
    });
  }
}
