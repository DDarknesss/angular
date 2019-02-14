import { NgObjectPipe } from './ng-object.pipe';

describe('NgObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new NgObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
