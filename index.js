import("./class_world").then(({Point}) => {
  const p1 = Point.new(10, 10);
  console.log(p1.get_x(), p1.get_y());
  const p2 = Point.new(3, 3);
  p1.add(p2);
  console.log(p1.get_x(), p1.get_y());
});
