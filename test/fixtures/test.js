/* eslint-disable no-unused-vars, no-undef, no-redeclare */

/*
 * Possible errors
 */

// strict: use global "use strict"
// comma-dangle: don't warn
let array = [1, 2,];

// no-cond-assign
// no-constant-condition
let x = 13;

if (x = 7)
    console.log(x); // no-console: don't warn

// no-constant-condition
if (true)
    doSomething();
else if (1)
    doSomething();

// no-control-regex
let pattern1 = /\\x1f/,
    pattern2 = new RegExp("\x1f");

// no-debugger
debugger;

// no-dupe-args
function dupe(arg1, arg2, arg3)
{
    doSomething();
}

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
foo = !!bar ? baz : bat;  // error Redundant double negation in a ternary condition
foo = Boolean(!!bar);     // error Redundant double negation in call to Boolean()
foo = new Boolean(!!bar); // error Redundant double negation in Boolean constructor call

if (!!foo) // error Redundant double negation in an if statement condition
{
    // ...
}

while (!!foo) // error Redundant double negation in a while loop condition
{
    // ...
}

do
{
    // ...
}
while (!!foo); // error Redundant double negation in a do while loop condition

for (; !!foo; ) // error Redundant double negation in a for loop condition
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


/*
 * Best practices
 */

// block-scoped-var
/* eslint-disable no-var */
function blockScopedVar()
{
    if (true)
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

// default-case
switch (foo)
{
    case 1:
        break;
}

// dot-notation
let xx = foo["bar"];

// dot-location: don't warn
gulp.src("lib")
    .pipe(bar);

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

// no-div-regex: don't warn
let div = /=foo/;

// no-else-return
function noElseReturn()
{
    if (true)
        return true;
    else
        return false;
}

// no-empty-label
label:
    foo = 7;

// no-eq-null: don't warn
if (x == null)
    foo();

// no-eval
let evil = eval("7");

// no-extend-native: don't warn
Object.prototype.testMe = 7;

// no-extra-bind
x = function ()
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

bindme = function ()
{   /* error The function binding is unnecessary.*/
    (function () {
        this.foo();
    })();
}.bind(bar);

bindme = function ()
{   /* error The function binding is unnecessary.*/
    function foobar() {
        this.bar();
    }
}.bind(baz);

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

// no-lone-blocks
{
    function lone() {}
}

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
for (var i = 0; i < 10; i++) // eslint-disable-line
{
    funcs[i] = function()
    {
        return i;
    };
}

// no-multi-spaces
let  multi  =  7;

// no-multi-str
let s = "line 1\
       line2";

// no-native-reassign
String = 7;

// no-new-func
let f1 = new Function("a", "b", "return a + b"),
    f2 = Function("a", "b", "return a + b");

// no-new-wrappers
let stringObject = new String("Hello world"),
    numberObject = new Number(33),
    booleanObject = new Boolean(false);

// no-new
new Person();

// no-octal
let octal = 013;

// no-octal-escape
let copyright = "Copyright \251";

// no-param-reassign: don't warn
function reassign(options)
{
    options = options || {};
}

// no-proto
let obj = {},
    proto = obj.__proto__;

proto = obj["__proto__"];

// no-return-assign
function returnSomething()
{
    return foo = bar + 2;
}

// no-redeclare
/* eslint-enable no-redeclare */
let obj = {};
/* eslint-disable no-redeclare */

// no-script-url
location.href = "javascript:void(0)";

// no-self-compare
if (foo === foo)
    console.log("same");

// no-sequences
let foobar = doSomething, val;

do { doSomething(); } while (doSomething(), !!test);

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

// no-unused-expressions
7;

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

// no-warning-comments
// TODO: Finish this file
// FIXME: What's the problem?

// no-with
with (foo) { doSomething(); }

// radix: don't warn
x = parseInt("27");

// wrap-iife
let wrap = (function () { return { y: 1 };}());

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
    throw "foo";
}
catch (ex)
{
    console.log(ex);
}

// no-delete-var
let d;
delete d;

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
if (foo) { foo = 0;}          /* error Requires a space before "}".*/

// brace-style
if (foo) {
    console.log("bar");
}

function brace() {
    doSomething();
}

if (foo)
{
    doSomething();
}
else {
    doSomething();
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

// key-spacing
let key = { k :7 };

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

// no-nested-ternary
let thing = foo ? bar : baz === "baz" ? "this is" : "truly evil";

// no-negated-condition: don't warn
if (!foo)
    console.log("no");
else
    console.log("yes");

// no-new-object
let obj1 = new Object(),
    obj2 = new Object;

// no-spaced-func
doSomething ();
doSomething
();

// no-unneeded-ternary
let isYes = answer === 1 ? true : false;

// object-curly-spacing
let object = {one: 1, two: 2},
    nestedObject = { one: { two: 2, array: [1, 2] }};

// operator-assignment
foo = foo + 7;

// operator-linebreak
let fullHeight = borderTop
               + innerHeight;

// padded-blocks
if (foo)
{

    doSomething();

}

// quotes
let s = 'quotes';

// semi-spacing
for (let i = 0 ;i < 10 ;++i)
    doSomething();

// space-after-keywords
if(foo)
    doSomething();

for(let f in foo)
    doSomething();

while(foo)
    doSomething();

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
}while (foo);

// space-before-function-paren
function spaceMe ()
{
    doSomething();
}

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
//bad comment


/*
 * ES6
 */

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
function *gen() { }

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

// no-var
var v;

// object-shorthand
let shorthand = {
    x: x,
    y: y
};

// prefer-arrow-callback
foo(function() { return 7; });

// prefer-template
let str = "Hello, " + name + "!";
str = "Time: " + (12 * 60 * 60 * 1000);

// no-mixed-requires
let fs = require("fs"),
    sf = "San Francisco";

// no-undef
/* eslint-enable no-undef */
frazzle = foo;

/* eslint-disable no-undef */
