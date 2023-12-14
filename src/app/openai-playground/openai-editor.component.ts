import {Component, OnDestroy, AfterViewInit, Output, EventEmitter, ElementRef, Input, ViewChild} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {OpenaiEditorComponent} from './openai-editor.component';

@Component({
  selector: 'app-openai-editor',
  template: '',
})
export class OpenaiEditorComponent implements OnDestroy, AfterViewInit {

  @ViewChild('inputEditor', {static: true}) inputEditor: OpenaiEditorComponent

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;
  contentValue: string;

  @Input()
  get model(): string {
    return this.contentValue;
  }

  set model(val) {
    /*if (val) {
      val = val.replace(/(\n)/gi, '<br />');
    }*/
    this.contentValue = val;
    this.modelChange.emit(this.contentValue);
  }

// Output prop name must be Input prop name + 'Change'
// Use in your component to write an updated value back out to the parent
  @Output()
  modelChange = new EventEmitter<string>();


  constructor(
    private host: ElementRef,
    private locationStrategy: LocationStrategy,
  ) {
  }

  ngAfterViewInit() {
    tinymce.init({
      target: this.host.nativeElement,
      menubar: false,
      toolbar: false,
      inline: false,
      resize: false,
      browser_spellcheck: true,
      force_p_newlines: false,
      statusbar: false,
      forced_root_blocks: true,
      forced_root_block: '', // Needed for 3.x
      convert_newlines_to_brs: true,
      force_br_newlines: true,
      encoding: 'xml',
      format: 'xhtml',
      /*plugins: ['paste'],*/
     /* formats: {
        removeformat: [
          {selector: '*', remove : 'all', split : true, expand : false, block_expand: true, deep : true},
        ],
      },*/
      skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
      content_style: 'body { font-size: 16px;}',
      setup: editor => {
        this.editor = editor;
        /*editor.on('init', function() {
          editor.shortcuts.remove('meta+b', '', ''); // "meta" maps to Command on Mac and Ctrl on PC
        });*/
        /*editor.on('keyup', (key) => {
          console.log('key up in editor', key, editor.getContent());
          this.model = editor.getContent();
        });*/
       /* editor.on('PastePreProcess', function (e) {
          // e.content = e.content + ' foo'; // TODO - clean HTML if any

         // const res = stripTags(e.content, '<strong>,<br>,<b>');
          // e.content = res;
         // e.content = e.dom.decode(e.content);
          console.log('The modified pasted content was: ', e, e.content);
        });*/
        editor.on('keyup', () => {
      //    console.log('editor dirty', editor.getContent());
          if (this.model !== editor.getContent()) {
            this.model = editor.getContent();
          }
        });

        editor.on('PostProcess', (ed) => {
          // console.log('PostProcess change', ed);
          if (ed.content) {
            ed.content = editor.dom.decode(ed.content);

           /* ed.content = ed.content.replace(/(<br \/>)/gi, '\n');
            ed.content = ed.content.replace(/(&nbsp;)/gi, ' ');*/
          }
        });
      },
      height: '100%',
    });

    this.modelChange.subscribe((even) => {
      if (this.editor.getContent() !== even) {
    //    console.log('This is subsc', even);
       /* if (even) {
          even = even.replace(/(\n)/gi, '<br />');
        }*/
        this.editor.setContent(even);
      }
    });
  }

  runSpellCheck() {
    this.editor.execCommand('mceSpellCheck');
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
