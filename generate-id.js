/**
 *  ## Generate Random ID
 *
 *  return 3bea936ec6448e897d9ae885
 */
function randomID() {
  return Array.from({ length: 6 }, () => {
    return Math.random().toString(16).slice(-4);
  }).join("");
}

console.log(randomID()); // 3bea936ec6448e897d9ae885

/**
 *  ## Generate Pattern ID
 *
 *  return 3680713d-3428-ab19-546b-f87db9efe697
 */
function patternID() {
  const pattern = [8, 4, 4, 4, 12];
  return pattern
    .map((_, i) => {
      return Math.random().toString(16).slice(-pattern[i]);
    })
    .join("-");
}

console.log(patternID()); // 3680713d-3428-ab19-546b-f87db9efe697
