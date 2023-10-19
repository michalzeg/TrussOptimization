export default class Material {
  static get default(): Material {
    return new Material(355);
  }
  yieldStress: number;

  constructor(yieldStress: number) {
    this.yieldStress = yieldStress;
  }
}
