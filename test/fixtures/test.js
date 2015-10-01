/* eslint-disable no-unused-vars, no-undef */

// no "use strict", "strict" rule warns here
let rules = {
    "env": {
        "es6": true,
        "node": true
    },
    "rules": {
        "prefer-template": 2
    }
};

// no-alert
alert("This should cause an error.");

// no-array-constructor
let a1 = Array(0, 1, 2),
    a2 = new Array(0, 1, 2);

function noCaller()
{
    // no-caller
    let caller = arguments.caller,
        callee = arguments.callee;
}

let ex = "";

try
{
    throw "foo";
}
// no-catch-shadow
catch (ex)
{
    console.log(ex);
}

let x;

// no-cond-assign
if (x = 7)
    console.log(x);

// no-control-regex
let pattern1 = /\\x1f/,
    pattern2 = new RegExp("\x1f");

// no-debugger
debugger;

// no-delete-var
let d;
delete d;

// no-dupe-keys
let foo = {
    bar: "baz",
    bar: "qux"
};

// no-else-return
function noElseReturn()
{
    if (true)
        return true;
    else
        return false;
}

// no-empty
if (foo)
{
}

// no-empty-character-class
let charClass = /^abc[]/;

// no-empty-label
label:
foo = 7;

// no-eval
let evil = eval("7");

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

// no-extra-semi
foo = 13; ;

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

// no-func-assign
function bar() {}
bar = foo;        // error 'bar' is a function

function baz()
{
    baz = foo;    // error 'baz' is a function
}

// no-implied-eval
setTimeout("alert('Hi!');", 100);

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

foo.__iterator__ = function () {}; // error Reserved name '__iterator__'

// no-label-var
foo:
for (let i in bar)
{
    if (i === 1)
        break foo;
}

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

// no-mixed-requires
let fs = require("fs"),
    sf = "San Francisco";

// no-multi-str
let s = "line 1\
       line2";

// no-native-reassign
String = 7;
undefined = 13;

// no-negated-in-lhs
if (!"foo" in foo)
    console.log("nope");

// no-nested-ternary
let thing = foo ? bar : baz === "baz" ? "this is" : "truly evil";

// no-new
new Person();

// no-new-func
let f1 = new Function("a", "b", "return a + b"),
    f2 = Function("a", "b", "return a + b");

// no-new-object
let obj1 = new Object(),
    obj2 = new Object;

// no-new-wrappers
let stringObject = new String("Hello world"),
    numberObject = new Number(33),
    booleanObject = new Boolean(false);

// no-obj-calls
let math = Math(),
    json = JSON();

// no-octal
let octal = 013;

// no-octal-escape
let copyright = "Copyright \251";

// no-proto
let obj = {},
    proto = obj.__proto__;

proto = obj["__proto__"];

// no-regex-spaces
regex = /foo   bar/;

// no-return-assign
function returnSomething()
{
    return foo = bar + 2;
}

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

// no-spaced-func
doSomething ();
doSomething
();

// no-sparse-arrays
let colors = ["red",, "blue"];

// no-undef
/* eslint-enable no-undef */
frazzle = foo;

/* eslint-disable no-undef */

// no-undef-init
let undef = undefined;

// no-unreachable
function unreachable()
{
    return;

    console.log("never gets here");
}

// no-unused-expressions
7;

// no-unused-vars [vars: all, args: after-used]
/* eslint-enable no-unused-vars */
let unused = 13;

function notUsed(arg) {}

/* eslint-disable no-unused-vars */

// no-warning-comments
// TODO: Finish this file
// FIXME: What's the problem?

// no-with
with (foo) { doSomething(); }

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

// eqeqeq
let yy = x == foo;

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
let np = new Foo;

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

// object-curly-spacing
let object = {one: 1, two: 2};

// computed-property-spacing
foo = object[ foo];
foo = object[foo ];

// array-bracket-spacing
let a = [ 1, 2];
a = [1, 2 ];

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

// wrap-iife
let wrap = (function () { return { y: 1 };}());

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
        this.a = 0;        /*error "this" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        this.foo();        /*error "this" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        super.foo();       /*error "super" is not allowed before super()*/
        super();
    }
}

class A extends B
{
    constructor()
    {
        super(this.foo()); /*error "this" is not allowed before super()*/
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
