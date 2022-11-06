# Nedlastninger for Mac

## Installere VScode

[Last ned fra denne lenken](https://code.visualstudio.com/download)

## Åpne terminalen
Åpne foretrukket terminal på Mac.
Hvis du ikke har noen foretrukket terminal, så kan du åpne default: 

(cmd + space) -> Terminal

## Installere homebrew
[Homebrew dokumentasjon](https://brew.sh/)

Legg til følgende kommando i terminalen:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Dersom du ikke har Xcode Command Line Tools installert fra før vil du få beskjed om at det blir installert. Trykk enter dersom meldingen vises.  

## Installere Node

### Installere via homebrew

Legg til følgende kommando i terminalen:

`brew install node`

Første gang du laster noe ned via homebrew kan det hende at du må opprette en "path" for homebrew. Du vil få opp hva du skal legge inn i terminalen under "==> Next step". Kopier de tre kommandoene fra terminalen, lim de inn og trykk enter. Prøv å installere node på nytt med samme kommando over. 

### Installere via nettside

[Last ned fra denne lenken](https://nodejs.org/en/download/)

Etter installeringen er ferdig kan du legge inn følgende kommando i terminalen for å se at du har riktig versjon: 

`npm version`

Hvis du har installert riktig skal du få opp noe lignende dette: 

```
  npm: '8.15.0',
  node: '16.17.0',
  v8: '9.4.146.26-node.22',
  ...
```

## Opprette bruker i Github

Gå inn på [Github.com](https://github.com/) og trykk på "sign up". Følg stegene til du har opprettet din egen bruker. 

## Installer github i terminalen

Følg guiden [her](01-GitMac.md)




