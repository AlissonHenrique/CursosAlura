import { Component, Input, OnInit, Output,EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from './services/unique.id.service'

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers:[
    {  provide:NG_VALUE_ACCESSOR,
       multi: true,
       useExisting: forwardRef(() => YesNoButtonGroupComponent),
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() disabled: boolean = false
  @Input() public value: string = null
  @Input() public label: string = ''
  @Output() public valueChange = new EventEmitter<string>()
  public id:string = ''
  public options = YesNoButtonGroupOptions
  public onChange = (value: string)=>{}
  public onTouched = ()=>{}

  constructor(uniqueIdService: UniqueIdService){
    this.id =  uniqueIdService.generateUniqueIdWhitPrefix('yes-no-button')
  }

  ngOnInit(): void {
  }


  public activate(value: string){
    this.writeValue(value)
  }

  writeValue(value: string): void {
   this.value = value
   this.onChange(this.value)
   this.valueChange.emit(this.value)
  }
  registerOnChange(fn: (value:string)=> void): void {
   this.onChange = fn
  }
  registerOnTouched(fn: ()=>void): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}

enum YesNoButtonGroupOptions{
  YES = 'YES',
  NO = 'NO'
}
