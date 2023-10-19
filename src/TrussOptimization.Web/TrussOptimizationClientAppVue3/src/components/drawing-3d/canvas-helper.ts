export class CanvasHelper {
  // tslint:disable-next-line:variable-name
  private _canvas: HTMLElement;
  // tslint:disable-next-line:variable-name
  private _widthHeightRatio: number;

  // tslint:disable-next-line:variable-name
  private _width!: number;
  // tslint:disable-next-line:variable-name
  private _height!: number;

  constructor(canvas: HTMLElement, widthHeightRatio: number) {
    this._canvas = canvas;
    this._widthHeightRatio = widthHeightRatio;

    this.refresh();
  }

  public refresh(): void {
    this._canvas.setAttribute(
      "style",
      "height:" +
        (this._canvas.offsetWidth / this._widthHeightRatio).toFixed(0) +
        "px"
    );
    this._width = this._canvas.clientWidth;
    this._height = this._canvas.clientHeight;
  }

  get widthHeightRatio(): number {
    return this._widthHeightRatio;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
}
