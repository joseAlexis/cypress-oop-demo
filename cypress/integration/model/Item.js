class Item {
    _id = 0;
    _name = ``;
    _price = ``;
    _description = ``;

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