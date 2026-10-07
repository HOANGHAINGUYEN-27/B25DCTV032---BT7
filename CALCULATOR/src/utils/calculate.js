export function calculate(expr) {
  const js = expr.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
  if (!/^[0-9+\-*/. ]+$/.test(js)) return "Error";
  try {
    const result = Function('"use strict"; return (' + js + ")")();
    if (!isFinite(result)) return "Error";
    return String(parseFloat(result.toFixed(10)));
  } catch {
    return "Error";
  }
}
