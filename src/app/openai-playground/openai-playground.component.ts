import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-openai-playground',
  templateUrl: './openai-playground.component.html',
  styleUrls: ['./openai-playground.component.css'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [animate(300, style({ opacity: 0 }))]),
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class OpenaiPlaygroundComponent {
  content: string = '';
  resultText: string = '';

  get wordCount(): number {
    let count = 0;
    if (this.content.length === 0) return count;
    count = this.content.trim().split(/\s+/).length;
    return count;
  }

  get tokenCount(): number {
    return Math.round(this.content.length / 4);
  }

  get calculateRequestPrice(): any {
    let price = 0;
    /*if (this._token > 0) {
      price = (this._token + this._responseLengthValue) * this.enginePrice[this.selectedEngineName] / 1000;
    }*/
    const text = '$' + (price === 0 ? 0 : price.toFixed(4));
    return text;
  }

  runSubmit(){
    this.resultText = 'Create an API that returns a result!';
  }

  copyResult(){
    if (this.resultText) {
      this.resultText.trim();
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = this.resultText;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      //this.toastrService.show('Text copied into clipboard', 'copied', {status: 'success', duration: 8000});
    }
  }

  clearEditor(){
    this.content = '';
    this.resultText = '';
  }
}
