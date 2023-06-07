const alphabets = [
  'abcdefghijklmnopqrstuvwxyz',
  '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫',
  '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟',
  'ÃᵇČ∂𝑒𝔣ق𝐇ι𝐣ķ𝓁ᵐŇⓄƤợＲŜＴ𝐔ᵛŴⓧ𝓨z',
  '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃',
  '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
  'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
  'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz',
  'ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ'
]


/** @function rand_letters
 * @param {string} text to convert to random letters
 */
function rand_letters(text) {
  let res = ''

  for (const letter of text) {
    if (letter == ' ') {
      res += ' '
      continue
    }

    const letter_ascii = letter.charCodeAt(0) - 97
    const alphabet = alphabets[Math.floor(Math.random() * alphabets.length)]
    let letters = []

    for (const letter of alphabet) {
      letters.push(letter)
    }

    res += letters[letter_ascii]
  }

  return res
}

console.log(rand_letters('garela duz compiuter'))
