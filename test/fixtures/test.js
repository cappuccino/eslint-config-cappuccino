/* eslint-disable no-unused-vars, no-undef, no-redeclare */
"use strict";

/*
 * Possible errors
 */

// comma-dangle: don't warn
let array = [1, 2,];

// no-cond-assign
// no-constant-condition
let x = 13;

if (x = 7)
    console.log(x); // no-console: don't warn

// no-constant-condition
// This doesn't warn
while (true)
{
    if (new Date().getSeconds() > 10)
        break;

    console.log("foo");
}

if (true)
    doSomething();
else if (1)
    doSomething();

// no-control-regex
let pattern1 = /\\x1f/,
    pattern2 = new RegExp("\x1f");

// no-debugger
debugger;


// no-dupe-keys
let foo = {
    bar: "baz",
    bar: "qux"
};

// no-duplicate-case
switch (1)
{
    case 1:
        break;

    case 1:
        break;

    default:
        break;
}

// no-empty
if (foo)
{
}

// no-empty-character-class
let charClass = /^abc[]/;

// no-ex-assign
try
{
    // code
}
catch (e)
{
    e = 10;
}

// no-extra-boolean-cast
foo = !!!bar;             // error Redundant multiple negation
foo = !!bar ? baz : bat;  // error Redundant double negation
foo = Boolean(!!bar);     // error Redundant double negation
foo = new Boolean(!!bar); // error Redundant double negation

if (!!foo) // error Redundant double negation
{
    // ...
}

while (!!foo) // error Redundant double negation
{
    // ...
}

do
{
    // ...
}
while (!!foo); // error Redundant double negation

for (; !!foo;) // error Redundant double negation
{
    // ...
}

// no-extra-parens: don't warn
let parens = (7 * 27) + 31;

// no-extra-semi
foo = 13; ;

// no-func-assign
function bar() {}
bar = foo;        // error 'bar' is a function

function baz()
{
    baz = foo;    // error 'baz' is a function
}

// no-inner-declarations [functions]
function doSomething()
{
    if (foo)
    {
        function declaration() { }
    }
}

// no-invalid-regexp
let regex = new RegExp("["); // error Invalid regular expression: /[/: Unterminated character class

regex = new RegExp(".", "z"); // error Invalid flags supplied to RegExp constructor 'z'
regex = new RegExp("\\"); // error Invalid regular expression: /\/: \ at end of pattern

// no-irregular-whitespace
let ws = 7;

// no-negated-in-lhs
if (!"foo" in foo)
    console.log("nope");

// no-obj-calls
let math = Math(),
    json = JSON();

// no-regex-spaces
regex = /foo   bar/;

// no-sparse-arrays
let colors = ["red",, "blue"];

// no-unexpected-multiline
let foo = bar
(1 || 2).baz();

let hello = "world"
[1, 2, 3].forEach(addNumber);

// no-unreachable
function unreachable()
{
    return;

    console.log("never gets here");
}

// use-isnan
if (foo === NaN)
    doSomething();

if (foo !== NaN)
    doSomething();

// valid-typeof
if (typeof foo === "sting" ||
    typeof foo === "obect" ||
    typeof foo === "undefimed" ||
    typeof foo === "nunber" ||
    typeof foo === "bolean" ||
    typeof foo === "funktion")
{
    doSomething();
}

// valid-jsdoc
/**
 * @param num A number
 */
function jsdoc(num)
{
}

// valid-typeof
let valid = typeof jsdoc === "func";

/*
 * Best practices
 */

// acessor-pairs
let o = {
    set prop(value)
    {
        this._prop = value;
    }
};

/* eslint accessor-pairs: [2, { getWithoutSet: true }] */
let o2 = {
    get prop2()
    {
        return 7;
    }
};

// array-callback-return
let bar = foo.filter(elem => { elem = 0; });

// block-scoped-var
/* eslint-disable no-var */
function blockScopedVar()
{
    if (test())
    {
        var block = 7;
    }

    block = 13;
}

/* eslint-enable */

// consistent-return
function consistent()
{
    if (foo)
        return true;

    return;
}

