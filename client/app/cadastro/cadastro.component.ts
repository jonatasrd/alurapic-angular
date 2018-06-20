import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm: FormGroup;
    route: ActivatedRoute;
    router: Router;

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params=> {
            console.log(params['id']);
            let id = params['id'];
            if(id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        erro => console.log(erro)
                );    
            }       
        });

        this.meuForm = fb.group({
            titulo:['', Validators.compose(
                [Validators.required, 
                Validators.minLength(4)])
            ],
            url: ['',Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event){
        event.preventDefault();
        this.service.cadastra(this.foto)
        .subscribe(() => {
            this.foto = new FotoComponent();
            this.router.navigate(['']);
        }, erro => {
            console.log(erro);
        });
    }   
 }