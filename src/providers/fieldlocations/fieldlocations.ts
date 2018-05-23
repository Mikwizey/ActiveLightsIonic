import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the FieldlocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FieldlocationsProvider {

  fields = [
    {
      Namn: "Abrahamsbergs bollplan",
      Info: "Abrahamsbergs BP är en 7-spels grusplan.",
      Gatuadress: "Grundläggarvägen 22",
      Postadress: "BROMMA",
      Latitude: "59.331470",
      Longitude: "17.949550",
    },
    {
      Namn: "Akalla gårds bollplan",
      Info: "Akalla Gårds BP har en 11-spels och en 7-spels gräsplan. Omklädnadsrum.",
      Gatuadress: "Imatragatan 230",
      Postadress: "Kista",
      Latitude: "59.411330",
      Longitude: "17.914130",
    },
    {
      Namn: "Axelsbergs bollplan",
      Info: "Axelsbergs BP har en 11-manna grusplan med matchbelysning eller 2 st 7-mannaplaner, samt 2 st 5-manna grusplaner.",
      Gatuadress: "Hägerstens Allé 55",
      Postadress: "Hägersten",
      Latitude: "59.305740",
      Longitude: "17.969740",
    },
    {
      Namn: "Bagarmossens Bollplan",
      Info: "Bagarmossens BP har en 11-spelsplan eller två 7-spelsplaner med konstgräs och match- och träningsbelysning. Löparbanor, hoppgrop och Kulanläggning.",
      Gatuadress: "Emågatan 74",
      Postadress: "Bagarmossen",
      Latitude: "59.279220",
      Longitude: "18.133120",
    },
    {
      Namn: "Bandhagens skolas bollplan",
      Info: "Bandhagens skolas BP har en 7-spels grusplan.",
      Gatuadress: "Trollesundsvägen 66",
      Postadress: "Bandhagen",
      Latitude: "59.263670",
      Longitude: "18.052100",
    },
    {
      Namn: "Bellevue bollplan",
      Info: "Bellevue BP har en 7-spels konstgräsplan med belysning. Två 7-spelsmål och fyra 5-spelsmål.",
      Gatuadress: "Brunnsviksvägen 10",
      Postadress: "Stockholm",
      Latitude: "59.353210",
      Longitude: "18.048530",
    },
    {
      Namn: "Bergholms bollplan",
      Info: "Bergholms BP har en 11-spels grusplan.",
      Gatuadress: "Laxåvägen",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.272690",
      Longitude: "18.131050",
    },
    {
      Namn: "Blackebergs bollplan",
      Info: "Blackebergs BP har en 11-spels konstgräs, omklädnadsrum och belysning.",
      Gatuadress: "Björnsonsgatan 166",
      Postadress: "BROMMA",
      Latitude: "59.350840",
      Longitude: "17.885250",
    },
    {
      Namn: "Bredängs bollplan",
      Info: "Bredängs bollplan har en 11-spels grusplan och en 7-spels grusplan.",
      Gatuadress: "Ålgrytevägen 155",
      Postadress: "Skärholmen",
      Latitude: "59.296460",
      Longitude: "17.928880",
    },
    {
      Namn: "Bromstens IP",
      Info: "Bromstens IP har en 11-spels gräsplan, en 11-spels konstgräsplan samt friidrottsytor.",
      Gatuadress: "Midgränd 1",
      Postadress: "SPÅNGA",
      Latitude: "59.377780",
      Longitude: "17.914860",
    },
    {
      Namn: "Brotorps bollplan",
      Info: "Brotorps BP har en 7-spels grusplan och ligger vid vid Brotorpsskolan. Åk tunnelbanans gröna linje 17 mot Skarpnäck. Kliv av vid station Bagarmossen. Promenera 1 700 meter.",
      Gatuadress: "Rusthållarvägen 225",
      Postadress: "BAGARMOSSEN",
      Latitude: "59.273610",
      Longitude: "18.142970",
    },
    {
      Namn: "Brännkyrka bollplan",
      Info: "Brännkyrka BP har en 7-spels grusplan.",
      Gatuadress: "Tellusborgsvägen 10",
      Postadress: "Hägersten",
      Latitude: "59.303360",
      Longitude: "18.017160",
    },
    {
      Namn: "Bäckahagens BP",
      Info: "Bäckahagens BP har en 7-spels konstgräsplan.",
      Gatuadress: "Skebokvarnsvägen 53",
      Postadress: "BANDHAGEN",
      Latitude: "59.269430",
      Longitude: "18.043870",
    },
    {
      Namn: "Bäverdalens bollplan",
      Info: "Bäverdalens BP har en 7-spels grusplan.",
      Gatuadress: "Bäverbäcksgränd 88",
      Postadress: "Bandhagen",
      Latitude: "59.252630",
      Longitude: "18.035890",
    },
    {
      Namn: "Dalhagens bollplan",
      Info: "Dalhagens BP har en 7-spels grusplan och en beachvolleybollplan. T-banans blå linje 11 mot Akalla till station Husby. Promenera 450 meter.",
      Gatuadress: "Stavangergatans ände",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.412770",
      Longitude: "17.930690",
    },
    {
      Namn: "Drömdungens bollplan",
      Info: "Drömdungens BP",
      Gatuadress: "Nyängsvägen 27",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.324290",
      Longitude: "17.967260",
    },
    {
      Namn: "Ekhagens BP",
      Info: "Ekhagens BP har en 7-spels eller tre 5-spelsplaner med konstgräs.",
      Gatuadress: "Åminnevägen",
      Postadress: "Stockholm",
      Latitude: "59.370460",
      Longitude: "18.056270",
    },
    {
      Namn: "Enskede IP",
      Info: "Enskede IP har en 11-spels gräs (1 st), 11-spels konstgräs (2 st), 7-spels grus (1 st), 7-spels konstgräs (2 st), friidrott med kastplan.",
      Gatuadress: "Enskedevägen 115",
      Postadress: "ENSKEDE",
      Latitude: "59.281560",
      Longitude: "18.073970",
    },
    {
      Namn: "Eriksdals bollplan",
      Info: "Eriksdals BP har en 9-spels konstgräsplan. Delar av fotbollsplanen spolas upp under vintern.",
      Gatuadress: "Ringvägen 60",
      Postadress: "Stockholm",
      Latitude: "59.307100",
      Longitude: "18.064660",
    },
    {
      Namn: "Fruängens bollplan",
      Info: "Fruängens BP har en 7-spels konstgräsplan.",
      Gatuadress: "Vantörsvägen 228",
      Postadress: "Hägersten",
      Latitude: "59.282970",
      Longitude: "17.961190",
    },
    {
      Namn: "Gläntan",
      Info: "Gläntan har en 11-spels naturgräsplan med matchbelysning.",
      Gatuadress: "Kälvestavägen 72",
      Postadress: "SPÅNGA",
      Latitude: "59.378520",
      Longitude: "17.882650",
    },
    {
      Namn: "Granby bollplan",
      Info: "Granby bollplan har en 7-spels gräs. Omklädnadsrum",
      Gatuadress: "Granbyvägen",
      Postadress: "KISTA",
      Latitude: "59.404070",
      Longitude: "17.925020",
    },
    {
      Namn: "Grimsta bollplan",
      Info: "Grimsta BP har 7-spels grusplan med matchbelysning.",
      Gatuadress: "Kanngjutargränd 38",
      Postadress: "VÄLLINGBY",
      Latitude: "59.358880",
      Longitude: "17.867540",
    },
    {
      Namn: "Gröndals bollplan",
      Info: "Gröndals BP har en 7-spels konstgräsplan med träningsbelysning.",
      Gatuadress: "Gröndalsvägen 89",
      Postadress: "Stockholm",
      Latitude: "59.314910",
      Longitude: "18.000460",
    },
    {
      Namn: "Gubbängens bollplan",
      Info: "Gubbängens BP har en 11-spels konstgräsplan. Beachvolleybollplan, löparbanor, boulebana och streetbasketplan.",
      Gatuadress: "Gubbängsfältet vid trafikplats Gubbängen",
      Postadress: "Enskede",
      Latitude: "59.261750",
      Longitude: "18.093450",
    },
    {
      Namn: "Gärdets sportfält",
      Info: "Gärdets sportfält har 3 st 7-spels gräsplaner, rugbyplan, amerikansk fotbollsplan, cricketplan, basketplan och beachvolleybollplaner.",
      Gatuadress: "Sandhamnsgatan 80",
      Postadress: "Stockholm",
      Latitude: "59.342180",
      Longitude: "18.104960",
    },
    {
      Namn: "Herrängens bollplan",
      Info: "Herrängens BP har en 7-spels grusplan.",
      Gatuadress: "Segeltorpsvägen 37",
      Postadress: "Älvsjö",
      Latitude: "59.272780",
      Longitude: "17.960890",
    },
    {
      Namn: "Husby bollplan",
      Info: "Husby BP har en 7- och 5-spels grusplan. Omklädnadsrum och belysning.",
      Gatuadress: "Nykarlebygatan",
      Postadress: "KISTA",
      Latitude: "59.410320",
      Longitude: "17.919600",
    },
    {
      Namn: "Hägerstensåsens bollplan",
      Info: "Hägerstensåsens BP har 11-spels konstgräs, 7-spels grusplan, 5-spels konstgräs, omklädningsrum och belysning på konstgräsplanerna.",
      Gatuadress: "Personnevägen 75",
      Postadress: "Hägersten",
      Latitude: "59.296770",
      Longitude: "17.976770",
    },
    {
      Namn: "Hässelby gårds bollplan",
      Info: "Hässelby Gårds Bollplan har en 11-spels konstgräsplan med 11- och 7-spelsmål. Belysning och omklädnadsrum.",
      Gatuadress: "Loviselundsvägen 40",
      Postadress: "HÄSSELBY",
      Latitude: "59.369570",
      Longitude: "17.836660",
    },
    {
      Namn: "Hässelängens bollplan",
      Info: "Hässelängens Bollplan har en 7-spels konstgräsplan.",
      Gatuadress: "Beata Sparres gränd",
      Postadress: "Hässelby",
      Latitude: "59.364550",
      Longitude: "17.846320",
    },
    {
      Namn: "Hästhagens bollplan",
      Info: "Hästhagens bollplan har en 11-spels grusplan.",
      Gatuadress: "Dejegatan 19",
      Postadress: "FARSTA",
      Latitude: "59.242240",
      Longitude: "18.100280",
    },
    {
      Namn: "Högdalens bollplan",
      Info: "Högdalens bollplan har en 11-spels grusplan och en beachhandbollsplan.",
      Gatuadress: "Sjösabrinken 20",
      Postadress: "Bandhagen",
      Latitude: "59.266210",
      Longitude: "18.039650",
    },
    {
      Namn: "Hökarängens bollplan",
      Info: "Hökarängens bollplan har en 11-spels grusplan. Två 11-spelsmål och fyra 7-spelsmål.",
      Gatuadress: "Fagersjövägen",
      Postadress: "Farsta",
      Latitude: "59.253680",
      Longitude: "18.066960",
    },
    {
      Namn: "Johannes Bollplan",
      Info: "Johannes bollplan är en 7-spels konstgräsplan med två 7-spelsmål och fyra 5-spelsmål.",
      Gatuadress: "Cederdalsgatan 7",
      Postadress: "Stockholm",
      Latitude: "59.350330",
      Longitude: "18.054090",
    },
    {
      Namn: "Johannesdals bollplan",
      Info: "Johannesdals bollplan har en 7-spels grusplan med belysning.",
      Gatuadress: "Våruddsringen",
      Postadress: "Skärholmen",
      Latitude: "59.276650",
      Longitude: "17.875320",
    },
    {
      Namn: "Knutby bollplan",
      Info: "Knutby bollplan har en 11-, 7- och 5-spels konstgräsplan. Omklädnadsrum och belysning.",
      Gatuadress: "Knutbygränd 4/Rinkebysvängen",
      Postadress: "SPÅNGA",
      Latitude: "59.383370",
      Longitude: "17.930720",
    },
    {
      Namn: "Kristinebergs BP",
      Info: "Kristinebergs BP har en 7-spels konstgräsplan.",
      Gatuadress: "Nordenflychtsvägen 46",
      Postadress: "Stockholm",
      Latitude: "59.336770",
      Longitude: "18.003580",
    },
    {
      Namn: "Kristinebergs IP",
      Info: "Kristinebergs IP är en idrottsplats med en 11-manna naturgräsplan och friidrottsytor. På långsidan finns den gamla träläktaren som rymmer ca 900 åskådare.",
      Gatuadress: "Nordenflychtsvägen 46",
      Postadress: "Stockholm",
      Latitude: "59.335810",
      Longitude: "18.005410",
    },
    {
      Namn: "Kvarnbacka bollplan",
      Info: "Kvarnbacka bollplan har en 11-spels alternativt två 7-spels konstgräsplaner. Omklädnadsrum och belysning. Fyra 100-metersbanor, längdhopp, kula och streetbasket.",
      Gatuadress: "Jyllandsgatan",
      Postadress: "KISTA",
      Latitude: "59.405290",
      Longitude: "17.933090",
    },
    {
      Namn: "Lisebergs bollplan",
      Info: "11-spels konstgräsplan.",
      Gatuadress: "Götalandsvägen 150",
      Postadress: "Älvsjö",
      Latitude: "59.285420",
      Longitude: "18.032190",
    },
    {
      Namn: "Långbro Bollplan",
      Info: "Långbro BP har en 7-spels konstgräsplan.",
      Gatuadress: "Vantörsvägen/Linbodavägen",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.275560",
      Longitude: "17.984610",
    },
    {
      Namn: "Långholmens bollplan",
      Info: "Långholmens bollplan har en 9-spels konstgräsplan alternativt två 7-spelsplaner med match- och träningsbelysning. Löparbanor och kulstötarring.",
      Gatuadress: "Långholmen",
      Postadress: "Stockholm",
      Latitude: "59.320350",
      Longitude: "18.027890",
    },
    {
      Namn: "Maltesholmsskolans bollplan",
      Info: "Maltesholmsskolans bollplan har en 7-spels konstgräsplan. Belysning. Nyckel till belysningen kvitteras ut på Grimsta IP.",
      Gatuadress: "Persikogatan 44",
      Postadress: "HÄSSELBY",
      Latitude: "59.363290",
      Longitude: "17.829710",
    },
    {
      Namn: "Mariehälls Bollplan",
      Info: "Mariehälls bollplan har en 11-spels gräsplan med belysning och två omklädningsrum.",
      Gatuadress: "Bällstavägen/Tappvägen",
      Postadress: "BROMMA",
      Latitude: "59.361320",
      Longitude: "17.949060",
    },
    {
      Namn: "Mellangårdens Bollplan",
      Info: "Mellangårdens Bollplan har en 7-spels grusplan.",
      Gatuadress: "Norrgårdsvägen 15",
      Postadress: "SPÅNGA",
      Latitude: "59.382200",
      Longitude: "17.879800",
    },
    {
      Namn: "Mälarhöjdens IP",
      Info: "Mälarhöjdens IP har 11-spels gräsplan, 11-spels och 7-spels grusplan, friidrott och ishall.",
      Gatuadress: "Lotta Svärds Gränd",
      Postadress: "Hägersten",
      Latitude: "59.288510",
      Longitude: "17.957520",
    },
    {
      Namn: "Nockebyhovs bollplan",
      Info: "Nockebyhovs Bollplan har en 7-spels grusplan. Två 7-spels och fyra 5-spelsmål.",
      Gatuadress: "Tyska bottens väg 68",
      Postadress: "BROMMA",
      Latitude: "59.334180",
      Longitude: "17.904900",
    },
    {
      Namn: "Nya Elementars bollplan",
      Info: "Nya Elementars bollplan har 2 st 5-spels grusplaner.",
      Gatuadress: "Bergslagsvägen 80",
      Postadress: "BROMMA",
      Latitude: "59.342640",
      Longitude: "17.926290",
    },
    {
      Namn: "Nytorps bollplan",
      Info: "Nytorps bollplan har en 11-spels grusplan.",
      Gatuadress: "Paternostervägen 54",
      Postadress: "Johanneshov",
      Latitude: "59.289810",
      Longitude: "18.104080",
    },
    {
      Namn: "Nälsta bollplan",
      Info: "Nälsta bollplan har en 11-spels konstgräsplan. 7-spelsmål. Belysning, omklädnadsrum.",
      Gatuadress: "Täbylundsvägen 3",
      Postadress: "SPÅNGA",
      Latitude: "59.367960",
      Longitude: "17.887920",
    },
    {
      Namn: "Olofslunds bollplan",
      Info: "Olofslunds bollplan har en 7-spels grusplan med belysning och omklädnadsrum.",
      Gatuadress: "Gustav III:s väg 51",
      Postadress: "Bromma",
      Latitude: "59.331990",
      Longitude: "17.940280",
    },
    {
      Namn: "Ormkärrs bollplan",
      Info: "Ormkärrs bollplan har en 7-spels grusplan.",
      Gatuadress: "Fjugestagränd 20",
      Postadress: "Bandhagen",
      Latitude: "59.261680",
      Longitude: "18.005530",
    },
    {
      Namn: "Rinkeby bollplan",
      Info: "Rinkeby BP har en 11-spels konstgräsplan eller 2 st 7-spelsplaner med matchbelysning.",
      Gatuadress: "Rinkebystråket",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.389120",
      Longitude: "17.923860",
    },
    {
      Namn: "Rågsveds BP",
      Info: "Rågsveds bollplan har en 11-spels konstgräsplan med två 11-spelsmål och två 7-spelsmål och en anlagd aktivitetsyta med bland annat bouleplan och parkour.",
      Gatuadress: "Kumlagatan 19",
      Postadress: "BANDHAGEN",
      Latitude: "59.258250",
      Longitude: "18.026950",
    },
    {
      Namn: "Sandåkra Bollplan",
      Info: "Sandåkra bollplan har en 11-spels konstgräsplan alternativt två 7-spelsplaner med match- och träningsbelysning. Löparbanor, kulstötningsring, hoppgrop och kulanläggning.",
      Gatuadress: "Sandåkravägen 25",
      Postadress: "SKÖNDAL",
      Latitude: "59.260350",
      Longitude: "18.112280",
    },
    {
      Namn: "Sjöängens bollplan",
      Info: "Sjöängens bollplan har en 11-spels grusplan alternativt två st 7-spelsplaner.",
      Gatuadress: "Gripsholmsvägen 29",
      Postadress: "ÄLVSJÖ",
      Latitude: "59.279660",
      Longitude: "18.025290",
    },
    {
      Namn: "Skarpnäcks bollplan",
      Info: "Skarpnäcks bollplan har en 11-spels grusplan alternativt två 7-spelsplaner med allmänbelysning.",
      Gatuadress: "Kärrtorpsvägen",
      Postadress: "JOHANNESHOV",
      Latitude: "59.281200",
      Longitude: "18.112570",
    },
    {
      Namn: "Skarpnäcks sportfält",
      Info: "Skarpnäcks sportfält har 11-spels gräs (4 st), 11-spels konstgräs 1 st) 11-spels grus (1 st) baseboll- och softbollplan.",
      Gatuadress: "Horisontvägen 15",
      Postadress: "SKARPNÄCK",
      Latitude: "59.269510",
      Longitude: "18.119600",
    },
    {
      Namn: "Sköndals bollplan",
      Info: "Sköndals bollplan har en 7-spels grusplan alternativt två st 5-spelsplaner med träningsbelysning.",
      Gatuadress: "Smörbrödsvägen/ Perstorpsvägen",
      Postadress: "SKÖNDAL",
      Latitude: "59.255120",
      Longitude: "18.108210",
    },
    {
      Namn: "Smedshagens Bollplan",
      Info: "Ingen info",
      Gatuadress: "Smedshagsvägen 1",
      Postadress: "Hässelby",
      Latitude: "59.378480",
      Longitude: "17.824720",
    },
    {
      Namn: "Snösätraskolans bollplan",
      Info: "Snösätra bollplan har en 7-spels grusplan.",
      Gatuadress: "Stövargatan",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.256230",
      Longitude: "18.033900",
    },
    {
      Namn: "Sofiaskolans bollplan",
      Info: "Sofiaskolans bollplan har en 7-spels konstgräsplan med 2 st 7-spelsmål och fyra stycken 5-spelsmål. Träningsbelysning.",
      Gatuadress: "Skånegatan 117",
      Postadress: "Stockholm",
      Latitude: "59.312770",
      Longitude: "18.093150",
    },
    {
      Namn: "Solberga bollplan",
      Info: "Solberga bollplan har en 11-spels konstgräsplan alternativt två 7-spelsplaner. Allmänbelysning och omklädningsrum.",
      Gatuadress: "Lerkrogsvägen 30",
      Postadress: "Hägersten",
      Latitude: "59.288640",
      Longitude: "18.011340",
    },
    {
      Namn: "Solhems bollplan",
      Info: "Solhems bollplan har en 11-spels grusplan med matchbelysning och omklädningsrum.",
      Gatuadress: "Gribbyvägen 101",
      Postadress: "SPÅNGA",
      Latitude: "59.376420",
      Longitude: "17.904430",
    },
    {
      Namn: "Spånga Fotbollshall",
      Info: "Spånga fotbollshall kan användas för 7-spelsfotboll och den har invändigt fria mått om 46 x 72 meter med en takhöjd på minst 7 meter. Hallen är dimensionerad för ca 150 personer. Spelplanen är försedd med konstgräs och av kvalitet som är godkänt av Svenska Fotbollförbundet.",
      Gatuadress: "Solhems Hagväg 2",
      Postadress: "SPÅNGA",
      Latitude: "59.387710",
      Longitude: "17.907370",
    },
    {
      Namn: "Stadshagens IP",
      Info: "Stadshagens IP har två 11-spels konstgräsplaner, och en biyta med naturgräs.",
      Gatuadress: "Stadshagens Idrottsväg",
      Postadress: "STOCKHOLM",
      Latitude: "59.336480",
      Longitude: "18.020290",
    },
    {
      Namn: "Stenhagens bollplan",
      Info: "Stenhagens bollplan har en 7-spels grusplan. Belysning och omklädningsrum. Friidrottsytor: 3 60-metersbanor och längdhoppsgrop.",
      Gatuadress: "Porkalagatan 6",
      Postadress: "KISTA",
      Latitude: "59.417630",
      Longitude: "17.908390",
    },
    {
      Namn: "Stora Essinge IP",
      Info: "Stora Essinge IP har en 11-spels, en 5-spels konstgräsplan och friidrottsytor.",
      Gatuadress: "Essingestråket 1",
      Postadress: "STOCKHOLM",
      Latitude: "59.319370",
      Longitude: "17.986870",
    },
    {
      Namn: "Stora Mossens IP",
      Info: "Här finns två konstgräsplaner, två ishallar, två idrottshallar och friidrottsytor.",
      Gatuadress: "Mosskroken",
      Postadress: "Bromma",
      Latitude: "59.328940",
      Longitude: "17.961510",
    },
    {
      Namn: "Stureby bollplan",
      Info: "Stureby bollplan har en 11-spels naturgräsplan med träningsbelysning och omklädningrum.",
      Gatuadress: "Tussmötevägen 241",
      Postadress: "Älvsjö",
      Latitude: "59.280040",
      Longitude: "18.048740",
    },
    {
      Namn: "Stureby skolas BP",
      Info: "Stureby skolas BP har en 11-spels konstgräsplan alternativt två 7-spelsplaner med träningsbelysning.",
      Gatuadress: "Tystbergavägen 41",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.276630",
      Longitude: "18.041490",
    },
    {
      Namn: "Sundby bollplan",
      Info: "Sundby bollplan har två 5-manna grusplaner.",
      Gatuadress: "Mjölvägen 80",
      Postadress: "BROMMA",
      Latitude: "59.368120",
      Longitude: "17.924500",
    },
    {
      Namn: "Sätra Bollplan",
      Info: "Sätra bollplan har en 11-spels grusplan med matchbelysning, 2 st 7-spelsplaner varav en med konstgräs och träningsbelysning. Omklädningsrum.",
      Gatuadress: "Björksätravägen 73",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59.282280",
      Longitude: "17.913730",
    },
    {
      Namn: "Sätra Bollplan konstgräs",
      Info: "Sätra Bollplan har en 7-spels konstgräsplan. Träningsbelysning. Omklädningsrum.",
      Gatuadress: "Björksätravägen 73",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59.282280",
      Longitude: "17.913730",
    },
    {
      Namn: "Sätradalens bollplan",
      Info: "Sätradalens bollplan har en 7-spels grusplan med allmänbelysning.",
      Gatuadress: "Bogsätravägen 27",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59.284690",
      Longitude: "17.915230",
    },
    {
      Namn: "Tallkrogens bollplan",
      Info: "Tallkrogens bollplan har en 11-spels grusplan, träningsbelysning.",
      Gatuadress: "Tallkrogsvägen 41",
      Postadress: "ENSKEDE",
      Latitude: "59.273300",
      Longitude: "18.092160",
    },
    {
      Namn: "Tantolundens Bollplan",
      Info: "Tantolundens bollplan har en 11-spels konstgräsplan, alternativt två 7-spels konstgräsplaner samt en 5-spels konstgräsplan. Alla planer har matchbelysning.",
      Gatuadress: "Tantolunden/Wollmar yxkullsgatan",
      Postadress: "STOCKHOLM",
      Latitude: "59.312990",
      Longitude: "18.046360",
    },
    {
      Namn: "Tätorps Bollplan",
      Info: "Tätorps bollplan har en 7-spels grusplan med träningsbelysning. Två 7-spels och fyra 5-spelsmål.",
      Gatuadress: "Pilvinggegatan 58",
      Postadress: "SKARPNÄCK",
      Latitude: "59.270160",
      Longitude: "18.128630",
    },
    {
      Namn: "Vasaparkens bollplan",
      Info: "Barn och vuxna i alla åldrar är välkomna att spela boll på Vasaparkens bollplan. Bollplanen är avsedd för spontanidrott.",
      Gatuadress: "Dalagatan",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59.341140",
      Longitude: "18.045310",
    },
    {
      Namn: "Vinsta bollplan",
      Info: "Vinsta bollplan har två st 11-spels grusplaner alternativt två 7-spelsplaner eller 4 st 5-spelsplaner.",
      Gatuadress: "Lyckselevägen 43",
      Postadress: "VÄLLINGBY",
      Latitude: "59.369480",
      Longitude: "17.862700",
    },
    {
      Namn: "Vårbergs IP",
      Info: "Vårbergs IP har 11-spels konstgräs, 11-spels grus, 7-spels grus, handbollsplan, naturisrink (1800 kvm).",
      Gatuadress: "Vårbergsvägen 65",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59.272220",
      Longitude: "17.892790",
    },
    {
      Namn: "Vällingby bollplan",
      Info: "Vällingby bollplan har en 11-spels konstgräsplan eller 2 st 7-spels konstgräsplaner med matchbelysning, rakbana för friidrott 80 meter, längdhopp samt spontanyta för idrott/rörelse. Två omklädningsrum med toaletter samt ett utrymme för servering.",
      Gatuadress: "Offerdalsgatan 7",
      Postadress: "VÄLLINGBY",
      Latitude: "59.364930",
      Longitude: "17.882770",
    },
    {
      Namn: "Västberga IP",
      Info: "Västberga IP har 11-spels konstgräsplan, Boulebana och friidrottsyta. Belysning.",
      Gatuadress: "Klensmedsvägen 24",
      Postadress: "HÄGERSTEN",
      Latitude: "59.296320",
      Longitude: "17.998280",
    },
    {
      Namn: "Västboda bollplan",
      Info: "Västboda bollplan har en 7-spels konstgräsplan med skolidrottsytor, 60 meter, kula och längd.",
      Gatuadress: "Värmlandsvägen 9",
      Postadress: "FARSTA",
      Latitude: "59.247420",
      Longitude: "18.085780",
    },
    {
      Namn: "Åkeshovs bollplan",
      Info: "Åkeshovs bollplan har en 11-spels eller två 7-spels konstgräsplaner.",
      Gatuadress: "Åkeshovsvägen 43",
      Postadress: "BROMMA",
      Latitude: "59.337700",
      Longitude: "17.926140",
    },
    {
      Namn: "Årsta gårds bollplan",
      Info: "Årsta Gårds bollplan har en 11-spels konstgräsplan. Två 11-spels , fyra 7-spels och fyra 5-spelsmål. Omklädningsrum.",
      Gatuadress: "Svärdlångsvägen 22",
      Postadress: "Årsta",
      Latitude: "59.303130",
      Longitude: "18.038210",
    },
    {
      Namn: "Älvsjö IP",
      Info: "Älvsjö IP drivs av Älvsjö AIK",
      Gatuadress: "Älvsjö idrottsväg",
      Postadress: "ÄLVSJÖ",
      Latitude: "59.274510",
      Longitude: "18.009370",
    },
    {
      Namn: "Ängby IP",
      Info: "Ängby IP är belägen i natursjöna Ängbyområdet i närheten av Kyrksjön. Anläggningen nyttjas först och främst av föreningar och skolor när det gäller fotboll och friidrott.",
      Gatuadress: "Vultejusvägen 14",
      Postadress: "BROMMA",
      Latitude: "59.350960",
      Longitude: "17.910300",
    },
    {
      Namn: "Ängby södra bollplan",
      Info: "Södra Ängby bollplan har en 11-spels och 7-spels grusplan och en 11-spels och 7-spels konstgräsplan.",
      Gatuadress: "Blackebergsvägen/Holbergsgatan",
      Postadress: "BROMMA",
      Latitude: "59.344650",
      Longitude: "17.889920",
    },
    {
      Namn: "Ärvinge bollplan",
      Info: "Ärvinge BP har en 11-spels konstgräsplan.",
      Gatuadress: "Själlandsgatan",
      Postadress: "KISTA",
      Latitude: "59.399490",
      Longitude: "17.935440",
    },
    {
      Namn: "Örby bollplan",
      Info: "Örby bollplan har en 7-spels konstgräsplan.",
      Gatuadress: "Vingåkersvägen 19",
      Postadress: "ÄLVSJÖ",
      Latitude: "59.274330",
      Longitude: "18.028480",
    },
    {
      Namn: "Östermalms IP",
      Info: "Östermalms IP har en 11-spels och två 7-spels konstgräsplaner. Ishall, friidrottsytor, bandyplan, isrundbana 400 meter.",
      Gatuadress: "Fiskartorpsvägen 2",
      Postadress: "STOCKHOLM",
      Latitude: "59.346720",
      Longitude: "18.082830",
    },
    {
      Namn: "Östra Reals bollplan",
      Info: "Östra reals BP har en konstgräsplan med måtten 54 X 30 meter.",
      Gatuadress: "Karlavägen 79",
      Postadress: "Stockholm",
      Latitude: "59.339470",
      Longitude: "18.086230",
    }
  ]

  myLatitude;
  myLongitude;

  constructor(public http: HttpClient, public geolocation: Geolocation) {

  }


  getFields(query) {

    let wantedFields = [];

    for (let i = 0; i < this.fields.length; i++) {

      //Sök på plan-namn.

      let fieldName = this.fields[i].Namn;
      let fieldNameFixed = fieldName.trim().toLowerCase();
      let fieldNameBeginningFixed = fieldNameFixed.split(" ")[0];

      //Sök på ort.

      let area = this.fields[i].Postadress;
      let areaFixed = area.trim().toLowerCase();

      //Skriver om sökfrågan.

      let queryFixed = query.trim().toLowerCase();



      if (queryFixed == fieldNameFixed || areaFixed == queryFixed || queryFixed == fieldNameBeginningFixed) {

        let field = {

          namn: this.fields[i].Namn,
          info: this.fields[i].Info,
          pa: this.fields[i].Postadress,
          ga: this.fields[i].Gatuadress,
          lon: this.fields[i].Longitude,
          lat: this.fields[i].Latitude

        }

        wantedFields.push(field);

        console.log(field);

      }

    }

    return wantedFields;

  }

  getAllFields() {

    let fields = [];

    for (let i = 0; i < this.fields.length; i++) {

      let name = this.fields[i].Namn;
      let info = this.fields[i].Info;
      let lat = this.fields[i].Latitude;
      let lon = this.fields[i].Longitude;
      let ga = this.fields[i].Gatuadress;
      let pa = this.fields[i].Postadress;

      let field = {

        namn: name,
        info: info,
        lat: lat,
        lon: lon,
        gatuadress: ga,
        postadress: pa

      }
      fields.push(field);
    }

    return fields;
  }

}


