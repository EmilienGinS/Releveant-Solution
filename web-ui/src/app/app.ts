import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Pc1 } from './component/pc1/pc1';
import { Pc2 } from './component/pc2/pc2';
import { Srv1 } from './component/srv1/srv1';

@Component({
  selector: 'app-root',
  imports: [MenubarModule, Pc1, Pc2, Srv1],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items: MenuItem[] | undefined;
  showPC1 = signal(false);
  showPC2 = signal(false);
  showSRV1 = signal(false);
  showHome = signal(true);

  hideAll() {
    this.showPC1 = signal(false);
    this.showPC2 = signal(false);
    this.showSRV1 = signal(false);
    this.showHome = signal(false);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => {
          this.hideAll();
          this.showHome.set(true);
        },
      },
      {
        label: 'Grafana',
        icon: 'pi pi-star',
        command: () => {
          window.open('http://grafana.releveant.projet.filiere.info/');
        },
      },
      {
        label: 'Influxdb',
        icon: 'pi pi-star',
        command: () => {
          window.open('http://influx.releveant.projet.filiere.info/');
        },
      },
      {
        label: 'Hotes',
        icon: 'pi pi-search',
        items: [
          {
            label: 'PC1',
            icon: 'pi pi-server',
            command: () => {
              this.hideAll();
              this.showPC1 = signal(true);
            },
          },
          {
            label: 'PC2',
            icon: 'pi pi-server',
            command: () => {
              this.hideAll();
              this.showPC2 = signal(true);
            },
          },
          {
            label: 'SRV1',
            icon: 'pi pi-server',
            command: () => {
              this.hideAll();
              this.showSRV1 = signal(true);
            },
          },
        ],
      },
    ];
  }
}
