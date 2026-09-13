# WMC – JavaScript Hausübung

**Name:** Jovana Prodanovic  
**Fach:** WMC  
**Thema:** JavaScript Exercises  
**Abgabe:** 17. September, 23:59  

## Conceptual Questions ##

### Q1. What is the difference between `let` and `const` in JavaScript?

Mit `let` erstellt man eine Variable, deren Wert später noch geändert werden kann.

Mit `const` erstellt man eine Variable, deren Wert nicht mehr neu zugewiesen werden kann.

```js
let age = 18;
age = 19;

const name = "Jovana";
// name = "Anna"; // Das würde einen Fehler geben.
```

Ich verwende normalerweise `const`, wenn sich der Wert nicht ändern soll. `let` verwende ich nur, wenn ich den Wert später ändern muss.


---

### Q2. What is the difference between `==` and `===` in JavaScript?

Mit `==` werden die Werte verglichen. JavaScript kann dabei die Datentypen automatisch umwandeln.

Mit `===` werden der Wert und der Datentyp verglichen. Es findet keine automatische Umwandlung statt.

```js
42 == "42";   // true
42 === "42";  // false
```

Bei `==` wird der String `"42"` in die Zahl `42` umgewandelt. Bei `===` ist eine Seite eine Zahl und die andere Seite ein String. Deshalb ist das Ergebnis `false`.

Ich würde normalerweise `===` verwenden, weil dieser Vergleich sicherer ist.

---

### Q3. What is the difference between `null` and `undefined` in JavaScript?

`undefined` bedeutet, dass eine Variable noch keinen Wert bekommen hat.

`null` bedeutet, dass man bewusst festlegt, dass im Moment kein Wert vorhanden ist.

```js
let city;
console.log(city); // undefined

const selectedUser = null;
console.log(selectedUser); // null
```

Bei `city` wurde kein Wert gesetzt. Bei `selectedUser` wurde absichtlich `null` gesetzt.

---

### Q4. What data types exist in JavaScript?

JavaScript hat verschiedene Datentypen:

- `string` für Text
- `number` für Zahlen
- `boolean` für `true` oder `false`
- `undefined` für einen noch nicht gesetzten Wert
- `null` für einen absichtlich leeren Wert
- `bigint` für sehr große ganze Zahlen
- `symbol` für eindeutige Werte
- `object` für komplexere Daten

```js
const name = "Jovana";            // string
const age = 20;                   // number
const isStudent = true;           // boolean
let city;                         // undefined
const selectedUser = null;        // null
const bigNumber = 123456789n;     // bigint
const person = { name: "Anna" };  // object
```

Arrays gehören auch zum Typ `object`.

---

### Q5. How to check the type of a variable in JavaScript?

Um den Datentyp einer Variable zu prüfen, kann man `typeof` verwenden.

```js
const name = "Jovana";
const age = 20;
const isStudent = true;

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
```

Bei Arrays verwende ich `Array.isArray()`, weil bei einem Array `typeof` nur `"object"` zurückgibt.

```js
const numbers =;[1][2][3]

console.log(Array.isArray(numbers)); // true
```

---

### Q6. What are primitive data types in JavaScript?

Primitive Datentypen sind einfache Werte. Sie sind keine Objekte und speichern nur einen einzelnen Wert.

Die primitiven Datentypen in JavaScript sind:

- `string`
- `number`
- `boolean`
- `undefined`
- `null`
- `bigint`
- `symbol`

Zum Beispiel sind `"Hallo"`, `42` und `true` primitive Werte.

```js
const message = "Hallo";
const number = 42;
const active = true;
```

---

### Q7. What is an `object` in JavaScript?


Ein Objekt speichert mehrere zusammengehörige Informationen. Diese Informationen heißen Eigenschaften oder Properties.

```js
const person = {
    name: "Jovana",
    age: 20,
    isStudent: true
};
```

In diesem Objekt sind `name`, `age` und `isStudent` die Eigenschaften.

Man kann auf eine Eigenschaft mit einem Punkt zugreifen:

```js
console.log(person.name); // "Jovana"
```

---

### Q8. How to create an `object` in JavaScript?


