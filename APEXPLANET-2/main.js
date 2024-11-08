document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    document.getElementById('contact').style.display = 'none';
    document.getElementById('imageSection').style.display = 'block';
  });
  
  document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageUrl = document.getElementById('imageUrl').value.trim();
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Submitted Image';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
  
    img.onload = function() {
        console.log("Image loaded successfully");
        document.getElementById('imagePreview').innerHTML = '';
        document.getElementById('imagePreview').appendChild(img);
  
        // Create and append the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Image';
        removeButton.style.marginTop = '10px';
        removeButton.addEventListener('click', function() {
            removeImage();
        });
        document.getElementById('imagePreview').appendChild(removeButton);
    };
  
    img.onerror = function() {
        console.error('Image failed to load');
        alert('This image could not be loaded. Please check the URL.');
        document.getElementById('imagePreview').innerHTML = '';
    };
  
    document.getElementById('imagePreview').innerHTML = "Loading image...";
  });
  
  function removeImage() {
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('imageUrl').value = '';
  }
  