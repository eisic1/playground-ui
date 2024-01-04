import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-openai-playground',
  templateUrl: './openai-playground.component.html',
  styleUrls: ['./openai-playground.component.css']
})
export class OpenaiPlaygroundComponent {
  content: string = '';

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

  runSubmit(){}

  copyResult(){}

  clearEditor(){}
}
