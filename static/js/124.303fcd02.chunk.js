webpackJsonp([124],{2036:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=n(1),i=n(843),l=n(55),s=n(1117),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.apply=function(t){return this.applyWithFunction(t,r)},e.metadata={ruleName:"label-position",description:"Only allows labels in sensible locations.",descriptionDetails:"This rule only allows labels to be on `do/for/while/switch` statements.",rationale:s.Utils.dedent(o||(o=a.__makeTemplateObject(["\n            Labels in JavaScript only can be used in conjunction with `break` or `continue`,\n            constructs meant to be used for loop flow control. While you can theoretically use\n            labels on any block statement in JS, it is considered poor code structure to do so."],["\n            Labels in JavaScript only can be used in conjunction with \\`break\\` or \\`continue\\`,\n            constructs meant to be used for loop flow control. While you can theoretically use\n            labels on any block statement in JS, it is considered poor code structure to do so."]))),optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"functionality",typescriptOnly:!1},e.FAILURE_STRING="unexpected label on statement",e}(s.Rules.AbstractRule);function r(t){return l.forEachChild(t.sourceFile,function e(n){return i.isLabeledStatement(n)&&!function(t){switch(t.kind){case l.SyntaxKind.DoStatement:case l.SyntaxKind.ForStatement:case l.SyntaxKind.ForInStatement:case l.SyntaxKind.ForOfStatement:case l.SyntaxKind.WhileStatement:case l.SyntaxKind.SwitchStatement:return!0;default:return!1}}(n.statement)&&t.addFailureAtNode(n.label,c.FAILURE_STRING),l.forEachChild(n,e)})}e.Rule=c}});
//# sourceMappingURL=124.303fcd02.chunk.js.map