// curly
if (foo)
{
    doSomething();
}
else
{
    doSomething();
}

// default-case
switch (foo)
{
    case 1:
        break;
}

// dot-location: don't warn
gulp.src("lib")
    .pipe(bar);

// dot-notation
let xx = foo["bar"];

// eqeqeq
let yy = x == foo;

// guard-for-in: don't warn
let guarded = Object.create(null);

for (let key in guarded)
    console.log(key);

// no-alert
alert("This should cause an error.");

// no-caller
function noCaller()
{
    let caller = arguments.caller,
        callee = arguments.callee;
}

// no-case-declarations
switch (foo)
{
    case 1:
        let noCase1 = 7;

        break;

    case 2:
        function noCase2() {};

        break;

    default:
        const noCase3 = 27;
}

// no-div-regex: don't warn
let div = /=foo/;

// no-else-return
function noElseReturn()
{
    if (doSomething())
        return true;
    else
        return false;
}

// no-empty-function: don't warn
function emptyFunc() {}

// no-empty-pattern
// off for now, node doesn't support destructuring yet

// no-eq-null: don't warn
if (x == null)
    foo();

// no-eval
let evil = eval("7");

// no-extend-native: don't warn
Object.prototype.testMe = 7;

// no-extra-bind
x = function()
{   /* error The function binding is unnecessary.*/
    foo();
}.bind(bar);

let bindme = (() =>
{        /* error The function binding is unnecessary.*/
    foo();
}).bind(bar);

bindme = (() =>
{        /* error The function binding is unnecessary.*/
    this.foo();
}).bind(bar);

bindme = function()
{   /* error The function binding is unnecessary.*/
    (function () {
        this.foo();
    })();
}.bind(bar);

bindme = function()
{   /* error The function binding is unnecessary.*/
    function foobar() {
        this.bar();
    }
}.bind(baz);

// no-extra-label
A: while (doSomething())
    break A;

// no-fallthrough
switch (foo)
{
    case 1:
        console.log(1);

    default:
        console.log(2);
}

// no-floating-decimal
foo = .5;
foo = 2.;
foo = -.7;

// no-implicit-coercion: don't warn
let implicit = !!foo;

// no-implied-eval
setTimeout("alert('Hi!');", 100);

// no-invalid-this
this.a = 0;

function invalidThis()
{
    this.a = 0;            /* error Unexpected `this`.*/
    baz(() => this);       /* error Unexpected `this`.*/

    (function()
    {
        this.a = 0;        /* error Unexpected `this`.*/
        baz(() => this);   /* error Unexpected `this`.*/
    })();

    function foo() {
        this.a = 0;        /* error Unexpected `this`.*/
        baz(() => this);   /* error Unexpected `this`.*/
    }

    let foo = function()
    {
        this.a = 0;        /* error Unexpected `this`.*/
        baz(() => this);   /* error Unexpected `this`.*/
    };

    foo(function()
    {
        this.a = 0;        /* error Unexpected `this`.*/
        baz(() => this);   /* error Unexpected `this`.*/
    });

    x.foo = () =>
    {
        // `this` of arrow functions is the outer scope's.
        this.a = 0;        /* error Unexpected `this`.*/
    };

    let obj = {
        aaa()
        {
            return () =>
            {
                // There is in a method `aaa`, but `foo` is not a method.
                this.a = 0;      /* error Unexpected `this`.*/
                baz(() => this); /* error Unexpected `this`.*/
            };
        }
    };

    class Foo {
        static foo()
        {
            this.a = 0;      /* error Unexpected `this`.*/
            baz(() => this); /* error Unexpected `this`.*/
        }
    }

    foo.forEach(function()
    {
        this.a = 0;          /* error Unexpected `this`.*/
        baz(() => this);     /* error Unexpected `this`.*/
    });
}

// no-iterator
foo.__iterator__ = function() {}; // error Reserved name '__iterator__'

// no-labels: don't warn
label:
while (doSomething())
{
    while (doSomething())
        break label;
}

// no-lone-blocks
if (foo)
{
    {
        bar();
    }
}

