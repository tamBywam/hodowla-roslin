# Aplikacja internetowa - Symulator hodowli roślin (JavaScript)

Aplikacja powinna pozwolić użytkownikowi na hodowanie wirtualnych roślin, dbanie o nie poprzez podlewanie i nawożenie.

## Wymagane funkcje

1. **Wybór rośliny**  
   Na początku gry użytkownik może wybrać jedną roślinę (spośród co najmniej 3 dostępnych roślin), reprezentowaną przez jej zdjęcie.

2. **Podlewanie**  
   Użytkownik może podlać roślinę, klikając na ikonkę kropli wody. Każde podlanie zwiększa rozmiar rośliny (zwiększa rozmiar zdjęcia rośliny).  
   - Jeśli roślina zostanie podlana więcej niż określoną liczbę razy (np. 5, 10), zamiera i zmienia kolor liści na brązowy.  
   - Mogą być też inne objawy – zmiana tła rośliny czy otoczenie ikonki kropli jako znak przelania.  
   - W przypadku podlewania więcej niż jednej rośliny, ilość wody jest równomiernie rozdzielana między wszystkie rośliny.

3. **Nawożenie**  
   Użytkownik może dodać nawóz do rośliny, klikając na ikonkę nawozu.  
   - Każde dodanie nawozu powoduje, że na grządce pojawia się dodatkowa roślina.  
   - Użytkownik nie może mieć więcej niż 5 roślin na grządce i 2 grządek.

4. **Ratowanie**  
   Jeśli roślina zamarła, użytkownik może ją uratować, klikając na ikonkę karetki.  
   - Roślina wtedy „odżywa” i zaczyna od nowa.  
   - Jeśli jest więcej niż jedna roślina, karetka ratuje wszystkie zmarłe rośliny.

5. **Ścinanie**  
   Użytkownik może ściąć roślinę, klikając na ikonkę siekiery.  
   - Użytkownik musi podać numer rośliny, którą chce ściąć.  
   - Jeśli jest tylko jedna roślina, jest ona „ożywiana” i ilość wody dla tej rośliny jest resetowana do 0.

6. **Ograniczenia**  
   - Rozmiar zdjęcia rośliny nie może przekroczyć 60% wysokości ekranu.  
   - Gdy roślina osiągnie maksymalną wysokość, powinien się pojawić komunikat:  
     **„Roślina osiągnęła maksymalną wysokość”**.

---

## Ćwiczymy

- **Składnię języka JavaScript**  
  Zmienne, instrukcje warunkowe, pętle, funkcje.

- **Manipulację DOM**  
  Zmiana wyglądu i ilości zdjęć roślin.

- **Obsługę zdarzeń**  
  Reagowanie na kliknięcia użytkownika na różne ikonki.

- **Dzielenie logiki na podzadania**  
  Zarządzanie cyklem życia rośliny.
