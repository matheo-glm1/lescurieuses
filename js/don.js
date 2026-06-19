let currentAmount = 25;
let currentFreq = 'mois';
 
function setFreq(btn, freq) {
  document.querySelectorAll('.freq-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFreq = freq;
  updateLabels();
}
 
function selectAmount(btn, amount) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  currentAmount = amount;
  document.getElementById('customInput').value = '';
  updateLabels();
  updateImpact();
}
 
function setCustomAmount(val) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
  currentAmount = parseFloat(val) || 0;
  updateLabels();
  updateImpact();
}
 
function updateLabels() {
  document.getElementById('previewAmount').textContent = currentAmount + ' €';
  document.getElementById('previewFreq').textContent = currentFreq === 'unique' ? 'don unique' : `par ${currentFreq}`;
  document.getElementById('btnAmount').textContent = `${currentAmount} €`;
 
  const freqStr = currentFreq === 'unique' ? '' : ` / ${currentFreq}`;
  document.querySelector('.btn-primary').textContent = `Faire un don de ${currentAmount} €${freqStr}`;
 
  const freqShort = currentFreq === 'unique' ? 'une fois' : `par ${currentFreq}`;
  document.querySelectorAll('.amount-btn small').forEach(l => l.textContent = freqShort);
}
 
function updateImpact() {
  const items = document.querySelectorAll('.impact-row');
  const thresholds = [0, 0, 50, 200];
  items.forEach((row, i) => {
    const monthly = currentFreq === 'an' ? currentAmount / 12 : currentAmount;
    if (monthly >= thresholds[i]) {
      row.classList.add('unlocked');
      row.classList.remove('locked');
      if (!row.querySelector('.unlock-badge')) {
        const badge = document.createElement('span');
        badge.className = 'unlock-badge';
        badge.textContent = '✓';
        row.appendChild(badge);
      }
    } else {
      row.classList.remove('unlocked');
      row.classList.add('locked');
      const badge = row.querySelector('.unlock-badge');
      if (badge) badge.remove();
    }
  });
}
 
function submitDon() {
  // Placeholder — à connecter à Stripe, HelloAsso, etc.
  alert(`Merci ! Vous serez redirigé vers notre plateforme de paiement sécurisée.`);
}
 
updateImpact();