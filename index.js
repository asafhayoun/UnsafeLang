/** 
UnsafeLang takes one argument - code.
If you use <, the following will be JavaScript.
If you use >, the following will be CSS.
If you use =, or you use a normal character, it will be HTML.
*/
function UnsafeLang(code) {
  let js = '',
    css = '',
    html = '';
  for (let i = 0; i < code.length; i++) {
    if (code[i] == '<') {
      js += code[++i];
    } else if (code[i] == '>') {
      css += code[++i];
    } else {
      if (code[i] == '=') i++;
      html += code[i];
    }
  }
  let result = '';
  if(css) result += `<link rel="stylesheet" href="data:text/css;base64,${btoa(css)}" />`;
  if(html) result += html;
  if(js) result += `<script src="data:text/javascript;base64,${btoa(js)}"></script>`;
  return result;
}

/**
shuffle takes a JS object, with 3 entries: js, css and html. It generates obscure code that only the parser can understand.
It randomizes it so one character can be css, his successor js, then css, then html etc.
*/
function shuffle(parts) {
  let code = '';
  let { js, css, html } = parts;
  js = js ? js.split('') : [];
  css = css ? css.split('') : [];
  html = html ? html.split('') : [];
  let jsI = js.length, cssI = css.length, htmlI = html.length;
  const jsL = js.length, cssL = css.length, htmlL = html.length;
  let sum;
  while(sum = jsI + cssI + htmlI) {
    let rnd = Math.random() * sum;
    if(rnd < jsI) {
      code += '<' + js[jsL - (jsI--)];
    } else if(rnd < (jsI + cssI)) {
      code += '>' + css[cssL - (cssI--)];
    } else {
      let char = html[htmlL - (htmlI--)];
      code += char == '<' || char == '=' || char == '>' ? '=' + char : char;
    }
  }
  return code;
}


console.log(UnsafeLang('<a<l<e<r<t<(<"<H<e<l<l<o<!<"<)>b>o>d>y>{>b>a>c>k>g>r>o>u>n>d>:>r>e>d>;>}=<b=>Hello!=</b=>'))

let obscure = shuffle({js: 'alert("Hello!")', css: 'body {}', html: '<b>Hello World!</b>'})
console.log(obscure)
console.log(UnsafeLang(obscure))
