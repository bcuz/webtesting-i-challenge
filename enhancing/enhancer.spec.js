const enhancer = require('./enhancer.js');

let sword = {
  name: 'sword',
  durability: 25,
  enhancement: 14
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
     expect(result.enhancement).toBe(15);
     expect(result1.enhancement).toBe(20);
   })
  
  describe('fail function', () => {
   
   it('should decrease durability', () => {
    // act
    let result = enhancer.fail(sword)
    let result1 = enhancer.fail(shield)

    // assert 
     expect(result.durability).toBe(20);
     expect(result1.durability).toBe(15);
    })
    
    it('should decrease enhancement', () => {
      let result1 = enhancer.fail(shield)
      
      expect(result1.enhancement).toBe(19);

   })

  })

})