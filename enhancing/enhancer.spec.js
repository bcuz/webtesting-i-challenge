const enhancer = require('./enhancer.js');

describe('tests', () => {

  it('restore durability', () => {
    // arrange. mock data
    let sword = {
      durability: 25
    }

    // act
    let result = enhancer.repair(sword)

    // assert 
     expect(result.durability).toBe(100);
   })

})