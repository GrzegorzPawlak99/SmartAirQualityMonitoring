# Smart Air Quality Monitoring – IoT & Cloud Project

Indywidualny projekt systemu do monitorowania jakości powietrza, zbudowany z wykorzystaniem technologii IoT oraz usług chmurowych Microsoft Azure.

## Zarys biznesowy

Celem projektu jest dostarczanie użytkownikom bieżących i historycznych danych dotyczących jakości powietrza. System umożliwia monitorowanie parametrów takich jak PM2.5, PM10, CO2, temperatura, wilgotność oraz konfigurowanie alertów o przekroczeniu norm.

Projekt zakłada przyszłe wykorzystanie urządzeń ESP32 z czujnikami i komunikacją z chmurą.

## Główne podmioty

- **Użytkownik końcowy** – przegląda dane, ustawia alerty
- **Administrator** – zarządza czujnikami
- **Urządzenie IoT (ESP32)** – wysyła dane do backendu

## Przypadki użycia

1. Sprawdzenie jakości powietrza  
2. Ustawienie alertu powiadomień  
3. Zarządzanie urządzeniami IoT  
4. Przeglądanie danych historycznych  
5. Pobieranie danych przez API

## Technologie

- Node.js + Express – backend z REST API
- Postman – testowanie endpointów
- GitHub – wersjonowanie
- draw.io – diagramy C4
- (Planowane) Azure IoT Hub, CosmosDB, Blob Storage
- (Planowane) ESP32 + sensory PM/CO2

## Uruchomienie projektu

1. Sklonuj repozytorium:
   
git clone https://github.com/GrzegorzPawlak99/SmartAirQualityMonitoring.git
cd SmartAirQualityMonitoring

2. Zainstaluj zależności:

npm install

3. Uruchom serwer:

node server.js 

Serwer będzie działać pod adresem http://localhost:3000

## Testowanie API

1. Otwórz Postmana i zaimportuj plik: `smart_air_api_collection.json`  
2. Wybierz kolekcję "Smart Air API"  
3. Przetestuj:
- `POST /api/data`
- `GET /api/data`
- `GET /api/data/:id`

## Kosztorys miesięczny

- Azure IoT Hub (Basic) – $10  
- Azure Blob Storage (1TB) – $20  
- Azure CosmosDB – $30  
- Azure Functions – $10  
- Hosting Frontend – $5  
- Domena + SSL – $10  
- Marketing – $100  
- Rezerwa – $50  
- Koszt czujników (jednorazowy) – $200

**Miesięcznie: $435**  
**Półrocznie: $1,610 (w tym $200 jednorazowo)**

## Diagramy C4

- `C4 - Architecture Diagram - Context Level.png`
- `Container Diagram.drawio.png`

## Autor

Projekt indywidualny – Grzegorz Pawlak  
Repozytorium: https://github.com/GrzegorzPawlak99/SmartAirQualityMonitoring
