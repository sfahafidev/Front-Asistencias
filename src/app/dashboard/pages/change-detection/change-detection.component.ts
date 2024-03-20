import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, // no esta siempre pendiente de los cambios
  imports: [CommonModule, TitleComponent],
  template: `
    <!-- <app-title title="Change Detection" /> -->
    <app-title [title]="currentFramework()" />

    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProprty | json}}</pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  ); // señal computada

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProprty = {
    name: 'Angular',
    releaseDate:2016,
  };

  constructor() {

    setTimeout(() => {

      //this.frameworkAsProprty.name = "React";
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))


      console.log('Hecho');
    }, 3000 );

  }


}
