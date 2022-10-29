# Kom i gang med å laste opp din nettside til skyen
Først må dere sette opp en gratis Azure konto her: https://azure.microsoft.com/en-us/free/students/


## Med Azure Portalen
Denne guiden kan dere også finne her: https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github

1. Gå til Azure Portalen [www.portal.azure.com] og logg dere inn med deres studentbruker 
2. Velg **Create a Resource**.
3. Søkt etter **Static Web Apps**.
4. Velg **Static Web Apps**.
5. Velg **Create**.

6. I fanen Basic må du gjøre følgende: 
- Lag en ny ressurs gruppe
- Fyll ut navn på appen din
- Under Deployment details velger dere GitHub som source (det er her koden til nettsiden ligger), og logger dere inn med GitHub kontoen deres. 
- Deretter velger dere riktig Organization, Repository og Branch ut fra der koden deres ligger.
- Under Build Details: velg React. La resten av feltene være defualt. 

7. Velg **Review + Create** 
8. Når ressursen er laget, velg **Go To Resource** 

9. Sørg for at deploymenten er ferdig. Trykk på banneret som sier **Select here to check the status of your GitHub Actions runs**. Når du har sett at alt har kjørt ferdig kan du gå til nettsiden via URLen. 

10. Trykk på **URL linken** for å komme til din nettside! 

## Med Visual Studio Code
Denne guiden kan dere også finne her: https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript

1. Installer **Azure Static Web Apps Extension** i Visual Studio Code. Den finner du ved å trykke på Extensions i menyen på venstre side og søke etter Azure Static Web Apps. 
2. Under installasjonen vil du måtte logge deg på din Azure-konto
3. Trykk på Azure Extension på venstre side
4. Høyreklikk på Static Web Apps og velg **Create Static Web App..**
5. Fyll ut informasjonen som trengs i stegene som kommer. 
- Appen må få et navn
- Under region kan du velge West Europe
- Velg React som build/project structure
- La location være '/' som er default
- På build location lar du default 'build' stå

6. Deretter er det bare å vente mens appen deployer. Du får en popup som sier at appen deployer. Klikk på **View Output** hvis du vil følge med på hvordan det går.
7. For å se nettsiden i nettleseren kan du høyreklikke på prosjektet under Static Web Apps Extension og velge **Browse Site** 
