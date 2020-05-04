function fromKeyMap<K extends number | symbol | string, V>(
  keys: readonly K[],
  mapper: (key: K) => V
): { [key in K]: V } {
  const rval = {} as { [key in K]: V };
  for (const k of keys) {
    rval[k] = mapper(k);
  }
  return rval;
}

export default fromKeyMap;
