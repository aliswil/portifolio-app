# Nedlastninger for Mac

## Installere VScode

[Last ned fra denne lenken](https://code.visualstudio.com/download)

## Åpne terminalen
Åpne foretrukket terminal på Mac.
Hvis du ikke har noen foretrukket terminal, så kan du åpne default: 

(cmd + space) -> Terminal

## Installere homebrew

Homebrew er et gratis og åpen kildekodebehandlingssystem for programvarepakke som forenkler installasjonen av programvare på Apples operativsystem, macOS, så vel som Linux.

[Homebrew dokumentasjon](https://brew.sh/)

For å laste ned homebrew legger du til følgende kommando i terminalen:

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

### Xcode Command Line Tools

Dersom du ikke har Xcode Command Line Tools installert fra før vil du få beskjed om at det blir installert. Trykk enter dersom meldingen vises. Merk at denne nedlastningen kan ta noen minutter. 

### Legge til homebrew til riktig path

Før du begynner å laste ned noe med homebrew må du legge det til i din "path". Du vil få opp hva du skal legge inn i terminalen under "==> Next step" etter du har lastet det ned. Kopier de tre kommandoene fra terminalen, lim de inn og trykk enter. 

## Installere Node

### Installere via homebrew

Legg til følgende kommando i terminalen:

`brew install node` 

### Installere via nettside

[Last ned fra denne lenken](https://nodejs.org/en/download/)

Etter installeringen er ferdig kan du legge inn følgende kommando i terminalen for å se at du har riktig versjon: 

`npm version`

Hvis du har installert riktig skal du få opp noe lignende dette (versjonen kan være nyere): 

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




