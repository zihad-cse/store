<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <!-- <link rel="stylesheet" href="css/vendor/twbs/bootstrap/dist/css/bootstrap.min.css">
      -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Home</title>
</head>

<body>
    <section class="d-none d-sm-none d-lg-block d-md-block" id="top-nav">
        <?php include_once "modules/top-nav.php" ?>
    </section>
    
    <section id="main-content">
        <div class="main-content-wrapper">
            <?php include_once "modules/right-sidebar.php"; ?>
            <?php include_once "modules/main-content.php"; ?>
            <?php include_once "modules/left-sidebar.php"; ?>
        </div>
    </section>
    <!-- <script src="css/vendor/twbs/bootstrap/dist/js/bootstrap.min.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>

</html>