class Item {
  // private _id: number;
  // private _name: string;
  // private _price: string;
  // private _description: string

  // constructor() { };

  constructor(
    private _id?: number,
    private _name?: string,
    private _price?: string,
    private _description?: string
  ) {}

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  get description() {
    return this._description;
  }

  set desription(description) {
    this._description = description;
  }
}

export default Item;
