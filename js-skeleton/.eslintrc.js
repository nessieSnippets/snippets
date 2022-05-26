module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true,
        "jest/globals": true
    },
    "plugins": ["jest"],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "complexity": ["warn", { "max": 6 }]
    }
    // GET A COMPLEXITY RULES HERE

}
