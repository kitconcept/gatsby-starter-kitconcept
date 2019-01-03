# Semantic Theming

Gatsby will build the theme using the `theme.config` in here and using the site
theme local to the `theme` directory.

There's a demo `theme/globals/site.variables` example that changes the default
font family to `Poppins`. The default theme is used (we could even use
Pastanaga if we wanted, we only had to load it properly on the `theme.config`
declaration and change the components theme definition(s) to that.

Use `custom.less` file to add there your custom style class definitions. Extend
it from `site.overrides` as required if you want to spread your own styling
into different files.
