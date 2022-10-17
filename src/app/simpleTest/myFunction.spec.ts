import { greet } from "./myFunction"

describe('My function', () => {
  it('should greet the user', () => {
    let result = greet('Hennadii');
    // expect(result).toBe('Hi Hennadii');
    expect(result).toContain('Hi Hennadii');
  });
});