Ein Objekt wird mit geschweiften Klammern `{}` erstellt. Die Eigenschaften werden als Name und Wert geschrieben.

```js
const student = {
    name: "Jovana",
    age: 20,
    isStudent: true
};
```

Die einzelnen Eigenschaften werden mit Kommas getrennt.

Man kann Eigenschaften später ändern oder neue Eigenschaften hinzufügen.

```js
student.age = 21;
student.city = "Wiener Neustadt";
```

---

### Q9. What is a `function` in JavaScript?


Eine Funktion ist ein Codeblock, der eine bestimmte Aufgabe erledigt. Man kann sie mehrmals verwenden, ohne den gleichen Code immer wieder zu schreiben.

```js
function greet() {
    console.log("Hallo!");
}

greet();
```

Eine Funktion kann auch Werte bekommen und ein Ergebnis zurückgeben.

```js
function add(a, b) {
    return a + b;
}
```

---

### Q10. How do you define a `function` in JavaScript?


Eine Funktion wird mit dem Wort `function`, einem Namen und runden Klammern definiert.

```js
function greet(name) {
    return "Hallo, " + name;
}
```

`name` ist ein Parameter. Beim Aufrufen der Funktion kann man einen Wert übergeben.

```js
console.log(greet("Jovana")); // "Hallo, Jovana"
```

Der Wert `"Jovana"` ist in diesem Beispiel das Argument.

---

### Q11. Can a function return `undefined`? If so, how?


Ja, eine Funktion kann `undefined` zurückgeben.

Wenn eine Funktion kein `return` hat, gibt JavaScript automatisch `undefined` zurück.

```js
function sayHello() {
    console.log("Hallo");
}

console.log(sayHello()); // undefined
```

Man kann auch `return undefined` schreiben.

```js
function getValue() {
    return undefined;
}
```

---

### Q12. What is `NaN` in JavaScript?


`NaN` bedeutet „Not a Number“. Es entsteht, wenn JavaScript kein gültiges Zahlenergebnis berechnen kann.

```js
Number("Hallo"); // NaN
10 / "Apfel";    // NaN
```

Obwohl `NaN` „keine Zahl“ bedeutet, ist sein Datentyp trotzdem `number`.

```js
console.log(typeof NaN); // "number"
```

Um zu prüfen, ob ein Wert `NaN` ist, kann man `Number.isNaN()` verwenden.

```js
console.log(Number.isNaN(NaN)); // true
```

---

### Q13. How to convert a `string` to a `number` in JavaScript?


Einen String kann man mit `Number()` in eine Zahl umwandeln.

```js
const text = "42";
const number = Number(text);

console.log(number);        // 42
console.log(typeof number); // "number"
```

Wenn der Text keine gültige Zahl ist, bekommt man `NaN`.

```js
Number("Hallo"); // NaN
```

Man kann auch `parseInt()` für ganze Zahlen oder `parseFloat()` für Kommazahlen verwenden.

```js
parseInt("42.8");     // 42
parseFloat("42.8");   // 42.8
parseInt("255px");    // 255
```

## Type System ##

### Q1. What is the difference between dynamic and static typing?

In einer dynamisch typisierten Sprache wird der Datentyp einer Variable erst während der Ausführung bestimmt.

In einer statisch typisierten Sprache wird der Datentyp normalerweise schon vor der Ausführung festgelegt und überprüft.

JavaScript ist dynamisch typisiert. Eine Variable kann zuerst einen String und später eine Zahl speichern.

```js
let value = "Hallo";
value = 42;
```

Java ist zum Beispiel statisch typisiert.

```java
String value = "Hallo";
// value = 42; // Fehler
```

---

### Q2. What is the difference between weak and strong typing?


Bei einer schwach typisierten Sprache kann JavaScript verschiedene Datentypen automatisch umwandeln.

Bei einer stark typisierten Sprache werden Datentypen strenger behandelt. Werte mit unterschiedlichen Typen können nicht einfach ohne klare Umwandlung zusammen verwendet werden.

JavaScript gilt als schwach typisiert, weil es automatische Typumwandlung erlaubt.

```js
"5" * 2; // 10
```

Der String `"5"` wird hier automatisch in die Zahl `5` umgewandelt.

