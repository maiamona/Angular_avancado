import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { barFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [
     { provide: BarServices, useClass: BarServices }, // utilizando 'services' utilizando uma 'class'
    {
      provide: BarServices, useFactory: barFactory, // utilizando 'services' utilizando uma 'factory function'
      deps: [// as dependencias
        HttpClient,
        // BAR_UNIDADE_CONFIG
        Injector
      ]
    },
    { provide: BebidaService, useExisting: BarServices }// utilizando 'services' utilizando uma 'class existente'
  ]
})
export class BarComponent implements OnInit {

  constructor(
    private barServices: BarServices,
    @Inject('configManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone
  ) { }

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;

  public progress = 0;
  public label: string;

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }

  processWithinAngularZone(){
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress(() => console.log('Finalmente por dentro do Angular!'));
  }

  zerar(){
    this.progress = 0;
  }

  processOutsideOfAngularZone(){
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => {
          console.log('Finalizando fora!');
        });
      });
    });
  }

_increaseProgress(doneCallback: () => void){
  this.progress += 1;
  console.log(`Progresso atual: ${this.progress}`);

  if (this.progress < 100) {
    window.setTimeout(() => this._increaseProgress(doneCallback), 10);
  } else{
    doneCallback();
  }

}
}
