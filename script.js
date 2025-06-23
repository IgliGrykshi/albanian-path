document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');
    const successMessage = contactForm.querySelector('.success-message');
    const errorMessage = contactForm.querySelector('.error-message');

    document.querySelector("#contactForm").addEventListener('submit', async function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        if (!email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        // Show loading state
        btnText.style.opacity = '0';
        spinner.style.display = 'block';
        
        // Simulate form submission with timeout (replace with your actual form handling)
        const endpoint = `https://igliauto.app.n8n.cloud/webhook/f58f778a-dca1-4e34-9c38-842f572f7c97`;
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email, request: message })
        });
    
        const responsi = await response.json();
        console.log("responsi:::", responsi);
        if (responsi.message === "Workflow was started") {
            // Hide loading state
            btnText.style.opacity = '1';
            spinner.style.display = 'none';
            // Show success message
            successMessage.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Show error message
            errorMessage.style.display = 'block';
            
            // Hide error message after 5 seconds
            setTimeout(function() {
                errorMessage.style.display = 'none';
            }, 5000);
        }
    })
});