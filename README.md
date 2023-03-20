# Biblioteca npm fatzzx
Olá! Me chamo Fatzzx e tenho 19 anos. Atualmente, estou cursando Engenharia de Computação, A criação dessa biblioteca foi uma forma de aprimorar meus conhecimentos em Node.js e programação em geral. 

A biblioteca npm fatzzx é uma ferramenta de análise de arquivos que pode ajudar a identificar se um arquivo está ou não em conformidade com determinados padrões e requisitos.

Para usar a biblioteca fatzzx, siga as instruções abaixo:

# 📁 Acesso ao projeto

```
npm install fatzzx
```

# 🛠️ Abrir e rodar o projeto

Adicione o seguinte código ao arquivo package.json na seção "scripts":
```json
"cli": "node ./node_modules/fatzzx/src/cli.js"
```
Você tambem deve definir o type como mudule:
```json
"type": "module"
```
Para usar o script, execute o seguinte comando:
```bash 
npm run cli "caminho do arquivo" -- --valid
```
Certifique-se de substituir "caminho do arquivo" pelo caminho para o arquivo que você deseja analisar.

O parâmetro opcional "--valid" indica que o script deve verificar se os links são validos, retornando os codigos de status de cada requisição.

Se quiser apenas vizualizar os links e suas descrições apenas rode:
```bash 
npm run cli "caminho do arquivo" 
```

# Autor
<img src="https://avatars.githubusercontent.com/u/112991044?v=4" width=115><br><sub>Fatzzx</sub>



