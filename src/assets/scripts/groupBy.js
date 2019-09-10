export default function groupBy(items, key) {
  const result = items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item]
    }),
    {}
  );

  const resultFinal = [];

  for (let field in result) {
    resultFinal.push(result[field]);
  }

  return resultFinal;
}