function lone2()
{
    {
        bar();
    }
}

// no-loop-func
// eslint-disable-next-line
for (var i = 0; i < 10; i++)
{
    funcs[i] = function()
    {
        return i;
    };
}

// no-magic-numbers: don't warn
let magic = 60 * 60 * 24;

// no-multi-spaces
let  multi  =  7;

// no-multi-str
let s = "line 1\
       line2";

// no-native-reassign
String = 7;

// no-new
class Person {}
new Person();

// no-new-func
let f1 = new Function("a", "b", "return a + b"),
    f2 = Function("a", "b", "return a + b");

// no-new-wrappers
let stringObject = new String("Hello world"),
    numberObject = new Number(33),
    booleanObject = new Boolean(false);

// no-param-reassign: don't warn
function reassign(options)
{
    options = options || {};
}

// no-process-env: don't warn
let user = process.env.USER;

// no-proto
let obj = {},
    proto = obj.__proto__;

proto = obj["__proto__"];

// no-redeclare
/* eslint-enable no-redeclare */
let obj = {};
/* eslint-disable no-redeclare */

// no-return-assign
function returnSomething()
{
    return foo = bar + 2;
}

// no-script-url
location.href = "javascript:void(0)";

// no-self-assign
obj = obj;

// no-self-compare
if (foo === foo)
    console.log("same");

// no-sequences
for (; doSomething(), !!test;);

do
    doSomething();
while (doSomething(), !!test);

for (; doSomething(), !!test; );

if (doSomething(), !!test)
    doSomething();

switch (val = foo(), val)
{
    default: doSomething();
}

while (val = foo(), val < 42);

// no-throw-literal
function noThrowLiteral()
{
    /* eslint-disable no-unreachable */
    throw "error";         /* error Expected an object to be thrown.*/

    throw 0;               /* error Expected an object to be thrown.*/

    throw undefined;       /* error Do not throw undefined.*/

    throw null;            /* error Expected an object to be thrown.*/

    var err = new Error();
    throw "an " + err;     /* error Expected an object to be thrown.*/
    // err is recast to a string literal

    var err = new Error();
    throw `${err}`;         /* error Expected an object to be thrown.*/

    /* eslint-enable */
}

// no-unmodified-loop-condition
while (node !== root)
    doSomething(node);

// no-unused-expressions
7;

// no-unused-labels
A: let foo = 0;

// no-useless-call
// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);     /* error unnecessary ".call()".*/
foo.apply(undefined, [1, 2, 3]);  /* error unnecessary ".apply()".*/
foo.call(null, 1, 2, 3);          /* error unnecessary ".call()".*/
foo.apply(null, [1, 2, 3]);       /* error unnecessary ".apply()".*/

// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);       /* error unnecessary ".call()".*/
obj.foo.apply(obj, [1, 2, 3]);    /* error unnecessary ".apply()".*/

// no-useless-concat
// these are the same as "10"
let a = `some` + `string`; /* error Unexpected string concatenation of literals.*/
let a = '1' + '0';         /* error Unexpected string concatenation of literals.*/
let a = '1' + `0`;         /* error Unexpected string concatenation of literals.*/
let a = `1` + '0';         /* error Unexpected string concatenation of literals.*/
let a = `1` + `0`;         /* error Unexpected string concatenation of literals.*/

// no-void
let foo = void bar();

// no-warning-comments
// TODO: Finish this file
// FIXME: What's the problem?

// radix: don't warn
x = parseInt("27");

// vars-on-top
/* eslint-disable no-vars */
function varsOnTop()
{
    doSomething();

    var varsontop = 7;
}

/* eslint-enable no-vars */

// wrap-iife
let wrap = (function() { return { y: 1 }; }());

// yoda
if ("red" === color) {          /* error Expected literal to be on the right side of ===.*/
    // ...
}

if (true === flag) {             /* error Expected literal to be on the right side of ==.*/
    // ...
}

if (5 > count) {                /* error Expected literal to be on the right side of >.*/
    // ...
}

if (-1 < x.indexOf(substr)) { /* error Expected literal to be on the right side of <.*/
    // ...
}

