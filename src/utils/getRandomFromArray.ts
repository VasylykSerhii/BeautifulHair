const getRandom = <T>(arr: T[], n: number) => {
  const result = new Array(n);
  let len = arr.length;
  let total = n;
  const taken = new Array(len);

  if (total > len) {
    return [...arr];
  }

  while (total > 0) {
    const x = Math.floor(Math.random() * len);
    result[total] = arr[x in taken ? taken[x] : x];
    len -= 1;
    taken[x] = len in taken ? taken[len] : len;
    total -= 1;
  }
  return result;
};

export default getRandom;
