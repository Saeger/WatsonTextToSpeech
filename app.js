var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var fs = require('fs');

var text_to_speech = new TextToSpeechV1({
  username: '#USERNAME',
  password: '#PASSWORD'
});

var params = {
  text: 'Mensagem de exemplo',
  voice: 'pt-BR_IsabelaVoice',
  //voice: 'en-US_AllisonVoice',
  //language: 'pt-BR',
  accept: 'audio/mp3'
};

// Pipe the synthesized text to a file
console.log('Sintetizando...');
text_to_speech.synthesize(params).pipe(fs.createWriteStream(process.argv[2]?process.argv[2]+'.mp3':'teste.mp3'));