import Circle from './circle';
import * as THREE from 'three';

interface Render<T> {
  render(t:T) : void;
}

interface Material {

}

class CircleRenderer implements Render<Circle> {
    render(c:Circle) : void {
                  
    }
}
