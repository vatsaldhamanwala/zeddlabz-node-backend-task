export function findCommonMembers(arr1, arr2) {
  return arr1.filter((member) => arr2.includes(member));
}
