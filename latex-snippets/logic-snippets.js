export default [
// logica
	{trigger: "val[", replacement: "\\left[ \\! \\left[ $0 \\right] \\! \\right]_{v} $1", options: "mA"},
	{trigger: "mval[", replacement: "\\left[ \\! \\left[ $0 \\right] \\! \\right]_{\\mathcal{M},${1:s}} $2", options: "mA"},
	{trigger: "rep[", replacement: "[${0:t}/${1:x_{i}}]", options: "mA"}, 
	{trigger: "|=", replacement: "\\models", options: "mA"},
	{trigger: "|-", replacement: "\\vdash", options: "mA"},
	{trigger: "bot", replacement: "\\perp", options: "mA"},
	{trigger: "term", replacement: "\\mathrm{TERM}", options: "mA"},
	{trigger: "form", replacement: "\\mathrm{Form}", options: "mA"},
	{trigger: "var", replacement: "\\mathrm{Var}", options: "mA"},
	{trigger: "\\mathrm{TERM}f", replacement: "\\mathrm{TERM}_{\\mathcal{F}}", options: "mA"},
	{trigger: "\\mathrm{Form}fp", replacement: "\\mathrm{Form}_{(\\mathcal{F},\\mathcal{P})}", options: "mA"},
	{trigger: "univ", replacement: "\\left| \\mathcal{M} \\right|", options: "mA"},
	{trigger: "FF", replacement: "\\mathcal{F}", options: "mA"},
	{trigger: "fp", replacement: "(\\mathcal{F},\\mathcal{P})", options: "mA"},
]

