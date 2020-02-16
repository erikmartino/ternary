function genid() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

export class TnObject {
    constructor() {
        this.id = genid()
    }

    id: string
}

export class TnFigure extends TnObject {

}

export class TnConstraint extends TnObject {

};

