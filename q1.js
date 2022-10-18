//Q1. 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and Cone 
//with four decimal places using objects and classes.

  class Cylinder {
    constructor(cyl_height, cyl_radius) {
    this.cyl_height = cyl_height;
    this.cyl_radius = cyl_radius;
    }

    // Getter
    get getVolume() {
      return this.cyl_height * Math.PI * this.cyl_radius * this.cyl_radius;
    }

  }
  
  let obj= new Cylinder(7,2);
  console.log('Volume of Cylinder: '+obj.getVolume.toFixed(4));

/////////////////////////////////////////////////////////////

  class Sphere {
    constructor(sph_radius) {
    this.sph_radius = sph_radius;
    }

    // Getter
    get getSphere() {
        return (4/3) * Math.PI * Math.pow(this.sph_radius, 3);
    }

  }
  
  let obj1 = new Sphere(5);
  console.log('Volume of sphere: '+obj1.getSphere.toFixed(4));

  /////////////////////////////////////////////////////////////

  class Cone {
    constructor(con_radius,con_height) {
    this.con_radius = con_radius;
    this.con_height = con_height;
    }

    // Getter
    get getCone() {
        return Math.PI * this.con_radius * this.con_radius * this.con_height / 3;
    }

  }
  
  let obj2 = new Cone(3,5);
  console.log('Volume of Cone: '+obj2.getCone.toFixed(4));