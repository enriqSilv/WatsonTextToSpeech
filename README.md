# Projeto Watson Text to Speech

Este é um projeto simples que demonstra como usar o serviço Text to Speech da IBM Watson para converter texto em fala e depois transcrever o áudio gerado de volta em texto.

## Configuração do Ambiente

Antes de começar, certifique-se de ter uma conta na IBM Cloud e ter criado um serviço Text to Speech. Você precisará das credenciais de API desse serviço para interagir com a API do Watson.

## Instalação e Configuração

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/projeto-watson-text-to-speech.git
2. Você precisa ter instalado o NodeJS
   Passe o seguinte código no terminal.  
        npm install ibm-watson   
   Isso instalará a biblioteca necessária para interagir com o serviço Watson Text to Speech.

   Passe o seguinte código no terminal.  
        npm install mic 
   O comando "npm install mic" é usado no Node.js para instalar o pacote chamado "mic". Este pacote é uma biblioteca Node.js que fornece uma interface para gravar áudio usando o microfone do sistema.

   Passe o seguinte código no terminal. <br />
         npm install watson-developer-cloud –save <br />
   O comando "npm install watson-developer-cloud --save" é utilizado no Node.js para instalar o pacote "watson-developer-cloud" e salvar essa dependência no arquivo "package.json" do seu projeto.

    Passe o seguinte código no terminal. <br />
        npm install shelljs <br />
    Comando npm install shelljs é usado para instalar o pacote ShellJS no seu projeto Node.js.

   Passe o seguinte código no terminal. <br />
        Node fala.js <br />
   Isso iniciará a execução do script Node.js. Ele se conectará ao serviço Watson Text to Speech, converterá o texto especificado em áudio e salvará o arquivo de áudio como output.wav na mesma pasta onde o script está localizado. 
