// simple subclass of Range
function Span(start, span){
  if(span >= 0){
    this.from = start;
    this.to = start + span;
  }else{
    this.to = start;
    this.from = start + span;
  }
}
Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;
