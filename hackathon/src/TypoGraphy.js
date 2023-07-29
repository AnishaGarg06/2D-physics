class TypoGraphy {
  constructor(x, y, size, letter, Instance) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.stickDistance = this.size;
    this.iterations = 50;
    
    // E
    this.E = [
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0]
    ]

    // S
    this.S = [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0]
    ]

    
    // U
    this.U = [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0]
    ]

    // N
    this.N = [
      [0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1, 1],
      [1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 1]
    ]

    // R
    this.R = [
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0]
    ]

    // L
    this.L = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ]

    //H
    this.H = [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1]
    ]

    //O
    this.O = [
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0]
    ]

    this.T = [
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ]

    this.letters = {
      
      E: this.E,
      S: this.S,
      L: this.L,
      H: this.H,
      O: this.O,
      T: this.T,
    }


    let gridArray = this.letters[letter];

    this.text = new Entity(this.iterations, Instance);

    for (let x = 0; x < gridArray.length; x++) {
      for (let y = 0; y < gridArray[x].length; y++) {
        if (gridArray[y][x] == 1) {
          let p = new Point(this.x + x * this.size, this.y + y * this.size);
          p.setRadius(2);
          this.text.addPoint(p);
        }
      }
    }

    // join
    for (let i = 0; i < this.text.points.length; i++) {
      for (let j = 0; j < this.text.points.length; j++) {
        if (this.text.points[i] == this.text.points[j]) break;
        let d = this.text.points[i].pos.dist(this.text.points[j].pos);

        if (d > 0 && d < this.size + this.stickDistance) {
          this.text.addStick(i, j);
        }
      }
    }
  }
}

export default TypoGraphy;