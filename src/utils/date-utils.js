export function formatDateForInput(d) {
  const dSplitted = d.split('/');
  if (dSplitted && dSplitted.length === 3) {
    return `${dSplitted[2]}-${dSplitted[1]}-${dSplitted[0]}`;
  } else {
    return '';
  }
}