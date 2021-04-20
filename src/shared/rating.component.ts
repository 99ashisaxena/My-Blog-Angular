import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'item-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.css']

})
export class RatingComponent {

constructor(){
    
}

    @Input()
    rating!: number;
    starWidth!: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.starWidth = +this.rating * 75 / 5;
    }

    onClick() {
        this.ratingClicked.emit(`Movie rating now from child rating component to Movie ${this.rating}`)
    }


}