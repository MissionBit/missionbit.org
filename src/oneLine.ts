function oneLine(
  strs: TemplateStringsArray,
  ...placeholders: unknown[]
): string {
  // Build the string as normal, combining all the strings and placeholders:
  let result = "";
  let i = 0;
  for (const str of strs) {
    result += str + (placeholders[i] ?? "");
    i += 1;
  }
  return result.trim().replace(/\s\s+/g, " ");
}

export default oneLine;
