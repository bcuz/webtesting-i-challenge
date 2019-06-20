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
let cape = {
  name: 'cape',
  durability: 25,
  enhancement: 0
}

describe('enhancing system', () => {

  describe('repair function', () => {
    it('should restore durability', () => {
      // arrange. mock data

      // act
      let result = enhancer.repair(sword)

      // assert 
      expect(result.durability).toBe(100);
    })
  })
  
  describe('success function', () => {

   it('should increment enhancement if its not 20', () => {
    // act
    let result = enhancer.succeed(sword)
    let result1 = enhancer.succeed(shield)

    // assert 
     expect(result.enhancement).toBe(15);
     expect(result1.enhancement).toBe(20);
   })
  })
  
  describe('fail function', () => {
   
   it('should decrease durability', () => {
    let result = enhancer.fail(sword)
    let result1 = enhancer.fail(shield)

     expect(result.durability).toBe(20);
     expect(result1.durability).toBe(15);
    })
    
    it('should decrease enhancement when enhancement greater than 16', () => {
      let result = enhancer.fail(sword)
      let result1 = enhancer.fail(shield)
      
      expect(result.enhancement).toBe(14);
      expect(result1.enhancement).toBe(19);

   })

  })

  describe('get function', () => {
   
    it('should modify name when enhancement level is greater than 0', () => {
     let result = enhancer.get(sword)
     let result1 = enhancer.get(cape)
 
      expect(result.name).toBe('[+14] sword');
      expect(result1.name).toBe('cape');
     })    
 
   })

})