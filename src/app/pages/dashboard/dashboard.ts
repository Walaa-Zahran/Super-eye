import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
@Component({
    selector: 'app-dashboard',
    imports: [ AccordionModule],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 xl:col-span-12">
            <p-accordion value="0">
                <p-accordion-panel value="0">
                    <div class="custom-header">
                        <p-accordion-header> Select the camera</p-accordion-header>
                    </div>
                    <p-accordion-content >
                        <button class="groceryBtn">Grocery Section Footage</button>
                        <img src="https://ikancorp.com/prod1/wp-content/uploads/2022/02/Ikan-115879-Video-Footage-Cinematic-blogbanner1.jpg" width='500px'>
                    </p-accordion-content>
                </p-accordion-panel>


            </p-accordion>

            </div>
            <div class="col-span-12 xl:col-span-6">
            <iframe
                src="https://adminlte.io/themes/v3/index3.html"
                title="Local Content"
                width="100%"
                height="300"
                frameborder="0"
                allowfullscreen="true"
            ></iframe>

            </div>
            <div class="col-span-12 xl:col-span-6">
               <p style="text-align: center;">AI Analysis</p>
               <article style="padding: 20px;
    text-align: center;
    background: rgb(81 77 77 / 50%);
    color: #fff;
    border-radius: 20px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis dolor, fermentum nec lacus eu, rutrum tempus risus. Fusce elit eros, elementum at finibus et, dictum sit amet felis. Duis in venenatis ligula. Vestibulum nulla lectus, ornare non lectus in, lacinia viverra leo. Nam non leo ut elit porta dapibus sit amet sed nulla. Etiam ullamcorper, leo sed luctus laoreet, ex ligula ultrices justo, ut ultricies tortor urna eu metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean dui elit, pellentesque at purus in, hendrerit pretium magna
                Cras congue metus a lacus tincidunt tempor. Quisque vel enim a nisi placerat tempor eu non lectus. Donec vehicula vestibulum ante et dictum. Donec ut felis massa. Aliquam nec pharetra enim, quis laoreet est. Aliquam imperdiet dapibus nisl, id mollis erat tempus eget. Morbi convallis, elit in bibendum venenatis, leo metus vulputate turpis, at cursus metus eros vitae lorem. Integer tristique, risus a blandit tempor, nulla diam ultricies lectus, vel placerat eros velit a felis.


                </article>
            </div>


        </div>
    `,
    styles:[`:host ::ng-deep {
        --p-accordion-header-background:rgb(46, 143, 241);
        --p-accordion-header-color: #fff;
        --p-accordion-header-padding: 1rem;
        --p-accordion-header-hover-background: #e9ecef;
        --p-accordion-content-color: #fff;

        .p-accordion-header {
            background: var(--p-accordion-header-background);
            color: var(--p-accordion-header-color);
            padding: var(--p-accordion-header-padding);
        }

        .p-accordion-header:hover {
            background: var(--p-accordion-header-hover-background);
        }
        .p-accordioncontent{
            text-align:center;
            button{
                background-color:rgb(80, 162, 245);
                color:#fff;
                padding:10px;
                border-radius:10px;
                margin-top:10px;
            }
            img{
                margin:50px auto;
            }
        }
    }`]
})
export class Dashboard {}
