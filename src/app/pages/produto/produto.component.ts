import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html'
})
export class ProdutoComponent {
    constructor(
        readonly route: ActivatedRoute,
        readonly title: Title
    ) {
        route.data
            .subscribe((params) => {
                if (params.title) {
                    title.setTitle(params.title);
                }

                console.log('Params', params);
            });
    }
}
