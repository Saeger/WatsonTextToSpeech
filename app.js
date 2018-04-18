var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

var text_to_speech = new TextToSpeechV1({
  username: 'f64031cf-6df4-4555-905a-33e40f26a3cd',
  password: 'acNXOVsM62UH'
});

var params = {

  //text: "Olá Roberto Arteiro, tudo bem com você?",
  //text: "Seja bem vindo a Pítíssa do Zé. Como posso te ajudar?",
  text: 'Quais ingredientes você gostaria? Temos queijo, atum e calabresa',
  voice: 'pt-BR_IsabelaVoice',
  //voice: 'en-US_AllisonVoice',
  //language: 'pt-BR',
  accept: 'audio/mp3'
};

// Pipe the synthesized text to a file
console.log('Sintetizando...');
text_to_speech.synthesize(params).pipe(fs.createWriteStream(process.argv[2]?process.argv[2]+'.mp3':'teste.mp3'));