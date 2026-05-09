<?php
$email = isset($_REQUEST["email"]) ? htmlspecialchars($_REQUEST["email"], ENT_QUOTES, "UTF-8") : "";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SmartCalc Studio | Problem</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <main class="auth-wrap" style="--auth-image: url('contactus.jpg')">
    <section class="auth-panel">
      <h1>Problem report</h1>
      <p><?php echo $email ? "Report received from " . $email . "." : "Use the contact page to submit a problem report."; ?></p>
      <a class="btn btn-primary" href="contactus.html">Open Contact</a>
    </section>
  </main>
</body>
</html>
