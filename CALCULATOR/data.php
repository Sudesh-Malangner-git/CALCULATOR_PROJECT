<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    header("Location: home.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartCalc Studio | Data Endpoint</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <main class="auth-wrap" style="--auth-image: url('home.jpg')">
    <section class="auth-panel">
      <h1>Data endpoint</h1>
      <p>This PHP file is kept as a simple compatibility endpoint for older form actions.</p>
      <a class="btn btn-primary" href="home.html">Back to Home</a>
    </section>
  </main>
</body>
</html>
