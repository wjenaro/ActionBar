function whosPaying(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    return randomName + " is going to buy lunch today!";
  }
  
  // Example usage
  const namesArray = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  const result = whosPaying(namesArray);
  console.log(result); // Output: "<randomName> is going to buy lunch today!"
  