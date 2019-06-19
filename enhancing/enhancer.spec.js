const enhancer = require('./enhancer.js');

let sword = {
  name: 'sword',
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

})