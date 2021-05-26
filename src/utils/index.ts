export const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12}(\s*)?$/;
export const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regName = /[a-zA-Zа-яєіА-ЯЄІ0-9-_" "]{1,20}$/;

export const getRandomFromArray = <T>(arr: T[], n: number) => {
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
