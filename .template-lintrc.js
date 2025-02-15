module.exports = {
    extends: "recommended",

    rules: {
        'no-forbidden-elements': ['meta', 'html', 'script'],
        'no-implicit-this': {allow: ['now', 'site-icon-style', 'accent-color-background']},
        'no-inline-styles': false
    }
};
