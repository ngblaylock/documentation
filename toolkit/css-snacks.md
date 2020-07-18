# CSS Snacks

## Bootstrap 4 Raw Boilerplate

Here is a Bootstrap 4 starter template with Font Awesome 5

``` html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Bootstrap 4 Template</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <i class="fab fa-bootstrap fa-5x"></i>
                <h1>Hello Bootstrap 4!</h1>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
</body>

</html>
```

## Bootstrap 4 Sass Variables

``` scss
// Use this Sass variable to stop the container from jumping around
$container-max-widths: (
  sm: 1170px,
  md: 1170px,
  lg: 1170px,
  xl: 1170px
);

// Change the default spacers to give a broader range and more accurate spacing options.
$spacer: 1rem;
$spacers: ();
$spacers: map-merge(
  (
    0: 0,                // 0px
    1: ($spacer * .375), // 6px
    2: ($spacer * .75),  // 12px
    3: ($spacer * 1),    // 16px
    4: ($spacer * 1.25), // 20px
    5: ($spacer * 2),    // 32px
    6: ($spacer * 4)     // 64px
  ),
  $spacers
);
```