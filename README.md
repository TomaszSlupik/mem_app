# Mem


## Na żywo

Mem app została utworzona pod Desktopy 💻
oraz urządzenia mobilne 📱. 

`<link>` : <https://tomaszslupik.github.io/mem_app/>

## Technologie

Projekt został stworzony w technologiach:

- Html
- Scss
- React
- Redux (w katalogu "store" - jest implementacja jednak wybrałem zwykłą metodę do przechowywania stanu)
- Material UI

## Opis
### Główny panel

Aplikacja polega na wyświetlaniu Memów. 

Główny panel aplikacji to możliwość dodania mema. Memy z ilością (Podoba mi się - Nie podoba mi się > 5) trafiają na route ‘/hot’, pozostałe przechowywane są w '/regular.

Na dodawanie mema zrobiona jest walidacja. Użytkownik, aby mógł dodać mema, musi podać nazwę Mema oraz wybrać zdjęcie. W przeciwnym wypadku nie doda mema.

Po poprawnym wypełnieniu danych, użytkownik dotaje informacje w formie Alerta ("Zielony" - jeżeli jest Ok lub "Czerwony" jeżeli jest coś nie tak).

W głównym panelu jest też nawigacja. 

Użytkownik może również zmienić wygląd koloru aplikacji po kliknięciu w palete kolorów.

### Panel Gorące 

W sekcji Gorące znajdują się memy z liczbą powyżej 5 głosów. Użytkownik ma możliwość używania kontrolek. Filtrowanie działa live. Jeżeli liczba głosów spadnie na poniżej 5 trafi on do sekcji Regular. 

Widok memów wyświetlany jest w dwóch różnych formach w zależności od preferencji.

Użytkownik również ma możliwość wybrania preferowanego języka: Angielski, Francuski lub Niemiecki. 

Dodatkowo w obu sekcjach została stworzona wyszukiwarka do znalezienia Mema.

Zrobiona również jest tutaj walidacja - w przypadku gdy kontrolki osiągną wartość 0. 


### Panel Regular 

W tej sekcji znajdują się memy z liczbą głosów mniejszą niż 5. Całość też działa live a widok jest taki sam jak w penalu Gorące. 

Dodatkowo w obu sekcjach została stworzona wyszukiwarka do znalezienia Mema.

### Footer 

Footer został zrobiony z autorem aplikacji oraz aktualnym rokiem kalendarzowym. 