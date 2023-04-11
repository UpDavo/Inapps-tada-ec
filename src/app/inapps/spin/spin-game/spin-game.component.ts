import { Component, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spin-game',
  templateUrl: './spin-game.component.html',
  styleUrls: ['./spin-game.component.css'],
})
export class SpinGameComponent implements AfterViewInit {
  doing = false;
  lives = 3;
  prizes = [
    { image: '/assets/img/cupon5-min.png', code: 'FRIAS150' },
    { image: '/assets/img/cupon4-min.png', code: 'FRIA200' },
    { image: '/assets/img/cupon2-min.png', code: 'CORONAO25' },
    { image: '/assets/img/cupon-min.png', code: '3FRIAS' },
    { image: '/assets/img/cupon6-min.png', code: 'PROMO100' },
    { image: '/assets/img/cupon2-min.png', code: '15FREE' },
    { image: '/assets/img/cupon1-min.png', code: '2GRATIS' },
    { image: '/assets/img/cupon7-min.png', code: 'REGALO777' },
    { image: '/assets/img/cupon8-min.png', code: '200FREE' },
    { image: '/assets/img/cupon9-min.png', code: '150HOY' },
    { image: '/assets/img/cupon10-min.png', code: 'TADAPROMO' },
  ];
  loading = true;

  constructor() {}

  ngAfterViewInit(): void {
    this.loading = false;
    this.doing = false;
  }

