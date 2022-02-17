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
[1644933258393] INFO (254625): Method => "helloWord"
[1644933258393] INFO (254625): Params => [ "Hello World" ]
[1644933258393] INFO (254625): Return => "Hello World"
```

### Logger

- Uma versão mais perfomática que o console.log() tradicional

```ts
// message = "Hello World"
import { logger } from "skyot";

class A {
  
  public helloWord(message: string) {
    logger(message)
  }
}
```

- Terminal

```bash
[1644933258393] INFO (254625): "Hello World"
```

### Crypto

- Uma abstração da biblioteca crypto

#### encrypted

```ts
// message = "Hello World"
import { SkyotCrypto, logger } from "skyot";

class A {
  
  public helloWord(message: string) {
    const secretKey = '123'
    const messageEncrypted = SkyotCrypto.encrypted("hello world", secretKey)
    logger(messageEncrypted)
  }
}
```

- Terminal

```bash
[1645102590429] INFO (62682): U2FsdGVkX19p0dG0o5IA9GHwQxgEcwZCDMZdJm871NM=
```

#### descrypted

```ts
// message = "Hello World"
import { SkyotCrypto, logger } from "skyot";

class A {
  
  public helloWord(message: string) {
    const secretKey = "123";
    const messageEncripeted = 'U2FsdGVkX1/Okp/eZ/U7A4eTdf5/EIsp4iIxvy6+z00='
    
    const messagedDescrypted = SkyotCrypto.descrypted(messageEncripeted, secretKey);
    logger(messagedDescrypted);
  }
}
```

- Terminal

```bash
[1645102751367] INFO (63524): "hello world"
```

### JWT
- Os JSON Web Tokens são um método RFC 7519 padrão do setor aberto  para representar declarações de forma segura entre duas partes.

#### generateJwt
```ts
// message = "Hello World"
import { SkyotJWT, logger } from "skyot";

class A {
  
  public helloWord(message: string) {
    const token = SkyotJWT.generateJwt({name:"Skyot"})
    logger(token);
  }
}
```

- Terminal

```bash
[1645117856084] INFO (75716 on wilson-Vostro-3480): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2t5b3QiLCJpYXQiOjE2NDUxMTc4NTYsImV4cCI6MTY0NTIwNDI1Nn0.TOjcCs4dVIfBcwQtdjitXMslaS-dffkDOlHDOoTVNH8
```

#### decodeJwt
```ts
// message = "Hello World"
import { SkyotJWT, logger } from "skyot";

class A {
  
  public helloWord(message: string) {
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2t5b3QiLCJpYXQiOjE2NDUxMTc4NTYsImV4cCI6MTY0NTIwNDI1Nn0.TOjcCs4dVIfBcwQtdjitXMslaS-dffkDOlHDOoTVNH8'
    const payload = SkyotJWT.decodeJwt(token)
    logger(payload);
  }
}
```

- Terminal

```bash
[1645118123549] INFO (76417 on wilson-Vostro-3480):
    header: {
      "alg": "HS256",
      "typ": "JWT"
    }
    payload: {
      "name": "Skyot",
      "iat": 1645117856,
      "exp": 1645204256
    }
    signature: "TOjcCs4dVIfBcwQtdjitXMslaS-dffkDOlHDOoTVNH8"
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
