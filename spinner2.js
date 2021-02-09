const arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];

let x = 100;

for (const element of arr) {
  
  setTimeout(() => {
    process.stdout.write(element);
  }, x);
  x += 200;
}



