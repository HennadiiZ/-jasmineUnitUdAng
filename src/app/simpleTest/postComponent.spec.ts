import { postComponent } from './postComponent'

describe('post Component', () => {
  let postcomponent: postComponent | null;

  // only once
  // before -> setup
  // after -> teardown

  beforeAll(() => {});

  afterAll(() => {
    postcomponent = null;
  });

  // every time for a spec
  beforeEach(() => {
    postcomponent = new postComponent();
    postcomponent.totalLikes = 3;
  });

  afterEach(() => {});



  //Arrange


  it('should increase', () => {
    //Act
    postcomponent!.like();
    //Assert
    expect(postcomponent!.totalLikes).toBe(4);
  });
  it('should decrease', () => {
    postcomponent!.disLike();
    expect(postcomponent!.totalLikes).toBe(2);
  });
});
