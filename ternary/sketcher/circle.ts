import TnObject from './base'
import * as THREE from 'three';

class Circle extends TnObject {
   center : THREE.Vector2;
   radius : number;
}

class Line extends TnObject {
   p1 : THREE.Vector2;
   p2 : THREE.Vector2;
}
