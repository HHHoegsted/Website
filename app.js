//TODO: Move these to a json file and make the cards find the text there.

const adgangsText='<p>Et kursus for håndværkere og andre med en ikke-gymnasiel baggrund. Det er et komprimeret forløb på 18 måneder, hvor man tager de fag fra STX der er nødvendige for at komme ind på Ingeniørhøjskolen. Jeg fandt undervejs ud af at jeg hellere ville læse på KU, og valgte at tage nogle supplerende fag bagefter.</p>';
const gskText='<p>Opgradering af fag så jeg havde kemi, fysik og matematik på A-niveau, engelsk på B- niveau og biologi på C-niveau. Jeg skrev også større skriftlig opgave i fast-fase protein syntese.</p>';
const kemiText='<p>Jeg gennemførte de første to år af uddannelsen, herunder uorganisk kemi, organisk kemi, fysisk kemi, spektroskopi og valensteori, matematik, fysik og videnskabsteori. De to år gav mig en grundig ballast inden for teoretisk kemi som mange laboranter ikke besidder, og gav mig samtidig en interesse for organisk syntese som jeg bibeholder i dag.</p>';
const laborantText='<p>Under mine studier på kemisk institut gik det op for mig at jeg trivedes bedst i laboratoriet.Derfor valgte jeg at ”stige om”, og tage laborantuddannelsen i stedet.<br><br> Grundlæggende laboratorieteknik, mikrobiologiske metoder, immunkemi herunder ELISA, PCR og celledyrkning. Kemiske analyser, HPLC, GCMS, AAS mm. 1. års projekt i mikrobiologisk undersøgelse af oksekød, 3. semesterprojekt i genteknologi, skoleprojekt: ”syntese af derivat af tetrahydroisoqunolin”, afsluttende projekt: ”Fremstilling af ni-leddet forbindelse til syntesen af Castanospermin”.<br><br>Under selve uddannelsen valgte jeg flere projekter og valgfag inden for kemiske metoder, og valgte at tage min laborantpraktik på DTU’s kemiske institut inden for organisk syntese. Under min praktik blev jeg hjemmevant i det organiske synteselaboratorie, og lærte flere analysemetoder der anvendes her, herunder NMR, IR, søjlekromatografi (normal og omvendt fase) og TLC.</p>';
const ledelseText='<p>Region Hovedstadens interne ledelsesudviklingsprogram som løber over et år med skiftende ekstern kursusvirksomhed, interne kurser og projekter i arbejdstiden. Består af 6 moduler som indbefatter drift, økonomi, personalehåndtering og -jura, strategisk ledelse, innovationsledelse, coaching og selvudvikling og -indsigt.</p>';
const akademiText='<p>Modulopbygget uddannelse der tages som aftenkursus hos erhvervsakademierne. Jeg går på CPHBusiness, og forventer at være færdig med uddannelsen i 2020. Uddannelsesniveauet er på linje med datamatikere.<br><br>Jeg har arbejdet med C#, Java, SQL, og front-end webdesign. Jeg har fået en forståelse for objektorienterede principper som Agilt Test-driven Design, SOLID og Design Patterns.</p>';
const aspText='<p>6-ugers erhvervsrettet uddannelse i fullstack development, hvor der arbejdes i dybden med C#, front-end design teknologier som HTML, CSS, JS (og ES6), jQuery, Bootstrap mm.<br><br>Jeg forventer at afslutte kurset med Microsofts 70-486 certifikat.</p>';

const Modal = document.querySelector('.modal');
const Close = document.querySelector('.close');
const modalText = document.querySelector('#eduText');

const adgangsCard = document.querySelector('#adgangskursus');
const gskCard = document.querySelector('#gsk');
const kemiCard = document.querySelector('#kemi');
const labCard = document.querySelector('#laborant');
const ledelseCard = document.querySelector('#ledelse');
const auCard = document.querySelector('#AU');
const aspCard = document.querySelector('#ASP');
const navn = document.querySelector('#navn');
const mail = document.querySelector('#email');
const msg = document.querySelector('#msg');

adgangsCard.onclick = () =>{
  modalText.innerHTML = adgangsText; 
  Modal.style.display = 'block';
}
gskCard.onclick = () =>{
  modalText.innerHTML = gskText;
  Modal.style.display = 'block';
}
kemiCard.onclick = () =>{
  modalText.innerHTML = kemiText;
  Modal.style.display = 'block';
}
labCard.onclick = ()=>{
  modalText.innerHTML = laborantText;
  Modal.style.display = 'block';
}
ledelseCard.onclick = ()=>{
  modalText.innerHTML = ledelseText;
  Modal.style.display = 'block';
}
auCard.onclick = ()=>{
  modalText.innerHTML = akademiText;
  Modal.style.display = 'block';
}
aspCard.onclick = ()=>{
  modalText.innerHTML = aspText;
  Modal.style.display = 'block';
}

Close.onclick = ()=>{
  Modal.style.display = 'none';
}

window.onclick = (e)=>{
  if(e.target == Modal){
    Modal.style.display = 'none';
  }
}

$('#kval_it').mouseenter(()=>{
  $('#kval_it').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.it).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('#kval_natur').mouseenter(()=>{
  $('#kval_natur').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.laborant).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('#kval_reng').mouseenter(()=>{
  $('#kval_reng').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.reng).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('#kval_ledelse').mouseenter(()=>{
  $('#kval_ledelse').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.ledelse).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('#kval_uv').mouseenter(()=>{
  $('#kval_uv').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.undervisning).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('#kval_div').mouseenter(()=>{
  $('#kval_div').css({"background":"#ccc","color":"#333"});
  $.getJSON('resources/qualifications.json', (result)=>{
    $(result.qualifications.misc).each((index,qual) =>{
      $('#kval').append(qual + '<br>');
    });
  });
});

$('.kval').mouseleave(()=>{
  $('.kval').css({"background":"#333","color":"#ccc"});
  $('#kval').empty();
});

function sendMail() {
  let content = `${navn} har sendt dig en besked fra hjemmesiden. Beskeden er: ${msg}. Svar på ${mail}`;
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'xxxxxxxxxx',
      'message': {
        'from_email': 'hh@hoegsted.dev',
        'to': [
            {
              'email': 'hh.hoegsted@gmail.com',
              'name': 'Hans-Henrik Høgsted',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'Mail fra hjemmesidens kontaktform',
        'html': content
      }
    }
   }).done(function(response) {
   });
}