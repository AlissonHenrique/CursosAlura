import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { keyboardMamagedItemDirective } from './keyboard-managed-item.directive';

@Directive({ selector: '[appKm]' })

export class keyboardMamagerDirective {
  constructor() { }
  @ContentChildren(keyboardMamagedItemDirective) public items: QueryList<keyboardMamagedItemDirective> = null
  @HostListener('keyup', ['$event'])
  public managKey(event: KeyboardEvent){

    switch (event.key){
      case 'ArrowUp':
        this.movieFocus(ArrowDirection.RIGHT).focus()
        break;
      case 'ArrowDown':
        this.movieFocus(ArrowDirection.LEFT).focus()
        break;
      case 'ArrowLeft':
        this.movieFocus(ArrowDirection.LEFT).focus()
        break;
      case 'ArrowRight':
        this.movieFocus(ArrowDirection.RIGHT).focus()
        break;

    }
  }

  public movieFocus(direction:ArrowDirection):keyboardMamagedItemDirective {
    const items = this.items.toArray()
    const currentSelectedIdex = items.findIndex(item => item.isFocused())
    const targetElementFocus = items[currentSelectedIdex + direction]

    if(targetElementFocus){
      return targetElementFocus
    }

    return direction === ArrowDirection.LEFT
    ? items[items.length -1]
    : items[0]
  }
}
enum ArrowDirection {
LEFT = -1,
RIGHT = 1
}
