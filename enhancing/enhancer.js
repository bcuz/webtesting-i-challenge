module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let clone =  { ...item };

  clone.durability = 100

  return clone
}

function get(item) {
  return { ...item };
}
