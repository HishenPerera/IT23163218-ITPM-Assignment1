const { test } = require('@playwright/test');
const { TranslatorPage } = require('../utils/translatorPage');

const TEST_DATA = [
    //Question TCs
    { tcId: "Neg_001", input: "oyaa dhawalta kawadha?", expected: "ඔයා දවල්ට කෑවද?", type: "Question" },
    { tcId: "Neg_002", input: "eeta passe mona wenawada?", expected: "ඊට පස්සේ මොකද වෙන්නේ?", type: "Question" },
    //Command TCs
    { tcId: "Neg_003", input: "ithuru wada tika igana ganna kiyala", expected: "ඉතිරි වැඩ ටික ඉගෙන ගන්න කියලා", type: "Command" },
    { tcId: "Neg_004", input: "dawasata kalin ewanna ona meka", expected: "දවසට කලින් එවන්න ඕන මේක", type: "Command" },
    //Greeting TCs
    { tcId: "Neg_005", input: "suba udasanak wewa", expected: "සුභ උදෑසනක් වේවා", type: "Greeting" },
    { tcId: "Neg_006", input: "hada wenasak labenna oona", expected: "හොඳ වෙනසක් ලැබෙන්න ඕන", type: "Greeting" },
    //Request TCs
    { tcId: "Neg_007", input: "mehata awith idaganna", expected: "මෙහාට ඇවිත් ඉදගන්න", type: "Request" },
    { tcId: "Neg_008", input: "bonna watura tikak denna", expected: "බොන්න වතුර ටිකක් දෙන්න", type: "Request" },
    //Response TCs
    { tcId: "Neg_009", input: "hari oya kemathi deyak karannam", expected: "හරි ඔයා කැමති දෙයක් කරන්නම්", type: "Response" },
    { tcId: "Neg_010", input: "ow ehema deyak karamu", expected: "ඔව් එහෙම දෙයක් කරමු", type: "Response" },
    //Repeated Words TCs
    { tcId: "Neg_011", input: "mama mama kiyanne mama", expected: "මම මම කියන්නේ මම", type: "Repeated Words" },
    { tcId: "Neg_012", input: "oya oya kiyana de waradi", expected: "ඔයා ඔයා කියන දේ වැරදි", type: "Repeated Words" },
    //Inputs with Punctuation Marks TCs
    { tcId: "Neg_013", input: "ane! oyata dan kohomoda?", expected: "අනේ! ඔයාට දැන් කොහොමද?", type: "Punctuation" },
    { tcId: "Neg_014", input: "aiyyo! mokada une?", expected: "අයියෝ! මොකද උනේ?", type: "Punctuation" }
];

test.describe('Chat Singlish → Sinhala Evaluation', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.open();
  });

  for (const tc of TEST_DATA) {
    test(tc.tcId, async () => {
      const actual = await translator.translate(tc.input);

      const isAccurate = actual === tc.expected;

      const status = isAccurate
        ? 'ACCURATE'
        : 'INACCURATE (System Limitation)';

      console.log('========================');
      console.log('TC ID:', tc.tcId);
      console.log('TYPE:', tc.type);
      console.log('INPUT:', tc.input);
      console.log('EXPECTED:', tc.expected);
      console.log('ACTUAL:', actual);
      console.log('STATUS:', status);
      console.log('ACCURACY:', isAccurate);
    });
  }
});