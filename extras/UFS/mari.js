const fatorial = (num) => {
  if (num === 0) {
    return 1;
  }

  return num * fatorial(num - 1);
}

console.log(fatorial(5))