webpackJsonp([64],{2098:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,a=n(1),i=n(843),s=n(55),l=n(1117),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.FAILURE_STRING=function(e){return"No need to wrap '"+e+"' in another function. Just use it directly."},t.prototype.apply=function(e){return this.applyWithFunction(e,d)},t.metadata={ruleName:"no-unnecessary-callback-wrapper",description:l.Utils.dedent(r||(r=a.__makeTemplateObject(["\n            Replaces `x => f(x)` with just `f`.\n            To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too."],["\n            Replaces \\`x => f(x)\\` with just \\`f\\`.\n            To catch more cases, enable \\`only-arrow-functions\\` and \\`arrow-return-shorthand\\` too."]))),optionsDescription:"Not configurable.",options:null,optionExamples:[!0],rationale:l.Utils.dedent(o||(o=a.__makeTemplateObject(["\n            There's generally no reason to wrap a function with a callback wrapper if it's directly called anyway.\n            Doing so creates extra inline lambdas that slow the runtime down.\n        "],["\n            There's generally no reason to wrap a function with a callback wrapper if it's directly called anyway.\n            Doing so creates extra inline lambdas that slow the runtime down.\n        "]))),type:"style",typescriptOnly:!1},t}(l.Rules.AbstractRule);function d(e){return s.forEachChild(e.sourceFile,function t(n){if(!(i.isArrowFunction(n)&&!i.hasModifier(n.modifiers,s.SyntaxKind.AsyncKeyword)&&i.isCallExpression(n.body)&&i.isIdentifier(n.body.expression)&&function(e,t,n){if(e.length!==t.length)return!1;for(var r=0;r<e.length;++r){var o=e[r],a=o.dotDotDotToken,s=o.name,l=t[r];if(void 0!==a){if(!i.isSpreadElement(l))return!1;l=l.expression}if(!i.isIdentifier(s)||!i.isIdentifier(l)||s.text!==l.text||n.text===s.text)return!1}return!0}(n.parameters,n.body.arguments,n.body.expression)))return s.forEachChild(n,t);var r=n.getStart(e.sourceFile);e.addFailure(r,n.end,c.FAILURE_STRING(n.body.expression.text),[l.Replacement.deleteFromTo(r,n.body.getStart(e.sourceFile)),l.Replacement.deleteFromTo(n.body.expression.end,n.end)])})}t.Rule=c}});
//# sourceMappingURL=64.7cc6a83b.chunk.js.map