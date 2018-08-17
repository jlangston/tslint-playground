webpackJsonp([96],{2063:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(1),a=n(843),r=n(55),l=n(1117),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.apply=function(t){return this.applyWithFunction(t,c,{allowEmptyCatch:-1!==this.ruleArguments.indexOf("allow-empty-catch"),allowEmptyFunctions:-1!==this.ruleArguments.indexOf("allow-empty-functions")})},e.metadata={ruleName:"no-empty",description:"Disallows empty blocks.",descriptionDetails:"Blocks with a comment inside are not considered empty.",rationale:"Empty blocks are often indicators of missing code.",optionsDescription:l.Utils.dedent(i||(i=o.__makeTemplateObject(["\n            If `","` is specified, then catch blocks are allowed to be empty.\n            If `","` is specified, then function definitions are allowed to be empty."],["\n            If \\`","\\` is specified, then catch blocks are allowed to be empty.\n            If \\`","\\` is specified, then function definitions are allowed to be empty."])),"allow-empty-catch","allow-empty-functions"),options:{type:"array",items:{anyOf:[{type:"string",enum:["allow-empty-catch"]},{type:"string",enum:["allow-empty-functions"]}]}},optionExamples:[!0,[!0,"allow-empty-catch"],[!0,"allow-empty-functions"],[!0,"allow-empty-catch","allow-empty-functions"]],type:"functionality",typescriptOnly:!1},e.FAILURE_STRING="block is empty",e}(l.Rules.AbstractRule);function c(t){return r.forEachChild(t.sourceFile,function e(n){if(n.kind===r.SyntaxKind.Block&&0===n.statements.length&&!function(t,e){if(e.allowEmptyCatch&&t.kind===r.SyntaxKind.CatchClause)return!0;if(e.allowEmptyFunctions&&(t.kind===r.SyntaxKind.MethodDeclaration||t.kind===r.SyntaxKind.FunctionDeclaration||t.kind===r.SyntaxKind.FunctionExpression||t.kind===r.SyntaxKind.ArrowFunction))return!0;return a.isConstructorDeclaration(t)&&(a.hasModifier(t.modifiers,r.SyntaxKind.PrivateKeyword,r.SyntaxKind.ProtectedKeyword)||t.parameters.some(a.isParameterProperty))}(n.parent,t.options)){var i=n.getStart(t.sourceFile);if(l.hasCommentAfterPosition(t.sourceFile.text,i+1))return;return t.addFailure(i,n.end,s.FAILURE_STRING)}return r.forEachChild(n,e)})}e.Rule=s}});
//# sourceMappingURL=96.0f04ec84.chunk.js.map