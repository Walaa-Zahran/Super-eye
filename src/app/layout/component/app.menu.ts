import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem,IconFieldModule,InputIconModule,FloatLabelModule,FormsModule],
    template: `<ul class="layout-menu">
            <p-floatlabel variant="on">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input pInputText id="in_label" autocomplete="off" />
                </p-iconfield>
                <label for="in_label"></label>
            </p-floatlabel>
            <ng-container *ngFor="let item of model; let i = index">

                    <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
                    <li *ngIf="item.separator" class="menu-separator"></li>
            </ng-container>
            </ul> `,
            styles:`.p-floatlabel{
                    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 10px;

            }
            input:focus-visible{
                outline:none;

            }
            input{
                padding-left:30px;
            }`
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {

                items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                { label: 'Heatmaps', icon: 'pi pi-sitemap', routerLink: ['/heatmaps'] },
                { label: 'Trajectory', icon: 'pi pi-user', routerLink: ['/trajectory'] },
                { label: 'Cart Detection', icon: 'pi pi-envelope', routerLink: ['/cart'] },
                { label: 'Shop Lifting', icon: 'pi pi-spinner', routerLink: ['/shop'] },
            ]
            },

        ];
    }
}