if (0 <= x && x < 1) {          /* error Expected literal to be on the right side of <=.*/
    // ...
}

/*
 * Variables
 */

// no-catch-shadow
let ex = "";

try
{
    throw new Error("foo");
}
catch (ex)
{
    console.log(ex);
}

// no-label-var
foo:
for (let ii in bar)
{
    if (ii === 1)
        break foo;
}

// no-shadow
/* eslint-disable no-var */
var someVar = "some var";

function g()
{
    let someVar = 13;
}

/* eslint-enable */

// no-shadow-restricted-names
let undefined = 7;

function NaN() {}

// no-undef-init
let undef = undefined;

// no-unused-vars [vars: all, args: after-used]
/* eslint-enable no-unused-vars */
let unused = 13;

function notUsed(arg) {}

/* eslint-disable no-unused-vars */

// no-use-before-define
f();            /* error f was used before it was defined*/
function f() {}

function g() {
    return b;  /* error b was used before it was defined*/
}
let b = 1;

{
    doSomething(c);  /* error c was used before it was defined*/
    let c = 1;
}

/*
 * Node.js and CommonJS
 */

// callback-return
function foo() {
    if (err) {
        callback(err); /* error Expected return with your callback function.*/
    }
    callback();
}

// global-require: don't warn
require("woo-hoo");

// handle-callback-error
function loadData (err, data) {
    doSomething(); // forgot to handle error
}

// no-new-require
let appHeader = new require("app-header");

/*
 * Stylistic issues
 */

// array-bracket-spacing
let a = [ 1, 2];

a = [1, 2 ];

// block-spacing
function foo() {return true;} /* error Requires a space after "{".*/ /* error Requires a space before "}".*/

// eslint-disable-next-line curly
if (foo) { foo = 0;}          /* error Requires a space before "}".*/

// brace-style
if (foo) {
    console.log("bar");
    console.log("bar");
}

function brace() {
    doSomething();
}

if (foo)
{
    doSomething();
    doSomethingElse();
}
else {
    doSomething();
    doSomethingElse();
}

// comma-spacing
let foo = 1 ,bar = 2;                   /* error There should be no space before ','.*/ /* error A space is required after ','.*/
let arr = [1 , 2];                      /* error There should be no space before ','.*/
let obj = { "foo": "bar" ,"baz": "qur" }; /* error There should be no space before ','.*/ /* error A space is required after ','.*/
foo(a ,b);                              /* error There should be no space before ','.*/ /* error A space is required after ','.*/
let e = new Error(a ,b);                          /* error There should be no space before ','.*/ /* error A space is required after ','.*/
function foob(ab ,ba)
{
}                    /* error There should be no space before ','.*/ /* error A space is required after ','.*/

// comma-style
let first = 7
  , second = 13;

// computed-property-spacing
foo = x[ foo];
foo = x[foo ];

// indent
if (foo)
        console.log("bad indent");

switch (foo)
{
    case 0:
        console.log("good indent");
        break;

case 1:
    console.log("bad indent");
    break;

    default:
    console.log("bad indent");
}

// key-spacing
let key = { k :7 };

// keyword-spacing
/* eslint-disable curly, brace-style */
if(foo)
    doSomething();

for(let k = 0; k < 10; k++)
    doSomething();

while(foo > 1)
    foo = doSomething();

switch(foo)
{
    default:
        break;
}

try
{
    doSomething();
}
catch(exc)
{
    // foo
}
finally
{
    // bar
}

// space-after-keywords
// space-before-keywords
do{
    doSomething();
    doSomethingElse();
}while (testme() > 0);

// space-before-function-paren
function spaceMe ()
{
    doSomething();
}

/* eslint-enable curly, brace-style */

// max-depth
if (foo)
{
    if (bar)
    {
        if (baz)
        {
            for (let ii = 0; ii < 10; ii++)
            {
                for (let jj = 0; jj < ii; jj++)
                {
                    if (testme())
                        console.log("too deep");
                }
            }
        }
    }
}

// max-len
let tooLong = someReallyLongVarName + "This is a really long string" + anotherReallyLongVarName + someReallyLongFunctionName(someVeryLongParameterName);

