function fibo(n) {
  if (n < 2) return n;
  ans = fibo(n - 1) + fibo(n - 2);
  console.log(ans);
  return ans;
}
console.log(0);
console.log(1);
fibo(10);
