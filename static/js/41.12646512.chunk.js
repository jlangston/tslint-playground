webpackJsonp([41],{2121:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),o=i(842),r=i(55),s=i(1116),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.apply=function(e){return this.applyWithWalker(new a(e,this.ruleName,{allowProtected:-1!==this.ruleArguments.indexOf("allow-protected"),allowPublic:-1!==this.ruleArguments.indexOf("allow-public")}))},t.metadata={ruleName:"prefer-function-over-method",description:"Warns for class methods that do not use 'this'.",optionsDescription:s.Utils.dedent(d||(d=n.__makeTemplateObject(['\n            "','" excludes checking of public methods.\n            "','" excludes checking of protected methods.'],['\n            "','" excludes checking of public methods.\n            "','" excludes checking of protected methods.'])),"allow-public","allow-protected"),options:{type:"string",enum:["allow-public","allow-protected"]},optionExamples:[!0,[!0,"allow-public","allow-protected"]],type:"style",typescriptOnly:!1},t.FAILURE_STRING="Class method does not use 'this'. Use a function instead.",t}(s.Rules.AbstractRule);t.Rule=c;var d,a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.walk=function(e){var t=this,i=function(e){if(o.isMethodDeclaration(e)&&!t.isExempt(e))t.currentScope={isThisUsed:!1,name:o.getPropertyName(e.name)},r.forEachChild(e,i),t.currentScope.isThisUsed||t.addFailureAtNode(e.name,c.FAILURE_STRING),t.currentScope=void 0;else if(o.hasOwnThisReference(e)){var n=t.currentScope;t.currentScope=void 0,r.forEachChild(e,i),t.currentScope=n}else{if(void 0===t.currentScope||(e.kind!==r.SyntaxKind.ThisKeyword||function(e,t){return void 0!==t&&e.parent.kind===r.SyntaxKind.PropertyAccessExpression&&e.parent.name.text===t}(e,t.currentScope.name))&&e.kind!==r.SyntaxKind.SuperKeyword)return r.forEachChild(e,i);t.currentScope.isThisUsed=!0}};return r.forEachChild(e,i)},t.prototype.isExempt=function(e){return void 0===e.body||e.parent.kind!==r.SyntaxKind.ClassDeclaration&&e.parent.kind!==r.SyntaxKind.ClassExpression||o.hasModifier(e.modifiers,r.SyntaxKind.StaticKeyword)||this.options.allowProtected&&o.hasModifier(e.modifiers,r.SyntaxKind.ProtectedKeyword)||this.options.allowPublic&&(o.hasModifier(e.modifiers,r.SyntaxKind.PublicKeyword)||!o.hasModifier(e.modifiers,r.SyntaxKind.ProtectedKeyword,r.SyntaxKind.PrivateKeyword))},t}(s.AbstractWalker)}});
//# sourceMappingURL=41.12646512.chunk.js.map