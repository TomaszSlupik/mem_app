# Mem


## Online

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

Główny panel aplikacji to możliwość dodania mema. Memy z ilością (Zagłosuj - Negatywny > 5) trafiają na route ‘/hot’, pozostałe przechowywane są w '/regular.

Na dodawanie mema zrobiona jest walidacja. Użytkownik, aby mógł dodać mema, musi podać nazwę Mema oraz wybrać zdjęcie. W przeciwnym wypadku nie doda mema.

W głównym panelu jest też nawigacja 

