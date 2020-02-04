import * as THREE from 'three';
import TnObject from './base';

export default class Circle extends TnObject {
   center : THREE.Vector2;
   radius : number;
}

export class Line extends TnObject {
   p1 : THREE.Vector2;
   p2 : THREE.Vector2;
}
