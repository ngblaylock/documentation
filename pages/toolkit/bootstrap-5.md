# Bootstrap 5

## Sass Setup

This is how I find it best to organize my custom Bootstrap 5 Sass files. Run `npm install sass bootstrap@5 -D` then set up these files:

```
scss
  | _bs-options.scss
  | _bs-setup.scss
  | _bs-variable-overrides.scss
  | site.scss
```

::: details \_bs-options.scss

Comment out any files that you don't need in your application.

```scss
// Layout & components
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/tables";
@import "../node_modules/bootstrap/scss/forms";
@import "../node_modules/bootstrap/scss/buttons";
@import "../node_modules/bootstrap/scss/transitions";
@import "../node_modules/bootstrap/scss/dropdown";
@import "../node_modules/bootstrap/scss/button-group";
@import "../node_modules/bootstrap/scss/nav";
@import "../node_modules/bootstrap/scss/navbar";
@import "../node_modules/bootstrap/scss/card";
@import "../node_modules/bootstrap/scss/accordion";
@import "../node_modules/bootstrap/scss/breadcrumb";
@import "../node_modules/bootstrap/scss/pagination";
@import "../node_modules/bootstrap/scss/badge";
@import "../node_modules/bootstrap/scss/alert";
@import "../node_modules/bootstrap/scss/progress";
@import "../node_modules/bootstrap/scss/list-group";
@import "../node_modules/bootstrap/scss/close";
@import "../node_modules/bootstrap/scss/toasts";
@import "../node_modules/bootstrap/scss/modal";
@import "../node_modules/bootstrap/scss/tooltip";
@import "../node_modules/bootstrap/scss/popover";
@import "../node_modules/bootstrap/scss/carousel";
@import "../node_modules/bootstrap/scss/spinners";
@import "../node_modules/bootstrap/scss/offcanvas";
@import "../node_modules/bootstrap/scss/placeholders";

// Helpers
@import "../node_modules/bootstrap/scss/helpers";

// Utilities
@import "../node_modules/bootstrap/scss/utilities/api";
// scss-docs-end import-stack
```

:::

::: details \_bs-setup.scss

Compiling these files without the `bs-options` will only have the banner comment.

```scss
@import "../node_modules/bootstrap/scss/mixins/banner";
@include bsBanner("");

// Configuration
@import "../node_modules/bootstrap/scss/functions";

@import "bs-variable-overrides";

@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/variables-dark";

@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/utilities";

$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    )
  )
);

$theme-colors: map-remove($theme-colors, "info", "light", "dark");
```

:::

::: details \_bs-variable-overrides.scss

```scss
$enable-negative-margins: true;

$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
  6: $spacer * 4.5,
  7: $spacer * 6,
);

```

:::

::: details site.scss

```scss
@import 'bs-setup';
@import 'bs-options';

// Any other project specific styles go here. Import files as needed for organization.
```

:::
