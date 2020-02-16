import {TnConstraint, TnObject} from './base';

export default class Sketch {
    constructor(objects: TnObject[], constraints: TnConstraint[]) {
        this.objects = objects;
        this.constraints = constraints;
    }

    objects: TnObject[];
    constraints: TnConstraint[];
}

export var objects: TnObject[] = []