---

### Q3. Why in JavaScript can a variable change types? Give an example.


JavaScript ist dynamisch typisiert. Deshalb ist der Datentyp nicht fest an eine Variable gebunden.

Eine Variable kann zuerst einen Text speichern und später eine Zahl oder einen Wahrheitswert.

```js
let value = "Hallo";
console.log(typeof value); // "string"

value = 42;
console.log(typeof value); // "number"

value = true;
console.log(typeof value); // "boolean"
```

Die Variable heißt immer noch `value`, aber ihr gespeicherter Wert und ihr Datentyp haben sich geändert.

---

### Q4. Why in JavaScript can an expression change types? Give an example.


Der Datentyp eines Ausdrucks kann sich ändern, weil JavaScript bei bestimmten Operatoren Werte automatisch umwandelt.

Der Operator `+` kann Zahlen addieren oder Strings verbinden. Wenn einer der Werte ein String ist, entsteht meistens ein String.

```js
const result1 = 2 + "2";

console.log(result1);        // "22"
console.log(typeof result1); // "string"
```

Der Operator `-` erwartet dagegen Zahlen. Deshalb wird der String `"2"` automatisch in eine Zahl umgewandelt.

```js
const result2 = 2 - "2";

console.log(result2);        // 0
console.log(typeof result2); // "number"
```

---

### Q5. What are the pros and cons of allowing type coercion in JavaScript?


Ein Vorteil von automatischer Typumwandlung ist, dass man manchmal weniger Code schreiben muss.

```js
"5" * 2; // 10
```

JavaScript wandelt den String `"5"` automatisch in eine Zahl um.

Ein Nachteil ist, dass dadurch unerwartete Ergebnisse entstehen können.

```js
"5" + 2; // "52"
```

Hier verbindet JavaScript die Werte als Text, anstatt die Zahlen zu addieren.

Type Coercion kann praktisch sein, aber sie kann auch Fehler verursachen. Deshalb sollte man Datentypen bewusst prüfen und meistens `===` statt `==` verwenden.

---

### Q6. Why might strong typing be preferred in large-scale applications?


In großen Anwendungen arbeiten oft viele Personen gleichzeitig am gleichen Projekt. Dort sind klare Datentypen hilfreich, weil Fehler früher erkannt werden können.

Starke Typisierung macht den Code leichter verständlich und besser wartbar. Sie reduziert auch Fehler, die durch falsche Datentypen entstehen.

Zum Beispiel kann ein Fehler entstehen, wenn eine Funktion eine Zahl erwartet, aber einen String bekommt.

```js
function add(a, b) {
    return a + b;
}

add("5", "3"); // "53"
```

In einer stark typisierten Sprache würde dieser Fehler oft schon vor dem Starten des Programms erkannt werden.

## Type Coercion ##


### Q1. Explain what is happening when comparing `42 == "42"`?


Das Ergebnis ist `true`.

```js
console.log(42 == "42"); // true
```

Der Operator `==` vergleicht die Werte und erlaubt eine automatische Typumwandlung.

JavaScript wandelt den String `"42"` in die Zahl `42` um. Danach werden `42` und `42` verglichen. Deshalb ist das Ergebnis `true`.

---

### Q2. Explain what is happening when comparing `42 === "42"`?

Das Ergebnis ist `false`.

```js
console.log(42 === "42"); // false
```

Der Operator `===` vergleicht den Wert und den Datentyp. Es gibt keine automatische Typumwandlung.

`42` ist eine Zahl vom Typ `number`. `"42"` ist ein Text vom Typ `string`. Weil die Datentypen verschieden sind, ist das Ergebnis `false`.

---

### Q3. Explain what is happening when comparing `true == 1`?

Das Ergebnis ist `true`.

```js
console.log(true == 1); // true
```

Beim Vergleich mit `==` wandelt JavaScript den Boolean-Wert `true` in die Zahl `1` um.

Danach wird verglichen:

```js
1 == 1; // true
```

Deshalb ist das Ergebnis `true`.

---

### Q4. Explain what is happening when comparing `true === 1`?

Das Ergebnis ist `false`.

```js
console.log(true === 1); // false
```

