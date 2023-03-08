const nesima_raizq = (num, fim = num) => {
  if (fim == 0) {
    return 0;
  }
  return num + nesima_raizq(num, fim - 1);
}

console.log(nesima_raizq(7850))