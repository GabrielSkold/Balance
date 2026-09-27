# Balance

Balance är en applikation för att få överblick över sin privatekonomi. Användaren kan registrera inkomster och utgifter, filtrera transaktioner och se hur utgifterna fördelas mellan olika kategorier.

Projektet är byggt som examinerande uppgift i kursen JavaScript 3 med fokus på React. Applikationens gränssnitt är på engelska.

## Funktioner

- Lägg till och ta bort transaktioner.
- Validering med felmeddelanden för respektive formulärfält.
- Kategorier som anpassas efter inkomst eller utgift.
- Översikt över totala inkomster, utgifter och saldo.
- Filtrering av översikten efter månad.
- Filtrering av transaktioner efter typ, månad eller specifikt datum.
- De fem senaste transaktionerna i den valda perioden.
- Utgifter per kategori med belopp och procentuella staplar.
- Valutaomvandling från SEK till EUR.
- Kategoriikoner samt formaterade belopp och datum.
- Responsiv layout för mobil och desktop.

## Teknik

- React och JavaScript
- Vite
- React Router
- CSS
- Lucide React
- localStorage
- Frankfurter API

## Kör projektet lokalt

Du behöver ha Node.js och npm installerat.

1. Klona projektet:

   ```bash
   git clone https://github.com/GabrielSkold/Balance.git
   ```

2. Gå till projektmappen:

   ```bash
   cd Balance
   ```

3. Installera dependencies:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```

5. Öppna den lokala adress som visas i terminalen.

### Kontrollera och bygg projektet

Kontrollera koden med ESLint:

```bash
npm run lint
```

Skapa en produktionsbuild:

```bash
npm run build
```

## API

Valutaomvandlaren hämtar växelkursen mellan SEK och EUR från Frankfurter API:

https://api.frankfurter.dev/v2/rate/sek/eur

Under hämtningen visas ett loading-state. Om anropet misslyckas visas ett felmeddelande.

## Datalagring

Transaktioner sparas i webbläsarens localStorage och finns kvar efter omladdning.

Datan är lokal för den webbläsare och webbplatsadress där appen används. Den synkroniseras inte mellan enheter och kan försvinna om webbläsarens webbplatsdata rensas.

Appen hanterar fel vid läsning och sparande. Om sparad data inte kan läsas stoppas fortsatt sparande för att undvika att skriva över den.

## Projektstruktur

- `src/components/` – återanvändbara komponenter och delar av gränssnittet.
- `src/pages/` – sidorna Overview och Transactions.
- `src/utils/` – gemensamma hjälpfunktioner, exempelvis valutaformatering.
- `src/App.jsx` – routing, delat state och hantering av transaktioner.
- `src/App.css` – styling för applikationen.
- `src/index.css` – globala grundstilar.

## Uppfyllda kurskrav

### Grundkrav

- **Komponentstruktur:** fler än fem komponenter med avgränsade ansvarsområden, exempelvis Layout, TransactionsForm, TransactionsList, TransactionItem, SummaryCard och CurrencyConverter.
- **Routing:** Overview och Transactions binds samman med React Router utan fullständig sidomladdning.
- **Delat state:** transaktioner hanteras i App och skickas vidare via props till flera komponenter.
- **Lokalt state:** formulärfält och filter hanteras i de komponenter där de används.
- **Externt API:** valutaomvandlaren gör ett API-anrop med loading- och felhantering.
- **Formulär och validering:** obligatoriska fält kontrolleras och belopp måste vara större än noll.
- **Persistens:** transaktioner sparas i localStorage.
- **Kodkvalitet:** koden kontrolleras med ESLint.
- **Git:** utvecklingen har skett med feature branches, löpande commits och pull requests.

### Funktioner som stödjer VG-kriterierna

- **Utökad felhantering:** tomma tillstånd när inga transaktioner visas, felmeddelanden vid misslyckade API-anrop och hantering av lagringsfel.
- **Responsiv design:** layouten anpassas till mobil och desktop.
- **Utökad funktionalitet:** filtrering efter typ och datum, sortering av senaste transaktioner samt sammanställning av utgifter per kategori.
- **Commit-historik:** beskrivande commits och separata branches har använts genom projektets utveckling.
