import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FieldlocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FieldlocationsProvider {

  fields = [
    {
      Namn: "Akalla gårds bollplan",
      Gatuadress: "Imatragatan 230",
      Postadress: "Kista",
      Latitude: "59,411330",
      Longitude: "17,914130",
    },
    {
      Namn: "Bagarmossens Bollplan",
      Gatuadress: "Emågatan 74",
      Postadress: "Bagarmossen",
      Latitude: "59,279220",
      Longitude: "18,133120",
    },
    {
      Namn: "Bellevue bollplan",
      Gatuadress: "Brunnsviksvägen 10",
      Postadress: "Stockholm",
      Latitude: "59,353210",
      Longitude: "18,048530",
    },
    {
      Namn: "Blackebergs bollplan",
      Gatuadress: "Björnsonsgatan 166",
      Postadress: "BROMMA",
      Latitude: "59,350840",
      Longitude: "17,885250",
    },
    {
      Namn: "Bromstens IP",
      Gatuadress: "Midgränd 1",
      Postadress: "SPÅNGA",
      Latitude: "59,377780",
      Longitude: "17,914860",
    },
    {
      Namn: "Brännkyrka bollplan",
      Gatuadress: "Tellusborgsvägen 10",
      Postadress: "Hägersten",
      Latitude: "59,303360",
      Longitude: "18,017160",
    },
    {
      Namn: "Bäverdalens bollplan",
      Gatuadress: "Bäverbäcksgränd 88",
      Postadress: "Bandhagen",
      Latitude: "59,252630",
      Longitude: "18,035890",
    },
    {
      Namn: "Drömdungens bollplan",
      Gatuadress: "Nyängsvägen 27",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,324290",
      Longitude: "17,967260",
    },
    {
      Namn: "Enskede IP",
      Postadress: "ENSKEDE",
      Latitude: "59,281560",
      Longitude: "18,073970",
    },
    {
      Namn: "Fruängens bollplan",
      Gatuadress: "Vantörsvägen 228",
      Postadress: "Hägersten",
      Latitude: "59,282970",
      Longitude: "17,961190",
    },
    {
      Namn: "Granby bollplan",
      Gatuadress: "Granbyvägen",
      Postadress: "KISTA",
      Latitude: "59,404070",
      Longitude: "17,925020",
    },
    {
      Namn: "Gröndals bollplan",
      Gatuadress: "Gröndalsvägen 89",
      Postadress: "Stockholm",
      Latitude: "59,314910",
      Longitude: "18,000460",
    },
    {
      Namn: "Gärdets sportfält",
      Gatuadress: "Sandhamnsgatan 80",
      Postadress: "Stockholm",
      Latitude: "59,342180",
      Longitude: "18,104960",
    },
    {
      Namn: "Husby bollplan",
      Gatuadress: "Nykarlebygatan",
      Postadress: "KISTA",
      Latitude: "59,410320",
      Longitude: "17,919600",
    },
    {
      Namn: "Hässelby gårds bollplan",
      Gatuadress: "Loviselundsvägen 40",
      Postadress: "HÄSSELBY",
      Latitude: "59,369570",
      Longitude: "17,836660",
    },
    {
      Namn: "Hästhagens bollplan",
      Gatuadress: "Dejegatan 19",
      Postadress: "FARSTA",
      Latitude: "59,242240",
      Longitude: "18,100280",
    },
    {
      Namn: "Hökarängens bollplan",
      Gatuadress: "Fagersjövägen",
      Postadress: "Farsta",
      Latitude: "59,253680",
      Longitude: "18,066960",
    },
    {
      Namn: "Johannesdals bollplan",
      Gatuadress: "Våruddsringen",
      Postadress: "Skärholmen",
      Latitude: "59,276650",
      Longitude: "17,875320",
    },
    {
      Namn: "Kristinebergs BP",
      Gatuadress: "Nordenflychtsvägen 46",
      Postadress: "Stockholm",
      Latitude: "59,336770",
      Longitude: "18,003580",
    },
    {
      Namn: "Kvarnbacka bollplan",
      Gatuadress: "Jyllandsgatan",
      Postadress: "KISTA",
      Latitude: "59,405290",
      Longitude: "17,933090",
    },
    {
      Namn: "Långbro Bollplan",
      Gatuadress: "Vantörsvägen/Linbodavägen",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,275560",
      Longitude: "17,984610",
    },
    {
      Namn: "Maltesholmsskolans bollplan",
      Gatuadress: "Persikogatan 44",
      Postadress: "HÄSSELBY",
      Latitude: "59,363290",
      Longitude: "17,829710",
    },
    {
      Namn: "Mellangårdens Bollplan",
      Gatuadress: "Norrgårdsvägen 15",
      Postadress: "SPÅNGA",
      Latitude: "59,382200",
      Longitude: "17,879800",
    },
    {
      Namn: "Nockebyhovs bollplan",
      Gatuadress: "Tyska bottens väg 68",
      Postadress: "BROMMA",
      Latitude: "59,334180",
      Longitude: "17,904900",
    },
    {
      Namn: "Nytorps bollplan",
      Gatuadress: "Paternostervägen 54",
      Postadress: "Johanneshov",
      Latitude: "59,289810",
      Longitude: "18,104080",
    },
    {
      Namn: "Olofslunds bollplan",
      Gatuadress: "Gustav III:s väg 51",
      Postadress: "Bromma",
      Latitude: "59,331990",
      Longitude: "17,940280",
    },
    {
      Namn: "Rinkeby bollplan",
      Gatuadress: "Rinkebystråket",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,389120",
      Longitude: "17,923860",
    },
    {
      Namn: "Sandåkra Bollplan",
      Gatuadress: "Sandåkravägen 25",
      Postadress: "SKÖNDAL",
      Latitude: "59,260350",
      Longitude: "18,112280",
    },
    {
      Namn: "Skarpnäcks bollplan",
      Gatuadress: "Kärrtorpsvägen",
      Postadress: "JOHANNESHOV",
      Latitude: "59,281200",
      Longitude: "18,112570",
    },
    {
      Namn: "Sköndals bollplan",
      Gatuadress: "Smörbrödsvägen/ Perstorpsvägen",
      Postadress: "SKÖNDAL",
      Latitude: "59,255120",
      Longitude: "18,108210",
    },
    {
      Namn: "Snösätraskolans bollplan",
      Gatuadress: "Stövargatan",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,256230",
      Longitude: "18,033900",
    },
    {
      Namn: "Solberga bollplan",
      Gatuadress: "Lerkrogsvägen 30",
      Postadress: "Hägersten",
      Latitude: "59,288640",
      Longitude: "18,011340",
    },
    {
      Namn: "Spånga Fotbollshall",
      Gatuadress: "Solhems Hagväg 2",
      Postadress: "SPÅNGA",
      Latitude: "59,387710",
      Longitude: "17,907370",
    },
    {
      Namn: "Stenhagens bollplan",
      Gatuadress: "Porkalagatan 6",
      Postadress: "KISTA",
      Latitude: "59,417630",
      Longitude: "17,908390",
    },
    {
      Namn: "Stora Mossens IP",
      Gatuadress: "Mosskroken",
      Postadress: "Bromma",
      Latitude: "59,328940",
      Longitude: "17,961510",
    },
    {
      Namn: "Stureby skolas BP",
      Gatuadress: "Tystbergavägen 41",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,276630",
      Longitude: "18,041490",
    },
    {
      Namn: "Sätra Bollplan",
      Gatuadress: "Björksätravägen 73",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59,282280",
      Longitude: "17,913730",
    },
    {
      Namn: "Sätradalens bollplan",
      Gatuadress: "Bogsätravägen 27",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59,284690",
      Longitude: "17,915230",
    },
    {
      Namn: "Tantolundens Bollplan",
      Gatuadress: "Tantolunden/Wollmar yxkullsgatan",
      Postadress: "STOCKHOLM",
      Latitude: "59,312990",
      Longitude: "18,046360",
    },
    {
      Namn: "Vasaparkens bollplan",
      Gatuadress: "Dalagatan",
      Postadress: "Ingen postadress registrerad",
      Latitude: "59,341140",
      Longitude: "18,045310",
    },
    {
      Namn: "Vårbergs IP",
      Gatuadress: "Vårbergsvägen 65",
      Postadress: "SKÄRHOLMEN",
      Latitude: "59,272220",
      Longitude: "17,892790",
    },
    {
      Namn: "Västberga IP",
      Gatuadress: "Klensmedsvägen 24",
      Postadress: "HÄGERSTEN",
      Latitude: "59,296320",
      Longitude: "17,998280",
    },
    {
      Namn: "Åkeshovs bollplan",
      Gatuadress: "Åkeshovsvägen 43",
      Postadress: "BROMMA",
      Latitude: "59,337700",
      Longitude: "17,926140",
    },
    {
      Namn: "Älvsjö IP",
      Gatuadress: "Älvsjö idrottsväg",
      Postadress: "ÄLVSJÖ",
      Latitude: "59,274510",
      Longitude: "18,009370",
    },
    {
      Namn: "Ängby södra bollplan",
      Gatuadress: "Blackebergsvägen/Holbergsgatan",
      Postadress: "BROMMA",
      Latitude: "59,344650",
      Longitude: "17,889920",
    },
    {
      Namn: "Örby bollplan",
      Gatuadress: "Vingåkersvägen 19",
      Postadress: "ÄLVSJÖ",
      Latitude: "59,274330",
      Longitude: "18,028480",
    },
    {
      Namn: "Östra Reals bollplan",
      Gatuadress: "Karlavägen 79",
      Postadress: "Stockholm",
      Latitude: "59,339470",
      Longitude: "18,086230",
    }];

  constructor(public http: HttpClient) {

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

        let latitude = this.fields[i].Latitude.replace(",", ".");
        let longitude = this.fields[i].Longitude.replace(",", ".");

        let field = {

        namn: this.fields[i].Namn,
        lon: longitude,
        lat : latitude,
        
        }
       
        wantedFields.push(field);

        console.log(field);

      }

    }
    
      return wantedFields;

  }


}



