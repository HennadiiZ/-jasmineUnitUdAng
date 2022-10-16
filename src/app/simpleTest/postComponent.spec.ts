import { postComponent } from './postComponent'

describe('post Component', () => {
  it('should increase', () => {
    let postcomponent = new postComponent();

    postcomponent.like();
    expect(postcomponent.totalLikes).toBe(1);
  });
  it('should decrease', () => {

  });
});
