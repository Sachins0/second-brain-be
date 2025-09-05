export function random(len: number) {
  let options = "sdfasdhdfahkjdansfadcsmhfiads";
  let length = options.length;
  let ans = "";
  
  for (let i = 0; i < len; i++) { // Fixed: should be len, not length
    ans += options[Math.floor(Math.random() * length)];
  }
  
  return ans;
}
