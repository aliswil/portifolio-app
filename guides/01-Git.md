# Git

## Forke repository

Når du "Forker" et prosjekt lager du en kopi av repoet til ditt eget prosjekt på din egen github der du kan eksperimentere med endringer uten å påvirke det originale prosjektet.

```
   Gå inn på dette prosjektet i github (pass på at du er pålogget).
   Klikk på Fork-ikonet oppe i hjørnet av denne siden.
   Som standard vil det originale prosjekt-navnet bli foreslått, men gjerne endre det til noe eget.
   Trykk på "Create fork" knappen.
```

## Åpne terminalen

Åpne foretrukket terminal. F.eks Git Bash, Command Prompt, Terminal eller iTerm.

## Forbered mappe hvor koden skal ligge

Lag en mappe i finder der du ønsker at koden skal ligge.
Når mappen er laget, så drar du den inn i terminal-vinduet.
Filstien til mappen vil dukke opp i terminalen. Eks: `C:\Documents\NTNU\` eller `/Users/stinesandberg/Jobb/Ada\ NTNU`
Skriv "cd" foran filstien som har dukket opp. Eks: `cd C:\Documents\NTNU\` eller `cd /Users/stinesandberg/Jobb/Ada\ NTNU`
Trykk Enter, og du er nå inni mappen du lagde.

Dersom det ikke fungerer å dra mappen inn i terminal-vinduet kan du navigere deg frem til den manuelt ved bruk av `cd` og `ls`.
Les dokumentasjonen [her for Mac](https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-terminal.html) og [her for Windows](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/).

Dersom du får opp en popup der terminalen vil ha tilgang til feks "filene i skrivebordet ditt", trykk ok.

## Clone repository

Her er det viktig at du går inn på din egen github profil og cloner prosjektet du akkurat har forket over til din personlige konto. 

`git clone [https link fra github]`

Eks:
`git clone https://github.com/zstinesandbergz/portifolio-app.git`

Du kan nå se i mappen du lagde om kode-filene har kommet inn i mappen.

## Klargjøre opplasting av lokale endringer til Github

Når du har gjort endringer i koden på din maskin, så er disse endringene bare lagret lokalt på din maskin.
For å laste opp endringene dine til Github så må du først definere hvilke av de endrede filene du vil laste opp:

Se hvilke filer som har blitt endret (endrede filer som ikke er klargjort for opplasting vises som røde):
`git status`

Dersom du ønsker å laste opp alle endrede filer kan du bruke følgende kommando (stort sett denne man trenger):
`git add .`

Dersom du ønsker å bare laste opp noen av de endrede filene så kan du bruke denne kommandoen:
`git add [filnavn]`

Eks:
`git add src/index.js`

Deretter kan du sjekke at filene du vil laste opp har blitt klargjort (de skal nå vises som grønne):
`git status`

## Opprette commit med de klargjorte filene

Nå som du har bestemt hvilke filer som skal lastes opp til Github, så må du lage en commit.
Dette er som et log-item/snapshot i git historikken til ditt prosjekt som viser hvilke endringer som har blitt gjort på dette tidspunktet.
Denne trenger en kort beskrivelse av hva som har blitt gjort; en såkalt commit message.

`git commit -m "Du skriver beskjeden din i mellom hermetegnene her"`

Eks:
`git commit -m "Updated the git-guide"`

## Pushe endringene til Github

Det eneste som nå gjenstår er å faktisk sende endringene til Github:

`git push`

Du kan nå gå inn i repositoriet på din bruker på github.com og se at endringene du har gjort i filene ligger der.
