function greet(name) {
  if (name[name.length - 1] === "!") {
    const screamGreeting = `Hello ${name.slice(0, -1)}. Why are we screaming?`;
    return screamGreeting.toUpperCase();
  } else {
    return `Hello ${name}.`;
  }
}

console.log(greet("Bennie"));
