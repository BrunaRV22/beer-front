import { Component, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnDestroy {
    constructor(
        private readonly image: ImageService
    ) {
        image.setImage('fundo_02');
    }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
