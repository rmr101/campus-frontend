

export default (words)=> {
  const wordFragment = words.split(" ");
  return wordFragment
    .map(
      word => word ? word[0].toUpperCase() + word.slice(1, word.length).toLowerCase() : ""
    )
    .join(" ");
}