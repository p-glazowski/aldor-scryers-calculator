export function translateCurrentRep(rep: number) {
  if (rep > 41999) {
    return 'Exalted';
  }

  if (rep > 20999) {
    return 'Revered';
  }

  if (rep > 8999) {
    return 'Honored';
  }

  if (rep > 2999) {
    return 'Friendly';
  }

  return 'Neutral';
}
