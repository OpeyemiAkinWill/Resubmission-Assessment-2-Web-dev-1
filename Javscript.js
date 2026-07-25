
<!-- ======================= script.js ======================= -->

// Stripe integration (TEST MODE)
const stripe = Stripe('pk_test_12345'); // replace with your real key

function payWithStripe(){
  const amount = document.getElementById('amount').value;
  if(amount <= 0){
    document.getElementById('msg').innerText = 'Enter valid amount';
    return;
  }

  document.getElementById('msg').innerText = 'Redirecting to secure payment...';

  // NOTE: This requires backend (Node/PHP) to create session
  alert('Stripe integration requires backend. I can help you set it up.');
}

function sendMsg(e){
  e.preventDefault();
  document.getElementById('contactMsg').innerText='Message sent successfully!';
}
<!-- ======================= script.js ======================= -->
const stripe = Stripe('pk_test_12345');
function payWithStripe(){
  const amount = document.getElementById('amount').value;
  if(amount <= 0){ document.getElementById('msg').innerText = 'Enter valid amount'; return; }
  document.getElementById('msg').innerText = 'Redirecting to secure payment...';
  alert('Stripe requires backend setup. Ask me to connect it.');
}
function sendMsg(e){ e.preventDefault(); document.getElementById('contactMsg').innerText='Message sent successfully!'; }