import { Component } from '@angular/core';
import { Sacola } from 'src/app/model/produto';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
     selector: 'app-sacola',
     templateUrl: './sacola.component.html',
     styleUrls: ['./sacola.component.scss']
})
export class SacolaComponent {
    sacola: Sacola[];

    constructor(
        readonly route: ActivatedRoute,
        readonly meta: Meta
    ) {
        meta.addTags([
            {
                name: 'robots',
                content: 'noindex'
            },
            {
                name: 'googlebot',
                content: 'noindex'
            }
        ]);

        route.data
            .subscribe((params) => this.sacola = params.sacola);
    }
}
