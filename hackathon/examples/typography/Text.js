class Text {
  constructor(alphabets, x, y, fontsize, verlyInstance) {
    this.alphabets = alphabets.toUpperCase().split('');
    this.x = x;
    this.y = y;
    this.fontsize = fontsize;
    this.words = [];
    this.iterations = 50;

    this.gap = 0;
    this.entity = new Entity(this.iterations, verlyInstance);
    for (let i = 0; i < this.alphabets.length; i++) {
      let word = new TypoGraphy(this.x + (this.gap), this.y, this.fontsize, this.alphabets[i]);
      this.words.push(word);
      this.gap += 110;
    }

    this.entity = this.join.apply(this.entity, this.words);
  }


  join(...args) {
    let points = [];
    let sticks = [];

    for (let i = 0; i < args.length; i++) {
      points.push(args[i].text.points);
      sticks.push(args[i].text.sticks);
    }

    points = [].concat.apply([], points);
    sticks = [].concat.apply([], sticks);

    this.points = points;
    this.sticks = sticks;

    return this;
  }
}