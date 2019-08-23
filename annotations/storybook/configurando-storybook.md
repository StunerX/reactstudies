# Instalando e configurando o storybook com o ReactJS

## instalar storybook utilizando o npm:
```js
npm i -g getstorybook@1.6.1
```

assim que instalando é só executar comando: 

```js
getstorybook
```
com isso ele adiciona o storybook no seu projeto

para executar o storybook basta digitar o comando:

```js
 npm run storybook
```

por padrão ele fica escutando na porta __:6006__

## criando as primeiras stories 
para criar uma  __story__, basta criar um arquivo __*.story.js__

 nesse arquivo importar o storiesOf do __@kadira/storybook__

 ```js
    import { storiesOf } from '@kadira/storybook'
 ```

 o storiesOf recebe como primeiro parametro uma string, e o segundo parametro é o module
 
```js
    import { storiesOf } from '@kadira/storybook'

    storiesOf('Div', module)
```

o retorno disso é um objeto, e nele podemos usar a funcao add(param1, function), onde o primeiro parametro é um string e o segundo parametro é um componente do react

O codigo completo fica assim:
```js
    import { storiesOf } from '@kadira/storybook'

    storiesOf('Div', module).add('First Story', () => (
        <div>Hello, first story</div>
    ))
```