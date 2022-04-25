const skeleton = (name = "nessieSnippets") => {
  return `Hello ${name}, welcome to the skeleton repo`;
};

console.log(skeleton());

module.exports = {
  skeleton,
};
