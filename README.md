Kosztorys projektu Smart Air Quality Monitoring
Koszty miesięczne

    Azure IoT Hub (Basic) – $10
    Azure Blob Storage (1TB) – $20
    Azure CosmosDB – $30
    Azure Functions – $10
    Hosting Frontend – $5
    Czujniki IoT (ESP32 + Sensory) - 10 szt. – $200 (jednorazowy koszt)
    Koszty marketingowe – $100
    Domena i certyfikat SSL – $10
    Rezerwa na rozwój – $50
 Łączny koszt miesięczny: $435
Koszty półroczne

    Azure IoT Hub (Basic) – $60
    Azure Blob Storage (1TB) – $120
    Azure CosmosDB – $180
    Azure Functions – $60
    Hosting Frontend – $30
    Koszty marketingowe – $600
    Domena i certyfikat SSL – $60
    Rezerwa na rozwój – $300
Łączny koszt półroczny: $1,410 + $200 (koszt czujników) = $1,610



Główne podmioty (Actors)

    Użytkownik końcowy (mieszkańcy, ekolodzy, instytucje)
        Korzysta z aplikacji do sprawdzania jakości powietrza
        Otrzymuje powiadomienia o przekroczeniu norm
        Może analizować dane historyczne

    Administrator (operator systemu)
        Rejestruje nowe czujniki
        Monitoruje i zarządza urządzeniami IoT
        Może edytować ustawienia alertów

    Urządzenie IoT (czujnik ESP32)
        Wysyła dane do chmury co określony czas
        Odbiera komendy dotyczące kalibracji lub restartu
        
Przypadki użycia
1. Sprawdzenie jakości powietrza

Aktorzy: Użytkownik końcowy

    Użytkownik loguje się do aplikacji lub korzysta jako gość.
    Wybiera lokalizację (może być automatycznie wykryta).
    System pobiera dane z bazy i wyświetla je na wykresach/mapie.
    Użytkownik może sprawdzić wartości PM2.5, PM10, CO2, temperatury, wilgotności.
    (Opcjonalnie) Użytkownik może zmienić zakres czasu i zobaczyć dane historyczne.
    Warunki końcowe: Dane zostają wyświetlone, a użytkownik może je przeanalizować.

2. Ustawienie alertu o przekroczeniu norm

Aktorzy: Użytkownik końcowy

    Użytkownik przechodzi do zakładki „Alerty”.
    Ustawia próg dla np. PM2.5 > 50 µg/m³.
    Wybiera sposób powiadomienia (e-mail/SMS/push).
    System zapisuje ustawienia alertu.
    Jeśli dane przekroczą ustalony próg, użytkownik otrzymuje powiadomienie.
    Warunki końcowe: Alert jest aktywowany, a użytkownik zostanie powiadomiony w razie potrzeby.

3. Zarządzanie urządzeniami IoT

Aktorzy: Administrator

    Administrator loguje się do panelu administracyjnego.
    Przechodzi do sekcji „Urządzenia IoT”.
    Może wykonać następujące akcje:
        Dodać nowe urządzenie (wprowadza ID, lokalizację, typ czujnika).
        Edytować istniejące urządzenie (zmiana nazwy, lokalizacji).
        Usunąć urządzenie (jeśli jest nieaktywne).
    Zmiany zostają zapisane w bazie danych.
    Warunki końcowe: System aktualizuje listę czujników, a nowe urządzenie zaczyna wysyłać dane.

4. Przeglądanie danych historycznych

Aktorzy: Użytkownik końcowy, Administrator

    Użytkownik wybiera zakładkę „Historia danych”.
    Wybiera zakres dat (np. ostatnie 7 dni, ostatni miesiąc).
    System pobiera dane z bazy i generuje wykres.
    Użytkownik może filtrować dane (np. tylko PM2.5, tylko CO2).
    (Opcjonalnie) Użytkownik eksportuje dane do pliku CSV.
    Warunki końcowe: Dane zostają wyświetlone, użytkownik może je przeanalizować lub pobrać.

5. Pobieranie danych przez API (dla instytucji)

Aktorzy: Urząd miejski, badacze, firmy

    Instytucja rejestruje się i uzyskuje klucz API.
    Wysyła zapytanie do API o dane z określonej lokalizacji i zakresu czasu.
    System sprawdza uprawnienia i zwraca dane w formacie JSON.
    Instytucja może przetwarzać dane we własnym systemie.
    Warunki końcowe: Dane zostają pobrane, a instytucja może je analizować.

