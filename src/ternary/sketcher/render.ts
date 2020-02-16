import {Circle, Line} from './circle';
import * as THREE from 'three';

interface GeometryRenderer<T> {
    geometry(t: T): THREE.Geometry;
}

interface MaterialRenderer<T> {
    material(t: T): THREE.Material;
}

interface MeshRenderer<T> {
    mesh(t: T): THREE.Mesh;
}

abstract class AbstractRenderer<T> implements MeshRenderer<T>, GeometryRenderer<T>, MaterialRenderer<T> {
    mesh(t: T): THREE.Mesh {
        return new THREE.Mesh(this.geometry(t), this.material(t));
    }

    abstract geometry(t: T): THREE.Geometry;

    abstract material(t: T): THREE.Material;

}

class CircleRenderer extends AbstractRenderer<Circle> {
    geometry(c: Circle): THREE.Geometry {
        return new THREE.CircleGeometry(c.radius, 10);
    }

    material(t: Circle): THREE.Material {
        return new THREE.MeshNormalMaterial();
    }
}

class LineRenderer extends AbstractRenderer<Line> {
    geometry(c: Line): THREE.Geometry {
        var g: THREE.Geometry = new THREE.Geometry();
        g.setFromPoints([new THREE.Vector3(c.p1.x, c.p1.y, 0), new THREE.Vector3(c.p2.x, c.p2.y, 0)]);
        return g
    }

    material(t: Line): THREE.Material {
        return new THREE.LineBasicMaterial({color: 0x0000ff});
    }
}
