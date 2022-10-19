console.log('pozdrav iz konzole')
console.error('Pozdrav iz konzole')
console.warn('Pozdrav iz konzole')
console.log(5 + 5)
console.log(5 === 5)
console.log(5 === 6)

document.write('Pozdrav iz stranice')

window.alert('Pozdrav iz Popupa')

// window.open()  samo za window vazi da moze da se pise samo -open
// ili samo -alert. ne mora da se pise window
// npr alert(), open()

//ovo je tekst


document.getElementById("demo").innerText = 5+6


// definisanje varijabli. u JS pomocu reci LET

let zadatak = 'resi zadati problem';
// deklarizacija      inicijalizacija

// deklarizacija je kada dodate vrednost nekoj varijabli
// brojevi su posebne vrste varijabli i pisemo ih bez navodnika

let godine = 5.1;
let mes_ec = 3;
let rezultat = godine + mes_ec;
console.log(rezultat);
console.log(typeof(mes_ec));

let resizadatke = 'zadaci imaju jedno resenje'
console.log(resizadatke)
console.log(typeof(resizadatke)) 



// kada nesto stavimo pod navodnike to se zove string

let neki_broj = 65;
let drugi_broj = '5';
let resenje = neki_broj + drugi_broj;
drugi_broj = parseInt(drugi_broj); 

// 5 //parseInt pretvara string u broj

console.log(resenje);
console.log(drugi_broj);

let prvi_br = 5;
let drugi_br = 10;
let treci_tmp;

console.log('prvi broj: ' + prvi_br);
console.log('drugi broj: ' + drugi_br);

treci_tmp = prvi_br;
prvi_br = drugi_br;
drugi_br = treci_tmp;


console.log('prvi broj: ' + prvi_br);
console.log('drugi broj: ' + drugi_br);

// const drugi_broj = 5
// kada napisemo const znaci da je broj konstantan i da mu ne menjamo vrednost
 
 let prviBr = 5;
 let prvibr = 10;
// // naziv varijable ne moze pocinjati sa brojem, zagradom, crticom...

// // unutar varijable mozemo imati brojeve i tako to

console.log(prviBroj);


let ime = 'Tijana'
let god = 31;
 console.log(`Ove godine imam${god}godinu`);

godine = god + 1;
let recenica = 'Sledece godine imacu' +godine + 'godinu';

console.log(' ja sam ' + ime + 'imamcu sledece godine' + godine + 'godinu.');

let recen = 'ja sam Tijana imam 31 godinu';
console.log (recen);

let prvi_ = 10;
let drugi_ = 5;

let treci_ = 7;
let cetvrti_ = 8;

console.log(prvi_ > drugi_);
console.log(treci_ > cetvrti_);
 
console.log((prvi_ > drugi_)) || ((treci_ > cetvrti_));


let p_broj = 5
let d_broj = 10


if (p_broj > d_broj) {
console.log('Prvi broj je manji od drugog')
}

else {
     console.log('Prvi broj nije manji od drugog')
}

let vreme = 21;
if (vreme < 10){
    console.log ('Dobro jutro!');}
    else if  (vreme < 20) {
      console.log('Dobar dan!');
    }
   else {
       console.log('Dobro vece!')
   }


let mesec = 3;

if(mesec === 1) {
 console.log('Januar');
 } 
 else if(mesec === 2) {
   console.log('Februar');
} 
else if(mesec === 3) {
     console.timeLog('Mart');
 }
  else if(mesec === 6) {
    console.log('Jun')
 }

switch(mesec) {
   case 1:
        console.log('Januar');
       break;
    case 2:
      console.log('Februar');
     break;
       case 3:
      console.log('Mart');
        break;
       case 4:
        console.log('April');
       break;
      case 5:
       console.log('Maj');
       break;
        case 6:
        console.log('Jun');
       break;
        case 7:
       console.log('Jul');
         break;
        case 8:
        console.log('Avgust');
        break;
        case 9:
       console.log('Septembar');
         break;
        case 10:
        console.log('Oktobar');
        break;
        case 11:
       console.log('Novembar');
        break;
       case 12:
       console.log('Decembar');
      break; 
 }



// brojac novcanice

let novcanice = 35;
let vrednost_novcanice = 10;

let novc_anice = [10, 5, 20, 50, 10, 100, 50, 5, 10, 20, 50, 100]

let broj_novcanica = novcanice.length;
console.log(novcanice.length);
// // izbrojane novcanice
let izbrojane_novcanice = 0;

// // broji novcanice sve dok je brojac manji od broja novcanica

 while(izbrojane_novcanice < 11) {
     izbrojane_novcanice++; }

 console.log(izbrojane_novcanice);

 console.log('broj izbrojanih novcanica' + novcanice.length);


// indeksi niza
 console.log(novcanice[0]);
 console.log(novcanice[1]);
 console.log(novcanice[2]);
 console.log(novcanice[3]);
// ..... clanovi niza
 
// petlje
 let broj_novcan = novcanice.length;
 let brojac = 0;

while(brojac < broj_novcan) {
   console.log(novcanice[brojac]);

 brojac++;
 }

// petlja while i petlja for






