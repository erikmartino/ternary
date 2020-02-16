import * as THREE from 'three';
import {TnObject} from './base';

export class Circle extends TnObject {
    constructor(center: THREE.Vector2, radius: number) {
        super();
        this.center = center;
        this.radius = radius;
    }

    center: THREE.Vector2;
    radius: number;
}

export class Line extends TnObject {
    constructor(p1: THREE.Vector2,
                p2: THREE.Vector2) {
        super();
        this.p1 = p1;
        this.p2 = p2;
    }

    p1: THREE.Vector2;
    p2: THREE.Vector2;
}
