
//js jest jezykiem asynchronicznym jednowatkowym
//powoduja ze jak program natrafi na funkcje asynchroniczna
//program go odklada na bok i w miedzy czasie go sciaga
//jak go sciagnie dopiero go wykonuje


//nie strzalkowo
//async function pobierz() {

//}

//-------------------------------

const pobierzDane = async () => {
    //funkcja fetch sluzy do pobierania danych
    //await to ze czeka na pobranie danych !
    // sama funkcja zostala odsunieta na bok i czeka na dane
    //funkcja nie blokuje kodu 
    //ale pewne operacje musza czekac na dane
    //console.log czeka na pobranie danych
    //musi wyswietlic  i pobrane dane


    const wynik = await fetch("https://danepubliczne.imgw.pl/api/data/synop");

    //sprawdz
    // console.log(wynik);

    //teraz dane tak jakby trzeba te dane odkodowac
    //konwertujemy to do formatu json - 
    //awaity powoduja czekanie
    //gdybysmy usuneli async awaity by nie dzialaly


    const dane = await wynik.json();

    console.log(dane);

    

}

pobierzDane();

