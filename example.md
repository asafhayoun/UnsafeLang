# Example
This piece of crap code:
```
<f=<<u<n<c<t<i<ot<n< <U<n<s<a<f<eex<L<a<n<g<(<e<)<{<l<e<t< <t<=t<"<"<,<l<=a<"<"r<,e<s<=<"<"<;<f<o<ra i<(d<l<e==<tp< <a<=<0<;<a<<<e<.<l<e<n<gi=>=</<t<h<;<a<+<+<)<"<<<"<=t<=<ee<[x<a<]<?<t<+<=t<ear<[<+<+e<aa<]=>=<<:<"<><"<=<=<eb<[<a<]<?<l<+<=<er=>=<<[<+<+<a<]<:<(<"<=<"bu<=<=<et<[t<a<]<&<&<a<+<+<,o<s<+<=<e<[n<a<]<)<;<l<e<t< <a o<=<"n<"<;c<r<elic<t<u<r<n< <l<&k==<&<(<aa<+<=<`(<<)<l<i<n<k< <r<e<l=><=<"<s<tP<y<l<e<s<h<e<ea<t<"< <h<r<er<f<=<"<d<a<t<as<:<te<e<x=<<t<//<c<s<s<;b<b<au<s<e<6<4<,<$tto<{<b<tn<o<a<(<l<)<}<"=>< </<><`=<<)<,<s<&<&<(<ab<+<=<s<)<,r<t<&=><&<(<a<+<==<<`<<<s<c<r<itex<pt<t< <s<ra<c<=<"<d<ar<t<a<:ea<t<e<x<t </<j<a<v<a<sid<c<r<i<p<t<;<b==pr<a<s<e=><6=<<4<,/<$<{<b<t<ot<a<(<t<)<}<"<>ext<<<\a</<sr<c<r<i<p<te<><`<)<,<aa=><}<f<u<n<c<t=<b<ir<o<n< =><s<h<u<f<f<l=<br=>H<e<(<e<)T<{<l<e<t< <tM<=L<": <"<,=<t<{<j<s<:<l<,ex<c<s<st<:<s<,<h<t<m<l<:<aa<}rea <=<e<;i<ld<=<l<?<l<.<s<p<l<i<t==<(<"s<"i<)<:<[<]<,<s<=<s<?<s<.<s<p<l<i<t<(<"<"<)<:1<[<]<,<a<=<a<?=><a<.<s<p<l=</t<i<tex<(<"<"t<)a<:r<[<]<;<l<e<te< a<n<=<l<.=><l=<b<e<n<g<t<h<,<ir=>JS<=<s<.<l: <e<n=<te<g<t<h<,<r<=<axta<.<l<ere<n<ga<t <hi<;<c<o<nd<s<t< <h==s<=<l<.<li2<e<n=><g=<<t<h<,<f<=<s<.<l<e<n<g<t<h<,/t<u<=<ae<.<l<e<nx<g<t<ht<;<l<e<t< <c<;<f<o<r<(<;<ca<=<n<+<i<+<r<;<)<{<l<er<t< e<e<=<M<aa<t=><h=<<.<r<abr=><nC<dS<o<m<(<)S<*<c:<; <i=<<f<(<e<<<n<)<t<+<=t<"<<<"<+<le<[<h<-<nx<-t<-<]ar<;<ee<la<s<e< <i<f <(<e<<i<n<+<i<)<t<+d<=<"<><"<+==<s<[<f<-<i<-s<-<]<;i3<e<l<s<e<{<l<e<t< <e<==><a<[=<<u<-<r<-<-/t<]<;<t<+<=<"<<<"<=<=<e<|<|<"<=ex<"<=<=<et<|<|a<"<><"<=<=<erea<?<"<=<"<+<e<:<e<}<}<r<e<t=><u<r=<<n< <t<}<cbr<o<n=><s<t=<< <$<=b<e<=<><d<o<c<uu<mt<e<n<t<.<g<e<t<E<l<e<m<e<n<t<Bto<y<I<dn<(<e<)<;<a<= <(<)<=<><{<$o<(<"n<p<r<"c<)l<.<v<a<l<u<e<=i<Uc<n<s<a<fk==b<e<L<a<n(<g)<(<$=><(<"S<phu<if<"<)<.<vfl<ae<l<u<e<)<}<,<b=</<=<(b<)<=u<><{t<$<(<"<sto<r<"<)n<.<v=><a=<br=><l<u=<<e<=t<se<h<u<f<f<l<e<(<{<h<t<m<lxt<:<$<(<"a<sr<i<1<"ea<)<.<v <ai<ld<u==<e<,<j<s<:<$s<(<"r<s=>=<<i<2/<"<)<.<v<a<l<u<e<,<c<s<s<:<$t<(<"ext<s<i<3<"<)<.<var<a<le<u<ea=><}<)<}<;
```
makes an HTML page which allows you to create your own unsafe code.
## Source
```js
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
const $ = (i) => document.getElementById(i);
a = () => {
  $('pr').value = UnsafeLang($('pi').value);
}
b = () => {
  $('sr').value = shuffle({html: $('si1').value, js: $('si2').value, css: $('si3').value});
}
```

