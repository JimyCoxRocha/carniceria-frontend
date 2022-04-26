import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  myForm!: FormGroup;
  @Input() maxNumber: number = 2;
  @Input() initialAmount: number = 1;
  @Output() counter = new EventEmitter<number>();;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      counter: [this.initialAmount, [
        Validators.required, 
        Validators.min(1), 
        Validators.pattern(/^\d+$/)]
      ]
    });

    this.counter.emit(this.initialAmount);
    this.myForm.get("counter")?.valueChanges.subscribe(x => {
      var numberPattern = /\d+/g;
      this.myForm.get("counter")?.
        setValue(
          (x.match( numberPattern ) || ['1'])
          .join(''), { emitEvent: false }
        );

      if(this.myForm.get("counter")?.value == '1')
        this.counter.emit(x);
        
        
      if(parseInt(x) <= 0){
        this.myForm.get("counter")?.
        setValue("1", { emitEvent: false });
        this.counter.emit(1);
      }

      if(parseInt(x) > this.maxNumber){
        this.myForm.get("counter")?.
        setValue(`${this.maxNumber}`, { emitEvent: false });
        this.counter.emit(this.maxNumber);
      }

    })
  }

  get isOne(){
    return (parseInt(this.myForm.get("counter")?.value) <= 1)
  }

  get isMaximun(){
    return (parseInt(this.myForm.get("counter")?.value) >= this.maxNumber)
  }

  subtractValue(event: any){
    event.preventDefault();
    this.myForm.get("counter")?.
    setValue(
      `${(parseInt(this.myForm.get("counter")?.value) - 1)}`,
      { emitEvent: true }
    );
    this.counter.emit(this.myForm.get("counter")?.value);
  }
  
  addValue(event: any){
    event.preventDefault();
    this.myForm.get("counter")?.
    setValue(
      `${(parseInt(this.myForm.get("counter")?.value) + 1)}`,
      { emitEvent: true }
    );
    this.counter.emit(this.myForm.get("counter")?.value);
  }
}
