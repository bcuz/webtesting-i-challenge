const enhancer = require('./enhancer.js');

let sword = {
  name: 'sword',
  durability: 25,
  enhancement: 19
}
let shield = {
  name: 'shield',
  durability: 25,
  enhancement: 20
}

describe('enhancing system', () => {

  it('should restore durability', () => {
    // arrange. mock data

    // act
    let result = enhancer.repair(sword)

    // assert 
     expect(result.durability).toBe(100);
   })
  
   it('should successfully enhance', () => {
    // act
    let result = enhancer.succeed(sword)
    let result1 = enhancer.succeed(shield)

    // assert 
     expect(result.enhancement).toBe(20);
     expect(result1.enhancement).toBe(20);
   })

})