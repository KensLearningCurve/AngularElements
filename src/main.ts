import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MovieRotationComponent } from './movie-rotation/movie-rotation.component';
import 'zone.js';

createApplication({
  providers: [],
})
  .then((app) => {
    const movieRotationComponent = createCustomElement(MovieRotationComponent, { injector: app.injector });
    customElements.define('movie-rotation', movieRotationComponent);
  })
  .catch((err) => console.error(err));