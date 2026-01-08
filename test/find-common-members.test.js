import { findCommonMembers } from '../utils/find-common-members.js';
import { expect } from 'chai';

describe('findCommonMembers', () => {
  it('should return common members between two arrays', () => {
    const arr1 = ['Alice', 'Bob', 'Vatsal'];
    const arr2 = ['Bob', 'Vatsal', 'Jack'];
    const result = findCommonMembers(arr1, arr2);
    expect(result).to.deep.equal(['Bob', 'Vatsal']);
  });

  it('should return an -1 if there are no common members', () => {
    const arr1 = ['Alice', 'Bob'];
    const arr2 = ['Jack', 'David'];
    const result = findCommonMembers(arr1, arr2);
    expect(result).to.deep.equal([]);
  });

  it('should handle empty arrays', () => {
    const arr1 = [];
    const arr2 = ['Alice', 'Bob'];
    const result = findCommonMembers(arr1, arr2);
    expect(result).to.deep.equal([]);
  });
});
