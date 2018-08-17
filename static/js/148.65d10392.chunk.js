webpackJsonp([148],{2011:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t,a=n(1),i=n(55),s=n(1117),y=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(r,e),r.prototype.apply=function(e){return this.applyWithFunction(e,o,this.ruleArguments[0])},r.metadata={ruleName:"array-type",description:"Requires using either 'T[]' or 'Array<T>' for arrays.",hasFix:!0,optionsDescription:s.Utils.dedent(t||(t=a.__makeTemplateObject(['\n            One of the following arguments must be provided:\n\n            * `"','"` enforces use of `T[]` for all types T.\n            * `"','"` enforces use of `Array<T>` for all types T.\n            * `"','"` enforces use of `T[]` if `T` is a simple type (primitive or type reference).'],['\n            One of the following arguments must be provided:\n\n            * \\`"','"\\` enforces use of \\`T[]\\` for all types T.\n            * \\`"','"\\` enforces use of \\`Array<T>\\` for all types T.\n            * \\`"','"\\` enforces use of \\`T[]\\` if \\`T\\` is a simple type (primitive or type reference).'])),"array","generic","array-simple"),options:{type:"string",enum:["array","generic","array-simple"]},optionExamples:[[!0,"array"],[!0,"generic"],[!0,"array-simple"]],type:"style",typescriptOnly:!0},r.FAILURE_STRING_ARRAY="Array type using 'Array<T>' is forbidden. Use 'T[]' instead.",r.FAILURE_STRING_GENERIC="Array type using 'T[]' is forbidden. Use 'Array<T>' instead.",r.FAILURE_STRING_ARRAY_SIMPLE="Array type using 'Array<T>' is forbidden for simple types. Use 'T[]' instead.",r.FAILURE_STRING_GENERIC_SIMPLE="Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.",r}(s.Rules.AbstractRule);function o(e){var r=e.sourceFile,n=e.options;return i.forEachChild(r,function r(t){switch(t.kind){case i.SyntaxKind.ArrayType:!function(r){var t=r.elementType,a=r.parent;if("array"===n||"array-simple"===n&&d(t))return;var o="generic"===n?y.FAILURE_STRING_GENERIC:y.FAILURE_STRING_GENERIC_SIMPLE,p=t.kind===i.SyntaxKind.ParenthesizedType?1:0,c=0===p&&a.kind===i.SyntaxKind.AsExpression&&r.getStart()===r.getFullStart(),u=[new s.Replacement(t.getStart(),p,(c?" ":"")+"Array<"),s.Replacement.replaceFromTo(t.getEnd()-p,r.getEnd(),">")];e.addFailureAtNode(r,o,u)}(t);break;case i.SyntaxKind.TypeReference:!function(r){var t=r.typeName,a=r.typeArguments;if("generic"===n||(o=t,o.kind!==i.SyntaxKind.Identifier||"Array"!==o.text))return;var o;var p="array"===n?y.FAILURE_STRING_ARRAY:y.FAILURE_STRING_ARRAY_SIMPLE;if(void 0===a||0===a.length)return void e.addFailureAtNode(r,p,s.Replacement.replaceFromTo(r.getStart(),r.getEnd(),"any[]"));if(1!==a.length||"array-simple"===n&&!d(a[0]))return;var c=a[0],u=function(e){switch(e.kind){case i.SyntaxKind.UnionType:case i.SyntaxKind.FunctionType:case i.SyntaxKind.IntersectionType:case i.SyntaxKind.TypeOperator:return!0;default:return!1}}(c);e.addFailureAtNode(r,p,[s.Replacement.replaceFromTo(r.getStart(),c.getStart(),u?"(":""),s.Replacement.replaceFromTo(c.getEnd(),r.getEnd(),u?")[]":"[]")])}(t)}return i.forEachChild(t,r)})}function d(e){switch(e.kind){case i.SyntaxKind.AnyKeyword:case i.SyntaxKind.ArrayType:case i.SyntaxKind.BooleanKeyword:case i.SyntaxKind.NullKeyword:case i.SyntaxKind.ObjectKeyword:case i.SyntaxKind.UndefinedKeyword:case i.SyntaxKind.NumberKeyword:case i.SyntaxKind.StringKeyword:case i.SyntaxKind.SymbolKeyword:case i.SyntaxKind.VoidKeyword:case i.SyntaxKind.NeverKeyword:case i.SyntaxKind.ThisType:return!0;case i.SyntaxKind.TypeReference:var r=e,n=r.typeName,t=r.typeArguments;if(void 0===t)return!0;switch(t.length){case 0:return!0;case 1:return n.kind===i.SyntaxKind.Identifier&&"Array"===n.text&&d(t[0]);default:return!1}default:return!1}}r.Rule=y}});
//# sourceMappingURL=148.65d10392.chunk.js.map