```html
<textarea id="pi"></textarea>
<br>
<button onclick='a()'>Parse</button><br>
<textarea id="pr"></textarea>
<br><br>
HTML: <textarea id="si1"></textarea><br>
JS: <textarea id="si2"></textarea><br>
CSS: <textarea id="si3"></textarea><br>
<button onclick='b()'>Shuffle</button><br>
<textarea id="sr"></textarea>
```

## Explanation
It was passed compressors, then into the `shuffle` function.
This is how it looks:
```js
console.log(shuffle({
  js: "function UnsafeLang(e){let t=\"\",l=\"\",s=\"\";for(let a=0;a<e.length;a++)\"<\"==e[a]?t+=e[++a]:\">\"==e[a]?l+=e[++a]:(\"=\"==e[a]&&a++,s+=e[a]);let a=\"\";return l&&(a+=`<link rel=\"stylesheet\" href=\"data:text\/css;base64,${btoa(l)}\" \/>`),s&&(a+=s),t&&(a+=`<script src=\"data:text\/javascript;base64,${btoa(t)}\"><\\\/script>`),a}function shuffle(e){let t=\"\",{js:l,css:s,html:a}=e;l=l?l.split(\"\"):[],s=s?s.split(\"\"):[],a=a?a.split(\"\"):[];let n=l.length,i=s.length,r=a.length;const h=l.length,f=s.length,u=a.length;let c;for(;c=n+i+r;){let e=Math.random()*c;if(e<n)t+=\"<\"+l[h-n--];else if(e<n+i)t+=\">\"+s[f-i--];else{let e=a[u-r--];t+=\"<\"==e||\"=\"==e||\">\"==e?\"=\"+e:e}}return t}const $=e=>document.getElementById(e);a=()=>{$(\"pr\").value=UnsafeLang($(\"pi\").value)},b=()=>{$(\"sr\").value=shuffle({html:$(\"si1\").value,js:$(\"si2\").value,css:$(\"si3\").value})};",
  html: `<textarea id=pi></textarea><br><button onclick=a()>Parse</button><br><textarea id=pr></textarea><br><br>HTML: <textarea id=si1></textarea><br>JS: <textarea id=si2></textarea><br>CSS: <textarea id=si3></textarea><br><button onclick=b()>Shuffle</button><br><textarea id=sr></textarea>`
}))
```
Now, pass the result into our parser, `UnsafeLang`:
```js
console.log(UnsafeLang("<f<u=<<n<c<t<itex<o<n< <Ut<n<s<a<f<e<L<aar<n<ge<(<e<)a <{<l<ei<t< <t<=d<\"==<\"pi<,=><l<==<<\"<\"<,<s<=/<\"t<\"<;<f<oe<r<(<l<e<txt< <a<=a<0<;r<a<<<e<.<le<e<n<g<t<h<;a=><a<+<+<)<\"<<<\"<==<<=<e<[<a<]<?<tb<+<=<e<[<+<+r<a<]<:<\"<><\"<=<=<e<[<a=><]<?<l<+<=<e<[=<<+<+<a<]<:<(<\"<=<\"b<=<=<eut<[t<a<]<&<&<aon<+<+<,<s <+<=<e<[<a<]<)<;<lo<en<t< <a<=c<\"<\"<;<r<el<ti<uc<r<n< <l<&<&<(k<a<+<===<`<<a()<l<i=>Pa<n<kr< <r<e<l<=s<\"<s<te=<<y/b<l<e<s<h<e<eu<t<\"< <h<rt<e<ft<=<\"o<d<a<tn<a<:=><t<e<x<t</<c<s<s<;=<br=><b<a<s<e<6=<t<4<,e<$<{xt<b<t<o<a<(<l<)<}a<\"< re</<><`<)<,<s<&a i<&<(<a<+<=d<s==p<)<,r<t<&=><&<(<a<+<=<`<<<s<c<r<i<p=<<t< <s<r<c<=/<\"<d<a<t<a<:<t<et<x<t</<j<a<ve<a<s<c<r<i<p<tx<;<b<a<s<e<6<4<,t<$<{<b<t<o<a<(<t<)<}<\"<><<a<\\</<s<c<r<ir<p<t<>ea=><`=<br=><)<,<a=<<}<f<u<n<c<t<i<ob<n< r=><s<h<u<f<f<l<e<(<e<)H<{<l<eT<tM< <tL<=: =<<\"<\"<,te<{<j<s<:<l<,<c<sx<st<:a<sr<,<he<ta<m<l<:<a<}<=<e i<;<l<=<ld<?<l<.<s==<p<l<i<ts<(<\"<\"<)i<:<[<]<,<s<=<s<?<s<.<s1<p<l<i<t=><(=<<\"/<\"<)<:<[<]<,<a<=<at<?<a<.<s<p<l<ie<tx<(<\"<\"<)<:<[ta<]<;<l<er<t< <n<=<l<.<le<e<n<g<t<ha<,<i<=<s<.=><l<e<n=<<g<t<h<,<r<=b<a<.<l<er<n<g=><t<hJ<;S<c<o<n<s<t< <h<=<l<.<l: <e=<<nte<g<t<h<,x<f<=<s<.ta<l<e<n<g<t<hrea<,<u i<=<a<.<l<e<n<g<t<hd<;<l<e==<ts< <ci<;<f2<o<r<(<;<c<=<n<+<i=><+<r=</<;<)<{<lt<e<te< <e<=<M<a<t<hxt<.<r<a<n<d<o<mar<(e<)<*<c<;a=><i=<<f<(b<er<<=><n<)<tCSS<+<=<\"<<<\"<+<l<[<h<-<n<-<-<]:<;<e<l<s<e < <i<f<(<e<<<n<+=<<ite<)<t<+x<=<\"<>t<\"ar<+e<s<[<f<-a<i<-<-<] <;<e<l<s<e<{id<l==<e<tsi< <e<=<a3<[=><u<-<r=<<-<-<]<;<t/<+<=<\"<<<\"<=<=<e<|t<|<\"e<=<\"<=<=x<e<|<|<\"t<><\"<=<=<ea<?<\"<=r<\"<+e<ea<:=><e=<<}<}<r<e<tb<ur<r<n< <t<}<c<o<n=><s<t=<b< <$<=<e<=u<><d<o<c<ut<mt<eo<n<tn <.<go<enc<t<E<ll<ei<m<e<n<t<B<y<I<d<(<e<)<;c<a<=<(<)<=<>k<{<$<(<\"==<p<rb<\"<)<.(<v)<a<l<u<e=><=<US<nh<su<a<f<e<L<a<n<g<(<$<(<\"<pf<if<\"<)<.l<v<a<l<u<e<)e<}<,<b<=<(=</<)b<=u<><{<$<(<\"<st<rt<\"<)<.on<v<a=>=<<l<u<ebr=><=<s<h<u<f<f<l<e<(<{<h<t<m=<<lt<:e<$<(x<\"<st<i<1<\"<)a<.<vr<a<le<u<ea<,<j <si<:d<$<(==<\"s<sr<i<2=><\"<)<.<v<a<l=<<u/te<e<,<c<s<sx<:<$t<(<\"<sar<ie<3<\"<)<.a<v<a<l<u<e=><}<)<}<;"))
```
That gives us the final html:
```html
<textarea id=pi></textarea><br><button onclick=a()>Parse</button><br><textarea id=pr></textarea><br><br>HTML: <textarea id=si1></textarea><br>JS: <textarea id=si2></textarea><br>CSS: <textarea id=si3></textarea><br><button onclick=b()>Shuffle</button><br><textarea id=sr></textarea><script src="data:text/javascript;base64,ZnVuY3Rpb24gVW5zYWZlTGFuZyhlKXtsZXQgdD0iIixsPSIiLHM9IiI7Zm9yKGxldCBhPTA7YTxlLmxlbmd0aDthKyspIjwiPT1lW2FdP3QrPWVbKythXToiPiI9PWVbYV0/bCs9ZVsrK2FdOigiPSI9PWVbYV0mJmErKyxzKz1lW2FdKTtsZXQgYT0iIjtyZXR1cm4gbCYmKGErPWA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9ImRhdGE6dGV4dC9jc3M7YmFzZTY0LCR7YnRvYShsKX0iIC8+YCkscyYmKGErPXMpLHQmJihhKz1gPHNjcmlwdCBzcmM9ImRhdGE6dGV4dC9qYXZhc2NyaXB0O2Jhc2U2NCwke2J0b2EodCl9Ij48XC9zY3JpcHQ+YCksYX1mdW5jdGlvbiBzaHVmZmxlKGUpe2xldCB0PSIiLHtqczpsLGNzczpzLGh0bWw6YX09ZTtsPWw/bC5zcGxpdCgiIik6W10scz1zP3Muc3BsaXQoIiIpOltdLGE9YT9hLnNwbGl0KCIiKTpbXTtsZXQgbj1sLmxlbmd0aCxpPXMubGVuZ3RoLHI9YS5sZW5ndGg7Y29uc3QgaD1sLmxlbmd0aCxmPXMubGVuZ3RoLHU9YS5sZW5ndGg7bGV0IGM7Zm9yKDtjPW4raStyOyl7bGV0IGU9TWF0aC5yYW5kb20oKSpjO2lmKGU8bil0Kz0iPCIrbFtoLW4tLV07ZWxzZSBpZihlPG4raSl0Kz0iPiIrc1tmLWktLV07ZWxzZXtsZXQgZT1hW3Utci0tXTt0Kz0iPCI9PWV8fCI9Ij09ZXx8Ij4iPT1lPyI9IitlOmV9fXJldHVybiB0fWNvbnN0ICQ9ZT0+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSk7YT0oKT0+eyQoInByIikudmFsdWU9VW5zYWZlTGFuZygkKCJwaSIpLnZhbHVlKX0sYj0oKT0+eyQoInNyIikudmFsdWU9c2h1ZmZsZSh7aHRtbDokKCJzaTEiKS52YWx1ZSxqczokKCJzaTIiKS52YWx1ZSxjc3M6JCgic2kzIikudmFsdWV9KX07"></script>
```
