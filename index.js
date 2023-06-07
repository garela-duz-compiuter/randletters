const alphabets = [
  ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
  ['𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫', '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ'],
  ['𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟', '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅'],
  'ÃᵇČ∂𝑒𝔣ق𝐇ι𝐣ķ𝓁ᵐŇⓄƤợＲŜＴ𝐔ᵛŴⓧ𝓨z',
  ['𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃', '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'],
  ['𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣', '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉'],
  ['ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ', 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ', '⓪①②③④⑤⑥⑦⑧⑨'],
  'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz',
  'ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ'
]


/** @param {string} text to convert to random letters */
const rand_letters = text => {
  let res = ''

  for (const [i, alphabet] of alphabets.entries())
    if (!Array.isArray(alphabet)) alphabets[i] = [alphabet]

  /** @function separate unicode letters of a list */
  const separate_letters = alphabet => {
    const res = []
    for (const letter of alphabet) res.push(letter)
    return res
  }

  /** @function which group does the char fits in */
  const test_group = char => {
    const ranges = [
      [97, 122], // 0: lower case letters
      [65, 90],  // 1: upper case letters
      [48, 57]   // 2: numbers
    ]

    const ascii = char.charCodeAt(0)

    for (const [i, range] of ranges.entries()) {
      if (range[0] <= ascii && ascii <= range[1])
        return [i, ascii - range[0]]
    }

    return [-1, 0]
  }

  for (const char of text) {
    const char_ascii = char.charCodeAt(0)
    const [char_group, char_index] = test_group(char)

    const alphabet = alphabets[Math.floor(Math.random() * alphabets.length)]

    if (char_group == -1 || alphabet.length <= char_group) {
      res += char
      continue
    }

    res += separate_letters(alphabet[char_group])[char_index]
  }

  return res
}

console.log(rand_letters('garela duz compiuter 303'))
