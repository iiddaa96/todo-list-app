module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // Användning av console.log.
    // Förbättring: Undvik användning av console.log i produktionskoden.
    "no-console": "warning",

    // Använd icke-strikta jämförelseoperatorer
    // Förbättring: Använd alltid strikt jämförelseoperator (=== eller !==) för att undvika oväntade beteenden.
    eqeqeq: "warn",

    // Användning av icke-använda variabler.
    // Förbättring: Ta bort eller använd variabler som deklarerats men inte används.
    "no-unused-vars": "error",

    // använda alert, confirm, och prompt.
    // Förbättring: Undvik användning av dessa metoder för att förhindra att användaren distraheras eller irriteras.
    "no-alert": "warn",

    // Användning av dubbla citattecken i stället för enkla citattecken.
    // Förbättring: Standardisera användning av citattecken för att öka konsistens.
    quotes: ["error", "double"],
  },
};
