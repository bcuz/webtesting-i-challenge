module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let clone =  { ...item };

  if (clone.enhancement !== 20) {
    clone.enhancement++
  }

  return clone

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
