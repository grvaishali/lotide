function sumToOne(n) {
  if (i === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));