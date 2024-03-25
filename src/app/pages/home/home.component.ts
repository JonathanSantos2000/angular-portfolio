import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { CardWorksComponent } from "../../components/card-works/card-works.component";
import { CardTechComponent } from "../../components/card-tech/card-tech.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { CardAboutMeComponent } from "../../components/card-about-me/card-about-me.component";
import { CardCertificateComponent } from "../../components/card-certificate/card-certificate.component";
import { CardFooterComponent } from "../../components/card-footer/card-footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuBarComponent, CardWorksComponent, CardTechComponent, BigCardComponent, CardAboutMeComponent, CardCertificateComponent, CardFooterComponent]
})
export class HomeComponent {

}