// max-nested-callbacks
function one()
{
    foo(() =>
    {
        bar(() =>
        {
            baz(() =>
            {
                foobar(() =>
                {

                });
            });
        });
    });
}

// new-cap
let n = new foo();

// new-parens
let Foo = {};
let np = new Foo;

// newline-after-var
let someVar = 7;
console.log(someVar);

// newline-before-return
function beforeReturn()
{
    doSomething();
    return true;
}

function getSomething()
{
    return 7;  // no error
}

// no-array-constructor
let a1 = Array(0, 1, 2),
    a2 = new Array(0, 1, 2);

// no-lonely-if
if (foo)
{
    // something
}
else
{
    if (bar())
    {
        // something else
    }
}



// no-multiple-empty-lines
let a = 7;

// no-negated-condition: don't warn
if (!foo)
    console.log("no");
else
    console.log("yes");

// no-nested-ternary
let thing = foo ? bar : baz === "baz" ? "this is" : "truly evil";

// no-new-object
let obj1 = new Object(),
    obj2 = new Object;

// no-spaced-func
doSomething ();
doSomething
();

// no-unneeded-ternary
let isYes = answer === 1 ? true : false;

// no-whitespace-before-property
let wsbp = foo. bar;

// object-curly-spacing
let object = {one: 1, two: 2},
    nestedObject = { one: { two: 2, array: [1, 2] }};

// one-var-declaration-per-line
let a, b;

// operator-assignment
foo = foo + 7;

// operator-linebreak
let fullHeight = borderTop
               + innerHeight;

// padded-blocks
if (foo)
{

    doSomething();
    doSomething();

}

// quote-props
let qp = {
    one: 1,
    "one-two": 12,
    "three": 3
};

// quotes
let s = 'quotes';

// semi-spacing
for (let i = 0 ;i < 10 ;++i)
    doSomething();

// space-in-parens
spaceMe( 1, 2 );

// space-infix-ops
foo = 1+2;
foo = 1+ 2;
foo = 1 +2;

// space-return-throw-case
function space()
{
    if (foo)
        throw{ message: "foo" };

    switch (foo)
    {
        case"foo":
            break;

        default:
            break;
    }

    return{ foo: "bar" };
}

// space-unary-ops
++ foo;
foo = - foo;

// spaced-comment
/*----*/
//-----
//bad comment


/*
 * ES6
 */

// arrow-body-style
let arrowBodyStyle = () => { return 0; };

// arrow-spacing
foo = param=> param + 1;
foo = param =>param + 1;

// constructor-super
class A
{
    constructor()
    {
        super();
    }
}

class A extends null
{
    constructor()
    {
        super();
    }
}

class A extends B
{
    constructor() { }
}

// generator-star-spacing
function* gen() { }

// no-arrow-condition
if (z => 1)
{
    doSomething();
}

// no-class-assign
class C { }
C = 0;

// no-const-assign
const kConstant = 7;
kConstant = 13;

// no-dupe-class-members
class Foo
{
    bar() { }
    bar() { }

    static baz() { }
    static baz() { }
}

// no-new-symbol
let ns = new Symbol("foo");

// no-this-before-super
class A extends B
{
    constructor()
    {
        this.a = 0;        /* error "this" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        this.foo();        /* error "this" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        super.foo();       /* error "super" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        super(this.foo()); /* error "this" is not allowed before super()*/
    }
}

// no-useless-constructor
class NUC
{
    constructor() {}
}

class NUC2 extends NUC
{
    constructor(...args)
    {
        super(...args);
    }
}

// no-var
var v;

// object-shorthand
let shorthand = {
    x: x,
    y: y
};

// prefer-arrow-callback
foo(function() { return 7; });

// prefer-template: don't warn
let str = "Hello, " + name + "!";

// no-mixed-requires
let fs = require("fs"),
    sf = "San Francisco";

// no-undef
/* eslint-enable no-undef */
let foo = frazzle;

/* eslint-disable no-undef */

// yield-star-spacing
function *generator()
{
    yield *other();
}
