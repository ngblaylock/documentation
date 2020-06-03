# CSS Snacks

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