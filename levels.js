code_page = `
→←↓↑↖↗↘↙⇑£␊⇓↕↔∕∖
↥↧≤≥¦§°±Þþß⍶⍷⍸⍹✸
 !"#$%&'()*+,-./
0123456789:;<=>?
@ABCDEFGHIJKLMNO
PQRSTUVWXYZ[\]^_
`abcdefghijklmno
pqrstuvwxyz{|}~¡
×ĀĄĈĐĖĚĜĤĪĴĶĹŁŇŌ
ŒØŘŠŤŬŮŴÝŶŽ‼⁇⁈⁉‽
÷āąĉđėěĝĥīĵķĺłňō
œøřšťŭůŵýŷž¿©®ªº
⁰¹²³⁴⁵⁶⁷⁸⁹‘’‚‛‹›
₀₁₂₃₄₅₆₇₈₉“”„‟«»
αβγδεζηθικλμνξοπ
ρςστυφχψωΔΘΛΞΣΨΩ
`

code_page = code_page.replace('\n', '').replace('␊', '\n')
cp = list(code_page)
