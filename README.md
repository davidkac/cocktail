**Koktel Majstor**

Nalazite se u ulozi front-end developera i pred vama jje sledeća situacijja:

Backend tim je pročitao zahteve klienta i u skladu sa zahtevima kreirao end pointe

kako bi vama omogućio izvršenje cilja. Svi API su dokumentovani na sledecem linku:

<https://www.thecocktaildb.com/api.php>

Preporuka koristiti postman kako bi videli detalje vezane za dostupne API

API lista nije nužno potpuna i ostvrativanje određenih ciljeva zahteva inprovizaciju

od strane front-end developera

**Zahtevi klijenta:**

Aplikaciju je potrebno razviti uz pomoć React.JS

Komunikaciju sa backendom ostvariti uz pomoć biblioteke Axios (

<https://www.axios.com/>)

Za globalni state management koristiti biblioteku Redux (<https://redux.js.org/>)

Po potrebi koristiti MUI (<https://mui.com/material-ui>/)

**Opis aplikacijje:**

Početna stranica se nalazi na ruti [**http://localhost:{port}/home**](http://localhost:{port}/home)[** ](http://localhost:{port}/home)i sadrži:

Header sa navigacionim barom (ka drugim delovima aplikacije)

Centralni deo sa "Omiljenim koktelima" (sačuvani u lokalnom skladištu) svaki

koktel vodi na stranicu sa detaljnim opisom.

Footer deo sa kratkim opisom aplikacije

Na ruti [**http://localhost:{port}/coctail/{coctail-id}**](http://localhost:{port}/coctail/{coctail-id})[** ](http://localhost:{port}/coctail/{coctail-id})treba da se nalazi detaljan

opis za izabrani koktel i sadrži:

Naziv pića




<a name="br2"></a>Indikator da li je u pitanju alkoholno piće Kategorija pića

Deo sa instrukcijama sa mogućnosti izbora jednog od dostupnih jezika (dropdown-

lokalizacija) Vrsta čaše u kojoj se piće služi

Slika pića u pitanju

Mogućnost dodavanja pića u omiljena

Lista sastojaka (Sa slikama u koliko su dostupne)

(opciono) Embeded YouTube player sa video instrukcijama za pravljenje datog

pića

(Uzeti u obzir slučaj kada korisnik u navigaciji unese ID od nepostojećeg pića)

Na ruti [**http://localhost:{port}/categories**](http://localhost:{port}/categories)[** ](http://localhost:{port}/categories)treba da se nalazi tabelarni prikaz

dostupnih kategorija pića

Na ruti [**http://localhost:{port}/glasses**](http://localhost:{port}/glasses)[** ](http://localhost:{port}/glasses)treba da se nalazi tabelarni prikaz

dostupnih čaša

Na ruti [**http://localhost:{port}/ingredients**](http://localhost:{port}/ingredients)[** ](http://localhost:{port}/ingredients)treba da se nalazi tabelarni prikaz

dostupnih sastojaka (sa svim dostupnim informacijama)

Na ruti [**http://localhost:{port}/bartender-beginner**](http://localhost:{port}/bartender-beginner)[** ](http://localhost:{port}/bartender-beginner)stranica sa

mogućnostima osnovnog filtriranja

Filtriranja mogu biti rađena po četiri kriterijuma (Glass, Category, Alcohol,

Ingridient)

Potrebno je izabrati najmanje jednu od četiri opcije

Prilikom pretrage korisnik dobija listu pića koja zadovoljava primenjene filtere.

Pića je moguće dodati u Omiljene, moguće je i videti detaljan opis klikom na njih

(vodi nas na stranicu sa detaljnim opisom)

(opciono) Deep-linking za filter opcije. Kako bi korisnik mogao pristupiti

popunjenim filterima putem URL-a

(opciono) Izbor AND / OR logike izmedju filtera

Na ruti [**http://localhost:{port}/bartender-veteran**](http://localhost:{port}/bartender-veteran)[** ](http://localhost:{port}/bartender-veteran)stranica sa mogućnostima

naprednog filtriranja

Važi sve kao iz prethodne stavke



<a name="br3"></a>Korisnik ima dodatnu opciju da filtrira po proizvoljnom broju stavki iz svake od

kategorija

(opciono) Deep-linking za filter opcije. Kako bi korisnik mogao pristupiti

popunjenim filterima putem URL-a

(opciono) Izbor AND / OR izmedju filtera i unutar kategorije