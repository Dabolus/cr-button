/**
 * `cr-button`
 * A Clash Royale styled button for Polymer 2.
 *
 * Example:
 *
 * ```html
 * <cr-button>Normal</cr-button>
 * <cr-button success>Success</cr-button>
 * <cr-button info>Info</cr-button>
 * <cr-button error>Error</cr-button>
 * <cr-button disabled>Disabled</cr-button>
 * ```
 *
 * View demo for more examples.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class CRButton extends HTMLButtonElement {
  /**
   * If true, the button is styled as a green (success) button.
   */
  public get success(): boolean {
    return this.hasAttribute('success');
  }

  public set success(val: boolean) {
    if (val) {
      this.setAttribute('success', '');
    } else {
      this.removeAttribute('success');
    }
  }
  /**
   * If true, the button is styled as a blue (info) button.
   */
  public get info(): boolean {
    return this.hasAttribute('info');
  }

  public set info(val: boolean) {
    if (val) {
      this.setAttribute('info', '');
    } else {
      this.removeAttribute('info');
    }
  }
  /**
   * If true, the button is styled as a red (error) button.
   */
  public get error(): boolean {
    return this.hasAttribute('error');
  }

  public set error(val: boolean) {
    if (val) {
      this.setAttribute('error', '');
    } else {
      this.removeAttribute('error');
    }
  }
  /**
   * If true, the user cannot interact with this button.
   *
   * A disabled button is represented as a grayed out button with a `not-allowed` cursor on hover.
   */
  public get disabled(): boolean {
    return this.hasAttribute('disabled');
  }

  public set disabled(val: boolean) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }
  /**
   * If true, the button is represented as a smaller button.
   */
  public get small(): boolean {
    return this.hasAttribute('small');
  }

  public set small(val: boolean) {
    if (val) {
      this.setAttribute('small', '');
    } else {
      this.removeAttribute('small');
    }
  }
  /**
   * If true, the button is represented as a bigger button.
   */
  public get large(): boolean {
    return this.hasAttribute('large');
  }

  public set large(val: boolean) {
    if (val) {
      this.setAttribute('large', '');
    } else {
      this.removeAttribute('large');
    }
  }

  private readonly _template: HTMLTemplateElement;

  constructor() {
    super();

    this._template = document.createElement('template');
    this._template.innerHTML = `
      <style>
        :host {
          display: inline-block;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          z-index: 0;
          cursor: pointer;
          text-align: center;
        }

        :host([disabled]) {
          cursor: not-allowed;
          pointer-events: none;
        }

        #layer1 {
          -webkit-border-radius: 11px;
          -moz-border-radius: 11px;
          border-radius: 11px;
          height: 72px;
          background: black;
          -webkit-box-shadow: 0 11px 2px #301c09;
          -moz-box-shadow: 0 11px 2px #301c09;
          box-shadow: 0 11px 2px #301c09;
          padding-top: 1px;
          transition: .075s transform;
        }

        :host([small]) #layer1 {
          height: 48px;
        }

        :host([large]) #layer1 {
          height: 96px;
        }

        :host([active]) #layer1, #layer1:active {
          transform: scale(.95);
        }

        #layer2 {
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          width: calc(100% - 6px);
          height: calc(100% - 4px);
          margin-top: 2px;
          margin-left: 3px;
          background: #FDA80D;
          -webkit-box-shadow: 0 9px 0 #af6b06;
          -moz-box-shadow: 0 9px 0 #af6b06;
          box-shadow: 0 9px 0 #af6b06;
          padding-top: 1px
        }

        :host([success]) #layer2 {
          background: #09cc48;
          -webkit-box-shadow: 0 9px 0 #0d8f23;
          -moz-box-shadow: 0 9px 0 #0d8f23;
          box-shadow: 0 9px 0 #0d8f23;
        }

        :host([info]) #layer2 {
          background: #2199ff;
          -webkit-box-shadow: 0 9px 0 #004fa5;
          -moz-box-shadow: 0 9px 0 #004fa5;
          box-shadow: 0 9px 0 #004fa5;
        }

        :host([error]) #layer2 {
          background: #fc3632;
          -webkit-box-shadow: 0 9px 0 #9c1814;
          -moz-box-shadow: 0 9px 0 #9c1814;
          box-shadow: 0 9px 0 #9c1814;
        }

        :host([disabled]) #layer2 {
          background: #858585;
          -webkit-box-shadow: 0 9px 0 #5a5a5a;
          -moz-box-shadow: 0 9px 0 #5a5a5a;
          box-shadow: 0 9px 0 #5a5a5a;
        }

        #layer3 {
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          width: calc(100% - 2px);
          height: calc(100% - 8px);
          margin-top: 4px;
          margin-left: 1px;
          -webkit-box-shadow: 0 -4px 5px 0 #ffdc33;
          -moz-box-shadow: 0 -4px 5px 0 #ffdc33;
          box-shadow: 0 -4px 5px 0 #ffdc33;
        }

        :host([success]) #layer3 {
          -webkit-box-shadow: 0 -4px 5px 0 #60da61;
          -moz-box-shadow: 0 -4px 5px 0 #60da61;
          box-shadow: 0 -4px 5px 0 #60da61;
        }

        :host([info]) #layer3 {
          -webkit-box-shadow: 0 -4px 5px 0 #3ebaff;
          -moz-box-shadow: 0 -4px 5px 0 #3ebaff;
          box-shadow: 0 -4px 5px 0 #3ebaff;
        }

        :host([error]) #layer3 {
          -webkit-box-shadow: 0 -4px 5px 0 #fe5970;
          -moz-box-shadow: 0 -4px 5px 0 #fe5970;
          box-shadow: 0 -4px 5px 0 #fe5970;
        }

        :host([disabled]) #layer3 {
          -webkit-box-shadow: 0 -4px 5px 0 #999;
          -moz-box-shadow: 0 -4px 5px 0 #999;
          box-shadow: 0 -4px 5px 0 #999;
        }

        #layer4 {
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          margin-top: 0;
          margin-left: 5px;
          width: calc(100% - 10px);
          height: calc(100% - 6px);
          padding-top: 1px;
          background: #ffbb2a;
          -webkit-box-shadow: 0 4px 3px 0 #fe8906;
          -moz-box-shadow: 0 4px 3px 0 #fe8906;
          box-shadow: 0 4px 3px 0 #fe8906;
        }

        :host([success]) #layer4 {
          background: #30ed45;
          -webkit-box-shadow: 0 4px 3px 0 #25d039;
          -moz-box-shadow: 0 4px 3px 0 #25d039;
          box-shadow: 0 4px 3px 0 #25d039;
        }

        :host([info]) #layer4 {
          background: #4cadff;
          -webkit-box-shadow: 0 4px 3px 0 #2181fc;
          -moz-box-shadow: 0 4px 3px 0 #2181fc;
          box-shadow: 0 4px 3px 0 #2181fc;
        }

        :host([error]) #layer4 {
          background: #fc4262;
          -webkit-box-shadow: 0 4px 3px 0 #e42625;
          -moz-box-shadow: 0 4px 3px 0 #e42625;
          box-shadow: 0 4px 3px 0 #e42625;
        }

        :host([disabled]) #layer4 {
          background: #949494;
          -webkit-box-shadow: 0 4px 3px 0 #828282;
          -moz-box-shadow: 0 4px 3px 0 #828282;
          box-shadow: 0 4px 3px 0 #828282;
        }

        #layer5 {
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          margin-top: 4px;
          margin-left: 3px;
          width: calc(100% - 6px);
          height: 45%;
          background: #ffd053;
        }

        :host([success]) #layer5 {
          background: #50ff65;
        }

        :host([info]) #layer5 {
          background: #67bcff;
        }

        :host([error]) #layer5 {
          background: #f66;
        }

        :host([disabled]) #layer5 {
          background: #a9a9a9;
        }

        #shining {
          border-radius: 45%;
          float: right;
          margin-right: 1px;
          width: 7px;
          height: 9px;
          background: #fff1b6;
        }

        :host([success]) #shining, :host([info]) #shining {
          background: #D9ffff;
        }

        :host([error]) #shining {
          background: #ffc8c8;
        }

        :host([disabled]) #shining {
          background: #dadada;
        }

        #text {
          font-family: 'Supercell Magic', sans-serif;
          font-size: 24px;
          line-height: 48px;
          margin: 0 24px 0 8px;
          text-shadow: -1px -1px 0 #582e00,
          1px -1px 0 #582e00,
          -1px 3px 0 #582e00,
          1px 3px 0 #582e00;
          color: #ffc;
          display: inline;
        }

        :host([small]) #text {
          font-size: 18px;
          line-height: 24px;
          margin: 0 16px 0 8px;
        }

        :host([large]) #text {
          font-size: 28px;
          line-height: 70px;
          margin: 0 48px 0 8px;
        }

        :host([success]) #text {
          text-shadow: -1px -1px 0 #005f00,
          1px -1px 0 #005f00,
          -1px 3px 0 #005f00,
          1px 3px 0 #005f00;
          color: #fefefe;
        }

        :host([info]) #text {
          text-shadow: -1px -1px 0 #002f83,
          1px -1px 0 #002f83,
          -1px 3px 0 #002f83,
          1px 3px 0 #002f83;
          color: #fefefe;
        }

        :host([error]) #text {
          text-shadow: -1px -1px 0 #900,
          1px -1px 0 #900,
          -1px 3px 0 #900,
          1px 3px 0 #900;
          color: #ffc;
        }

        :host([disabled]) #text {
          text-shadow: -1px -1px 0 #2c2c2c,
          1px -1px 0 #2c2c2c,
          -1px 3px 0 #2c2c2c,
          1px 3px 0 #2c2c2c;
          color: #fefefe;
        }
      </style>

      <div id="layer1">
        <div id="layer2">
          <div id="layer3">
            <div id="layer4">
              <div id="layer5">
                <div id="shining"></div>
                <div id="text">
                  <slot></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this._template.content.cloneNode(true));
  }
}

window.customElements.define('cr-button', CRButton, { extends: 'button' });
