webpackJsonp([134],{2025:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n(1116),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.apply=function(e){var n,i=e.text.length;if(0===i||"\n"===e.text[i-1])return[];var a=e.getLineStarts();return a.length>1&&(n=l.Replacement.appendText(i,"\r"===e.text[a[1]-2]?"\r\n":"\n")),[new l.RuleFailure(e,i,i,t.FAILURE_STRING,this.ruleName,n)]},t.metadata={ruleName:"eofline",description:"Ensures the file ends with a newline.",descriptionDetails:"Fix for single-line files is not supported.",rationale:"It is a [standard convention](https://stackoverflow.com/q/729692/3124288) to end files with a newline.",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],hasFix:!0,type:"maintainability",typescriptOnly:!1},t.FAILURE_STRING="file should end with a newline",t}(l.Rules.AbstractRule);t.Rule=a}});
//# sourceMappingURL=134.c0e9ee10.chunk.js.map