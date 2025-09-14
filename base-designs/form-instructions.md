How to Send Form Data to Make.com
Since you've built your site from scratch, you'll need a little JavaScript to capture the form submission and send it to the Make.com webhook URL.

HTML (Example Form):
Give your form an ID and ensure your inputs have name attributes.
<form id="contactForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Sign Up</button>
</form>
<p id="formMessage"></p>


JavaScript (The Magic):
This script listens for the form submission, prevents the default browser refresh, and sends the data to your webhook using the fetch API.
document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the default form submission behavior (page reload)
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const formMessage = document.getElementById('formMessage');

  // The unique URL you get from the Make.com Webhook module
  const webhookUrl = 'https://hook.make.com/your-unique-webhook-url';

  // Show a loading message
  formMessage.textContent = 'Sending...';
  formMessage.style.color = 'black';


  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      // The webhook received the data successfully
      formMessage.textContent = 'Thank you for signing up!';
      formMessage.style.color = 'green';
      form.reset(); // Clear the form fields
    } else {
      // The webhook returned an error
      throw new Error('Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    formMessage.textContent = 'Error: Could not submit the form.';
    formMessage.style.color = 'red';
  });
});