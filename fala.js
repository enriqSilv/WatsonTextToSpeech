const { IamAuthenticator } = require('ibm-watson/auth');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const fs = require('fs');

// Credenciais do serviço Text to Speech
const apikey = 'SkksXFdV7wk-jZ10niQaOP-JSbWgqxVMoxThia5ez_jD';
const url = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/7615eef3-66f6-4ecc-a98d-5fd690d28459';

// Configuração do serviço
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey }),
  serviceUrl: url,
});

// Parâmetros para a conversão de texto para áudio
const params = {
  text: 'Olá, isso é um teste de conversão de texto para áudio com o Watson Text to Speech.',
  voice: 'pt-BR_IsabelaVoice', // Voz em português do Brasil
  accept: 'audio/wav',
};

// Realiza a conversão de texto para áudio
textToSpeech.synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(buffer => {
    fs.writeFileSync('output.wav', buffer); // Salva o áudio em um arquivo 'output.wav'
    console.log('Áudio salvo com sucesso!');
  })
  .catch(err => {
    console.log('Erro ao converter texto para áudio:', err);
  });
