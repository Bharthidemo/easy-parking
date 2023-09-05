
  var checkin = []; // Array to store the check-in status of each slot
var timers = []; // Array to store the timers for each slot
var rates = []; // Array to store the parking rates for each slot

function generateOTP() {
  let mobileNo = document.getElementById('mob').value;

  if (mobileNo.trim() !== '') {
    let lastFourDigits = mobileNo.slice(-4);
    let generatedOTP = "Your OTP: " + lastFourDigits;

    openOTPModal(generatedOTP);
  } else {
    alert("Please enter a valid mobile number.");
  }
}

function openOTPModal(otpMessage) {
  let confirmationMessage = otpMessage + "\n\nPlease enter the OTP to verify:";
  let enteredOTP = prompt(confirmationMessage);

  if (enteredOTP === null) {
    alert("OTP verification cancelled.");
  } else {
    let mobileNo = document.getElementById('mob').value;
    let lastFourDigits = mobileNo.slice(-4);

    if (enteredOTP === lastFourDigits) {
      alert('OTP Verified');
    } else {
      alert('Invalid OTP');
    }
  }
}

function closeOTPModal() {
  let modal = document.getElementById('otpModal');
  modal.style.display = 'none';
}

function bookSlot(slotNum, slotMsgId) {
  let vehicleNo = document.getElementById('EntryVh').value;
  let ownerName = document.getElementById('OwnName').value;
  let mobileNo = document.getElementById('mob').value;

  if (vehicleNo.trim() !== '' && ownerName.trim() !== '' && mobileNo.trim() !== '') {
    let entry = "Vehicle Number: " + vehicleNo + "<br>" + "Owner Name: " + ownerName + "<br>" + "Mobile Number: " + mobileNo;

    if (checkin[slotNum] === undefined) {
      alert("Booked Slot: " + slotNum);
      checkin[slotNum] = entry;
      rates[slotNum] = 0.5; // Set the parking rate for this slot (e.g., $0.5 per minute)
      document.getElementById(slotMsgId).innerHTML = entry;
      document.getElementById('EntryVh').value = "";
      document.getElementById('OwnName').value = "";
      document.getElementById('mob').value = "";
      startTimer(slotNum, slotMsgId);
    } else {
      alert("The chosen slot is already taken. Please select another slot.");
    }
  } else {
    alert("Please fill in the details.");
  }
}

function exit(slotNum, slotMsgId) {
  if (checkin[slotNum] !== undefined) {
    checkin[slotNum] = undefined;
    alert("You have exited. Slot " + slotNum + " is now available.");
    document.getElementById(slotMsgId).innerHTML = "";
    stopTimer(slotNum);
    window.location.href = "pay2.html?slot=" + slotNum;
  } else {
    alert("Slot is already free.");
  }
}

function startTimer(slotNum, slotMsgId) {
  var startTime = new Date();
  timers[slotNum] = setInterval(function () {
    updateTimer(slotNum, startTime, slotMsgId);
  }, 1000); // Update timer every second
  
  // Display the initial timer value
  updateTimer(slotNum, startTime, slotMsgId);
}

function stopTimer(slotNum) {
  clearInterval(timers[slotNum]);
}

function updateTimer(slotNum, startTime, slotMsgId) {
  var currentTime = new Date();
  var elapsedTime = currentTime - startTime;
  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);
  document.getElementById("timer" + slotNum).textContent = "Time: " + minutes + "m " + seconds + "s";

  var amount = minutes * rates[slotNum]; // Calculate amount based on the rate
  document.getElementById("amount" + slotNum).textContent = "Amount: RS " + amount.toFixed(2);
}

function displayPaymentModal(slotNum) {
  var modal = document.getElementById('paymentModal');
  var paymentAmountField = document.getElementById('paymentAmount');
  paymentAmountField.value = (rates[slotNum] * 60).toFixed(2); // Calculate amount for 1 hour

  modal.style.display = 'block';
}

function makePayment() {
  var paymentAmountField = document.getElementById('paymentAmount');
  var amount = parseFloat(paymentAmountField.value);
  
  if (!isNaN(amount) && amount > 0) {
    alert('Payment Successful. Thank you!');
    closePaymentModal();
  } else {
    alert('Please enter a valid payment amount.');
  }

}