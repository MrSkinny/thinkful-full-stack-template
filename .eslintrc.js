module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "import/no-extraneous-dependencies": [
            "warn", {
                "devDependencies": true, 
                "optionalDependencies": false, 
                "peerDependencies": false
            }
        ],
        "arrow-body-style": 1
    }
};