webpackJsonp([137],{2023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,a,c=n(1),s=n(843),r=n(55),l=n(1117),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c.__extends(t,e),t.FAILURE_STRING=function(e,t,n){return"The function"+(void 0===n?"":" "+n)+" has a cyclomatic complexity of "+t+" which is higher than the threshold of "+e},t.prototype.apply=function(e){return this.applyWithFunction(e,h,{threshold:this.threshold})},t.prototype.isEnabled=function(){var n="number"===typeof this.threshold&&this.threshold>=t.MINIMUM_THRESHOLD;return e.prototype.isEnabled.call(this)&&n},Object.defineProperty(t.prototype,"threshold",{get:function(){return void 0!==this.ruleArguments[0]?this.ruleArguments[0]:t.DEFAULT_THRESHOLD},enumerable:!0,configurable:!0}),t.DEFAULT_THRESHOLD=20,t.MINIMUM_THRESHOLD=2,t.metadata={ruleName:"cyclomatic-complexity",description:"Enforces a threshold of cyclomatic complexity.",descriptionDetails:l.Utils.dedent(i||(i=c.__makeTemplateObject(["\n            Cyclomatic complexity is assessed for each function of any type. A starting value of 0\n            is assigned and this value is then incremented for every statement which can branch the\n            control flow within the function. The following statements and expressions contribute\n            to cyclomatic complexity:\n            * `catch`\n            * `if` and `? :`\n            * `||` and `&&` due to short-circuit evaluation\n            * `for`, `for in` and `for of` loops\n            * `while` and `do while` loops\n            * `case` clauses that contain statements"],["\n            Cyclomatic complexity is assessed for each function of any type. A starting value of 0\n            is assigned and this value is then incremented for every statement which can branch the\n            control flow within the function. The following statements and expressions contribute\n            to cyclomatic complexity:\n            * \\`catch\\`\n            * \\`if\\` and \\`? :\\`\n            * \\`||\\` and \\`&&\\` due to short-circuit evaluation\n            * \\`for\\`, \\`for in\\` and \\`for of\\` loops\n            * \\`while\\` and \\`do while\\` loops\n            * \\`case\\` clauses that contain statements"]))),rationale:l.Utils.dedent(o||(o=c.__makeTemplateObject(["\n            Cyclomatic complexity is a code metric which indicates the level of complexity in a\n            function. High cyclomatic complexity indicates confusing code which may be prone to\n            errors or difficult to modify.\n\n            It's better to have smaller, single-purpose functions with self-documenting names."],["\n            Cyclomatic complexity is a code metric which indicates the level of complexity in a\n            function. High cyclomatic complexity indicates confusing code which may be prone to\n            errors or difficult to modify.\n\n            It's better to have smaller, single-purpose functions with self-documenting names."]))),optionsDescription:l.Utils.dedent(a||(a=c.__makeTemplateObject(["\n            An optional upper limit for cyclomatic complexity can be specified. If no limit option\n            is provided a default value of "," will be used."],["\n            An optional upper limit for cyclomatic complexity can be specified. If no limit option\n            is provided a default value of "," will be used."])),t.DEFAULT_THRESHOLD),options:{type:"number",minimum:t.MINIMUM_THRESHOLD},optionExamples:[!0,[!0,20]],type:"maintainability",typescriptOnly:!1},t}(l.Rules.AbstractRule);function h(e){var t=e.options.threshold,n=0;return r.forEachChild(e.sourceFile,function i(o){if(!s.isFunctionScopeBoundary(o))return function(e){switch(e.kind){case r.SyntaxKind.CaseClause:return e.statements.length>0;case r.SyntaxKind.CatchClause:case r.SyntaxKind.ConditionalExpression:case r.SyntaxKind.DoStatement:case r.SyntaxKind.ForStatement:case r.SyntaxKind.ForInStatement:case r.SyntaxKind.ForOfStatement:case r.SyntaxKind.IfStatement:case r.SyntaxKind.WhileStatement:return!0;case r.SyntaxKind.BinaryExpression:switch(e.operatorToken.kind){case r.SyntaxKind.BarBarToken:case r.SyntaxKind.AmpersandAmpersandToken:return!0;default:return!1}default:return!1}}(o)&&n++,r.forEachChild(o,i);var a=n;if(n=1,r.forEachChild(o,i),n>t){var c=o.name,l=void 0!==c&&s.isIdentifier(c)?c.text:void 0;e.addFailureAtNode(o,d.FAILURE_STRING(t,n,l))}n=a})}t.Rule=d}});
//# sourceMappingURL=137.2c04e461.chunk.js.map