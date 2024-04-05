import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css'],
})
export class SoccerComponent implements OnInit, OnDestroy {
  attempts = 3;
  goal = false;
  animatingGoalAttempt = false; // Nuevo estado para la animación de intento de gol
  ballPosition = { x: 50, y: 80 };
  moveInterval: any;
  movingRight = true;
  velocity = 10;
  ballRadius = 10;

  ngOnInit(): void {
    this.startMovingBall();
  }

  ngOnDestroy(): void {
    clearInterval(this.moveInterval);
  }

  startMovingBall(): void {
    this.moveInterval = setInterval(() => {
      // Mueve la pelota de izquierda a derecha constantemente
      if (this.movingRight) {
        if (this.ballPosition.x < 80) this.ballPosition.x += 1;
        else this.movingRight = false;
      } else {
        if (this.ballPosition.x > 20) this.ballPosition.x -= 1;
        else this.movingRight = true;
      }
    }, this.velocity); // Ajusta este valor para controlar la velocidad
  }

  tryToScore(): void {
    clearInterval(this.moveInterval); // Detiene el movimiento constante
    this.attempts--;
    this.animatingGoalAttempt = true; // Inicia la animación de intento de gol

    setTimeout(() => {
      // Ajusta estos valores según las nuevas dimensiones del arco
      const goalStartX = 32; // Inicio del arco en porcentaje
      const goalEndX = 68; // Final del arco en porcentaje

      // Determina si el intento es un gol basado en la posición
      if (
        this.ballPosition.x >= goalStartX &&
        this.ballPosition.x <= goalEndX
      ) {
        this.goal = true;
        this.showVictoryPopup();
      } else {
        this.showMissPopup();
      }
      this.animatingGoalAttempt = false; // Termina la animación de intento de gol
      this.startMovingBall(); // Reinicia el movimiento constante de la pelota si no fue gol
    }, 1000); // Espera 1 segundo para simular la animación
  }

  showVictoryPopup(): void {
    Swal.fire({
      background: '#fff url(/assets/img/fondo_popup-min.png)',
      imageUrl: '/assets/img/ganaste-min.png',
      text: '¡Has anotado un gol!',
      width: '21em',
      imageHeight: '5rem',
      imageAlt: 'Custom image',
      html: `
      <div class="grid overflow-hidden">
            <div>
              <h3 class="text-white text-md">Tap para copiar el código</h3>
              <button
                class="btn btn-lg font-bold text-xl text-secondary btn-primary btn-block uppercase mt-4"
                id="copy"
              >
               code
              </button>
            </div>
          </div>
      `,
      showCloseButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
    }).then(() => {
      this.resetGame();
    });

    // Agregar un evento de clic personalizado al elemento con el código del premio
    let element = document.getElementById('copy') as HTMLElement;
    element.addEventListener('click', () => {
      navigator.clipboard.writeText('code'.toUpperCase()).then(() => {
        Swal.update({
          html: `
            <div class="grid overflow-hidden">
                <div>
                  <h3 class="text-white text-md">¡Código copiado!</h3>
                  <button
                    class="btn btn-lg font-bold text-xl text-secondary btn-disabled btn-primary btn-block uppercase mt-4"
                    id="copy"
                  >
                    code
                  </button>
                </div>
              </div>
          `,
        });
      });
    });
  }

  showMissPopup(): void {
    if (this.attempts === 0) {
      Swal.fire({
        background: '#fff url(/assets/img/fondo_popup-min.png)',
        imageUrl: '/assets/img/tada-logo.png',
        text: '¡Has anotado un gol!',
        width: '21em',
        imageHeight: '5rem',
        imageAlt: 'Custom image',
        html: `
        <div class="grid overflow-hidden">
              <div>
                <h3 class="text-white text-md">Lo sentimos, te has quedado sin intentos</h3>
              </div>
            </div>
        `,
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    } else {
      Swal.fire({
        background: '#fff url(/assets/img/fondo_popup-min.png)',
        imageUrl: '/assets/img/tada-logo.png',
        text: '¡Has anotado un gol!',
        width: '21em',
        imageHeight: '5rem',
        imageAlt: 'Custom image',
        html: `
        <div class="grid overflow-hidden">
              <div>
                <h3 class="text-white text-md">Has fallado, inténtalo de nuevo</h3>
              </div>
            </div>
        `,
        showCloseButton: false,
        showConfirmButton: true,
        confirmButtonText: 'Reintentar',
        allowOutsideClick: false,
      });
    }
  }

  calculateX(percent: number): number {
    const svgWidth = 400; // Asumiendo un ancho fijo para tu SVG
    return (svgWidth * percent) / 100;
  }

  calculateY(percent: number): number {
    const svgHeight = 400; // Asumiendo un alto fijo para tu SVG
    return (svgHeight * percent) / 100;
  }

  resetGame(): void {
    this.attempts = 3;
    this.goal = false;
    this.ballPosition.x = 50; // Restablece la posición inicial de la pelota
  }
}