  doSlot(): any {
    if (this.doing) {
      return null;
    }
    var vidas = document.getElementById('vidas') as HTMLElement;
    this.doing = true;
    var numChanges = this.randomInt(1, 4) * 7;
    var numeberSlot1 = numChanges + this.randomInt(1, 7);
    var numeberSlot2 = numChanges + 2 * 7 + this.randomInt(1, 7);
    var numeberSlot3 = numChanges + 4 * 7 + this.randomInt(1, 7);

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;

    const spin1 = (): any => {
      i1++;
      if (i1 >= numeberSlot1) {
        clearInterval(slot1);
        return null;
      }
      let slotTile = document.getElementById('slot1') as HTMLElement;
      if (slotTile.className == 'a4') {
        slotTile.className = 'a0';
      }
      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const spin2 = (): any => {
      i2++;
      if (i2 >= numeberSlot2) {
        clearInterval(slot2);
        return null;
      }
      let slotTile = document.getElementById('slot2') as HTMLElement;
      if (slotTile.className == 'a4') {
        slotTile.className = 'a0';
      }
      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const spin3 = (): any => {
      i3++;
      if (i3 >= numeberSlot3) {
        clearInterval(slot3);
        testWin();
        return null;
      }
      let slotTile = document.getElementById('slot3') as HTMLElement;
      if (slotTile.className == 'a4') {
        slotTile.className = 'a0';
      }

      slotTile.className =
        'a' + (parseInt(slotTile.className.substring(1)) + 1);
    };

    const testWin = () => {
      var slot1_element = document.getElementById('slot1') as HTMLElement;
      let slot1 = slot1_element.className;
      var slot2_element = document.getElementById('slot2') as HTMLElement;
      let slot2 = slot2_element.className;
      var slot3_element = document.getElementById('slot3') as HTMLElement;
      let slot3 = slot3_element.className;

      //a1 = presidente lata
      //a2 = modelo
      //a3 = presidente botella
      //a4 = sombreros

      let ganador_todo_presidente_lata =
        slot1 === 'a1' && slot2 === 'a1' && slot3 === 'a1';
      let ganador_todo_presidente_botella =
        slot1 === 'a3' && slot2 === 'a3' && slot3 === 'a3';
      let ganador_todo_modelo =
        slot1 === 'a2' && slot2 === 'a2' && slot3 === 'a2';
      let ganador_todo_sombrero =
        slot1 === 'a4' && slot2 === 'a4' && slot3 === 'a4';
      let ganador_2_presidente_lata_sombrero =
        (slot1 === 'a1' || slot1 === 'a4') &&
        (slot2 === 'a1' || slot2 === 'a4') &&
        (slot3 === 'a4' ||
          (slot3 === 'a1' && (slot1 === 'a4' || slot2 === 'a4')));
      let ganador_2_presidente_botella_sombrero =
        (slot1 === 'a3' || slot1 === 'a4') &&
        (slot2 === 'a3' || slot2 === 'a4') &&
        (slot3 === 'a4' ||
          (slot3 === 'a3' && (slot1 === 'a4' || slot2 === 'a4')));
      let ganador_2modelos_sombrero =
        (slot1 === 'a2' || slot1 === 'a4') &&
        (slot2 === 'a2' || slot2 === 'a4') &&
        (slot3 === 'a4' ||
          (slot3 === 'a2' && (slot1 === 'a4' || slot2 === 'a4')));

      let ganador_2_presidente_lata_modelo =
        (slot1 === 'a1' || slot1 === 'a2') &&
        (slot2 === 'a1' || slot2 === 'a2') &&
        (slot3 === 'a2' ||
          (slot3 === 'a1' && (slot1 === 'a2' || slot2 === 'a2')));

      let ganador_2_presidente_lata_botella =
        (slot1 === 'a1' || slot1 === 'a3') &&
        (slot2 === 'a1' || slot2 === 'a3') &&
        (slot3 === 'a3' ||
          (slot3 === 'a1' && (slot1 === 'a3' || slot2 === 'a3')));

      let ganador_2_presidente_botella_lata =
        (slot1 === 'a3' || slot1 === 'a1') &&
        (slot2 === 'a3' || slot2 === 'a1') &&
        (slot3 === 'a1' ||
          (slot3 === 'a3' && (slot1 === 'a1' || slot2 === 'a1')));

      // let ganador_2_presidente_botella_modelo =
      //   (slot1 === 'a3' || slot1 === 'a2') &&
      //   (slot2 === 'a3' || slot2 === 'a2') &&
      //   (slot3 === 'a2' ||
      //     (slot3 === 'a3' && (slot1 === 'a2' || slot2 === 'a2')));

      // let ganador_2modelos_lata_presidente =
      //   (slot1 === 'a2' || slot1 === 'a1') &&
      //   (slot2 === 'a2' || slot2 === 'a1') &&
      //   (slot3 === 'a1' ||
      //     (slot3 === 'a2' && (slot1 === 'a1' || slot2 === 'a1')));

      let ganador_2modelos_botella_presidente =
        (slot1 === 'a2' || slot1 === 'a3') &&
        (slot2 === 'a2' || slot2 === 'a3') &&
        (slot3 === 'a3' ||
          (slot3 === 'a2' && (slot1 === 'a3' || slot2 === 'a3')));

      let ganador: (any | boolean)[] = [null, false];

      if (ganador_todo_presidente_lata) {
        ganador = [0, true];
      } else if (ganador_todo_presidente_botella) {
        ganador = [1, true];
      } else if (ganador_todo_modelo) {
        ganador = [2, true];
      } else if (ganador_todo_sombrero) {
        ganador = [3, true];
      } else if (ganador_2_presidente_lata_sombrero) {
        ganador = [4, true];
      } else if (ganador_2_presidente_botella_sombrero) {
        ganador = [5, true];
      } else if (ganador_2modelos_sombrero) {
        ganador = [6, true];
      } else if (ganador_2_presidente_lata_modelo) {
        ganador = [7, true];
      } else if (ganador_2_presidente_lata_botella) {
        ganador = [8, true];
      } else if (ganador_2_presidente_botella_lata) {
        ganador = [9, true];
        // } else if (ganador_2_presidente_botella_modelo) {
        //   ganador = [10, true];
        // } else if (ganador_2modelos_lata_presidente) {
        //   ganador = [11, true];
      } else if (ganador_2modelos_botella_presidente) {
        ganador = [10, true];
      }

      console.log(ganador);

      if (ganador[1]) {
        Swal.fire({
          background: '#fff url(/assets/img/fondo_popup-min.png)',
          imageUrl: '/assets/img/ganaste-min.png',
          width: '21em',
          imageHeight: '5rem',
          imageAlt: 'Custom image',
          html: `
          <div class="grid">
                <div>
                  <img src=${this.prizes[ganador[0]].image} alt="cupon" />
                </div>
                <div class="mt-2">
                  <h3 class="text-white text-md">Tap para copiar el código</h3>
                  <button
                    class="btn btn-lg font-bold text-xl text-secondary btn-primary btn-block uppercase mt-4"
                    id="copy"
                  >
                    ${this.prizes[ganador[0]].code}
                  </button>
                </div>
              </div>
          `,
          showCloseButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
        });

        // Agregar un evento de clic personalizado al elemento con el código del premio
        let element = document.getElementById('copy') as HTMLElement;
        element.addEventListener('click', () => {
          navigator.clipboard
            .writeText(this.prizes[ganador[0]].code.toUpperCase())
            .then(() => {
              Swal.update({
                html: `
                <div class="grid">
                    <div>
                      <img src=${this.prizes[ganador[0]].image} alt="cupon" />
                    </div>
                    <div class="mt-2">
                      <h3 class="text-white text-md">¡Código copiado!</h3>
                      <button
                        class="btn btn-lg font-bold text-xl text-secondary btn-disabled btn-primary btn-block uppercase mt-4"
                        id="copy"
                      >
                        ${this.prizes[ganador[0]].code}
                      </button>
                    </div>
                  </div>
              `,
              });
            });
        });
      } else {
        if (this.lives != 0) {
          this.lives--;
        } else {
          Swal.fire({
            imageUrl: '/assets/img/loser.png',
            width: '21em',
            imageAlt: 'Custom image',
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
          });
        }
      }
      this.doing = false;
    };

    var slot1 = setInterval(spin1, 50);
    var slot2 = setInterval(spin2, 50);
    var slot3 = setInterval(spin3, 50);
  }

  randomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  copyToClipboard(cupon: any) {
    console.log(cupon);
  }
}
