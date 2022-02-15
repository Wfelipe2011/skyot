# Skyot Camada Anticorrupção

- Integração do sistemas com bibliotecas externas

## Descrição

Às vezes, temos que integrar sistemas que estão em contextos delimitados diferentes.
Por exemplo, um sistema A precisa usar serviços de um sistema B, que pode inclusive ser um sistema externo, isto é, de uma outra organização. Para evitar que A tenha que se adaptar e usar, mesmo que parcialmente, a linguagem ubíqua de B, pode-se usar uma Camada Anticorrupção para mediar essa comunicação.

```bash
Sistema A -> [ Skyot ] -> Sistema B
```

## Instalação

```bash
  npm install skyot
```

## Como utilizar o skyot

### SkyotLogger

- Um decorate que fornece log do método, parâmetros e a saída.

```ts
// message = "Hello World"
import { SkyotLogger } from "skyot";

class A {
  @SkyotLogger()
  public helloWord(message: string): string {
    return message;
  }
}
```

- Terminal

```bash
[1644933258393] INFO (254625 on wilson-Vostro-3480): Method => "helloWord"
[1644933258393] INFO (254625 on wilson-Vostro-3480): Params => [ "Hello World" ]
[1644933258393] INFO (254625 on wilson-Vostro-3480): Return => "Hello World"
```

## Contato

- Author - Wilson Felipe <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png" width="15" alt="github icone" />
  Github
  </a>
  <a style="margin:5px" href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="blank"><img style="margin-right:5px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/256px-Linkedin_icon.svg.png" width="15" alt="Linkedin icone" />
  Linkedin
  </a>

## License

[MIT licensed](LICENSE).
