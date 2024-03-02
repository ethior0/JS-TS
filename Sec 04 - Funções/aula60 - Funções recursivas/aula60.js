// Função que se chama de volta
// - existe um limite...
function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);