<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bharti Engineering Workshop</title>
</head>
<body>
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bharti Engineering Workshop</title>
  <style>
      * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background: #f7f9fc;
  color: #333;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
  padding: 20px 0;
}

header {
  background-color: #004080;
  color: #fff;
  padding: 20px 0;
}

header h1 {
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 10px;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #ffcc00;
}

.section {
  padding: 40px 0;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 8px;
}

h2 {
  margin-bottom: 20px;
  color: #004080;
}

.services-list {
  list-style-type: square;
  margin-left: 20px;
  font-size: 18px;
}

form {
  max-width: 500px;
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #004080;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #003366;
}

footer {
  background-color: #00264d;
  color: #fff;
  text-align: center;
  padding: 15px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.service-item {
  background: #e8f0fe;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.service-item:hover {
  transform: translateY(-8px);
}

.service-item img {
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
}

.service-item h3 {
  margin-bottom: 10px;
  color: #003366;
}

.service-item p {
  font-size: 16px;
  color: #333;
}
  </style>
</head>
<body>
    <section id="services" class="section">
  <div class="container">
    <h2>Our Services</h2>
    <div class="services-grid">
      <div class="service-item">
        <img src="borewell-motor.jpg.jpg" alt="Borewell Motor Repair" />
        <h3>Borewell Motors Repair</h3>
        <p>Expert repair and maintenance of borewell motors to keep your water supply running smoothly.</p>
      </div>
      <div class="service-item">
        <img src="fan.jpg.webp" alt="Fan Repair" />
        <h3>Fan Repairs</h3>
        <p>Professional fan repair services to ensure optimal performance and cooling.</p>
      </div>
      <div class="service-item">
        <img src="color-machine.jpg.jpg" alt="Color Machine Repair" />
        <h3>Color Machines Repair</h3>
        <p>Reliable repairs for color machines to maintain your production quality.</p>
      </div>
      <div class="service-item">
        <img src="water-pump.jpg.webp" alt="Water Pump Repair" />
        <h3>Water Pump Repairs</h3>
        <p>Efficient water pump repair services for residential and commercial needs.</p>
      </div>
    </div>
  </div>
</section>

  <header>
    <div class="container">
      <h1>Bharti Engineering Workshop</h1>
      <nav>
        <ul id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="home" class="section">
    <div class="container">
      <h2>Welcome to Bharti Engineering Workshop</h2>
      <p>Your one-stop solution for Borwell motor repairs, fans, color machines, water pumps and more.</p>
    </div>
  </section>

  <section id="services" class="section">
    <div class="container">
      <h2>Our Services</h2>
      <ul class="services-list">
        <li><strong>Borewell Motors Repair</strong></li>
        <li>Fan Repairs</li>
        <li>Color Machines Repair</li>
        <li>Water Pump Repairs</li>
        <li>Other Electrical Equipment Repair</li>
      </ul>
    </div>
  </section>

  <section id="about" class="section">
    <div class="container">
      <h2>About Us</h2>
      <p>Bharti Engineering Workshop specializes in repairing and maintaining borewell motors, fans, water pumps, and other electrical devices with skilled professionals and quality service.</p>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" required />

        <label for="message">Message:</label>
        <textarea id="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      <p id="form-response"></p>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2025 Bharti Engineering Workshop. All rights reserved.</p>
    </div>
  </footer>

  <script>
      document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    // Normally, you would send this data to a server here.
    document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been received.`;
    document.getElementById('form-response').style.color = 'green';

    // Reset form fields
    this.reset();
  } else {
    document.getElementById('form-response').textContent = 'Please fill out all fields.';
    document.getElementById('form-response').style.color = 'red';
  }
});
  </script>
</body>
</html>

</body>
</html>