Der Operator `===` wandelt die Datentypen nicht um.

`true` hat den Typ `boolean`. `1` hat den Typ `number`. Weil die Datentypen verschieden sind, ist das Ergebnis `false`.

---

### Q5. Explain what is happening when doing `(2 + "2") + 2`?

Das Ergebnis ist der String `"222"`.

```js
console.log((2 + "2") + 2); // "222"
```

Zuerst wird `2 + "2"` berechnet. Weil einer der Werte ein String ist, wird die Zahl `2` in einen String umgewandelt. Das Ergebnis ist `"22"`.

Danach wird `"22" + 2` berechnet. Auch hier wird die Zahl `2` in einen String umgewandelt. Das Endergebnis ist `"222"`.

---

### Q6. Explain what is happening when doing `(2 + "2") - 2`?

Das Ergebnis ist die Zahl `20`.

```js
console.log((2 + "2") - 2); // 20
```

Zuerst wird `2 + "2"` berechnet. Das Ergebnis ist der String `"22"`.

Danach wird `"22" - 2` berechnet. Der Minus-Operator funktioniert nur mit Zahlen. Deshalb wandelt JavaScript den String `"22"` automatisch in die Zahl `22` um.

Danach wird gerechnet:

```js
22 - 2; // 20
```

---

### Q7. What is the output of the following examples?


```js
console.log(null + 1);      // 1
console.log("5" * 2);       // 10
console.log(true + false);  // 1
```

Bei `null + 1` wird `null` in die Zahl `0` umgewandelt. Deshalb ist das Ergebnis `1`.

Bei `"5" * 2` wird der String `"5"` in die Zahl `5` umgewandelt. Deshalb ist das Ergebnis `10`.

Bei `true + false` wird `true` in `1` und `false` in `0` umgewandelt. Deshalb ist das Ergebnis `1`.

```js
1 + 0; // 1
```

---

## Type Conversion ###



### Q1. How to convert a `string` to a `number`?

Einen String kann man mit `Number()` in eine Zahl umwandeln.

```js
const text = "42";
const number = Number(text);

console.log(number);        // 42
console.log(typeof number); // "number"
```

Wenn der String keine gültige Zahl enthält, gibt `Number()` den Wert `NaN` zurück.

```js
console.log(Number("Hallo")); // NaN
```

---

### Q2. How to convert a `number` to a `string`?


Eine Zahl kann man mit `String()` in einen String umwandeln.

```js
const number = 42;
const text = String(number);

console.log(text);        // "42"
console.log(typeof text); // "string"
```

Man kann auch einen leeren String hinzufügen.

```js
const text2 = number + "";

console.log(text2);        // "42"
console.log(typeof text2); // "string"
```

---

### Q3. How to convert a pixel value e.g. `255px` to a number?


Für einen Wert wie `"255px"` kann man `parseInt()` verwenden.

```js
const pixelText = "255px";
const pixelNumber = parseInt(pixelText);

console.log(pixelNumber);        // 255
console.log(typeof pixelNumber); // "number"
```

`parseInt()` liest die Zahl am Anfang des Strings und hört auf, sobald Buchstaben wie `px` kommen.

Wenn der Pixelwert eine Kommazahl enthält, kann man `parseFloat()` verwenden.

```js
const pixelText = "12.5px";
const pixelNumber = parseFloat(pixelText);

console.log(pixelNumber); // 12.5
```

---

### Q4. Prompt the user to enter a number and convert it to a number and log it to the console.


Mit `prompt()` kann man den Benutzer nach einer Eingabe fragen. Das Ergebnis von `prompt()` ist immer ein String. Deshalb wird die Eingabe mit `Number()` in eine Zahl umgewandelt.

```js
const input = prompt("Bitte gib eine Zahl ein:");
const number = Number(input);

console.log(number);
```

Mit dieser Version wird zusätzlich geprüft, ob die Eingabe wirklich eine gültige Zahl ist.

```js
const input = prompt("Bitte gib eine Zahl ein:");
const number = Number(input);

if (Number.isNaN(number)) {
    console.log("Die Eingabe ist keine gültige Zahl.");
} else {
    console.log(number);
}
```


