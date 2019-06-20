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

  let clone =  { ...item };

  if (clone.enhancement < 15) {
    clone.durability -= 5
  } 
  
  if (clone.enhancement >= 15) {
    clone.durability -= 10
  } 
  
  if (clone.enhancement > 16 ) {
    clone.enhancement -= 1
  }

  return clone
}

function repair(item) {
  let clone =  { ...item };

  clone.durability = 100

  return clone
}

function get(item) {
  let clone =  { ...item };

  if (clone.enhancement > 0) {
    clone.name = `[+${clone.enhancement}] ${clone.name}`
  }

  return clone
}
