//Ürün bilgileri dizi tipindeki değişkenlere alındı.
let sutluUrunler=["GÜLLAÇ","40","SÜTLAÇ","20","SAN SEBESTİAN","70"];
let atıstırmaUrunler=["MEYVE SEPETİ","150","MAKARON(6adet)","50","TRUFF SEPETİ","200"];
let pastaUrunler=["RETRO PASTA","450","MİZAH PASTA","250","ÇİKOLATALI VE MEYVELİ PASTA","150"];

let i;

let urunAciklama,urunSecenek;

let eklenecekler=[];
let fiyatlar=[];

let listeSepet=document.getElementById("sepetPastane");

let toplamTutar=0;

const kod="PROMO10";

for(i=0;i<document.getElementsByName("kategori").length;i++)
{
    document.getElementsByName("kategori")[i].addEventListener("change",urunleriGetir);
}   

function olustur(){
    urunAciklama=document.createElement("label");
    urunSecenek=document.createElement("input");
    document.getElementById("urunPanel").appendChild(urunAciklama);
    document.getElementById("urunPanel").appendChild(urunSecenek);
    urunSecenek.type="checkbox";
    urunSecenek.setAttribute("name","urunler");
    urunAciklama.setAttribute("for","urunler");
    urunAciklama.setAttribute("class","urunler");
}

function urunleriGetir(){
    const silinecekler = document.getElementById("urunPanel");
    while (silinecekler.hasChildNodes()) {
      silinecekler.removeChild(silinecekler.firstChild);
    }

    if(document.getElementById("kategoriSutlu").checked)
    {
        for(i=0;i<sutluUrunler.length;i=i+2)
        {
            olustur();
            urunSecenek.value=sutluUrunler[i+1];
            urunAciklama.innerHTML=sutluUrunler[i]; 
        }
    }
    else if(document.getElementById("kategoriAtıstırma").checked)
    {
        for(i=0;i<atıstırmaUrunler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=atıstırmaUrunler[i+1];
        urunAciklama.innerHTML=atıstırmaUrunler[i];
        }
    }
    else if(document.getElementById("kategoriPasta").checked)
    {
        for(i=0;i<pastaUrunler.length;i=i+2)
        {
        olustur();
        urunSecenek.value=pastaUrunler[i+1];
        urunAciklama.innerHTML=pastaUrunler[i];
        }
    }
}

function sepeteEkle(){
    const listeUrunlerFiyat=document.getElementsByName("urunler");
    const listeUrunlerAd=document.getElementsByClassName("urunler");
    
        eklenecekler=[];
        fiyatlar=[];

        for(i=0;i<listeUrunlerFiyat.length;i++){
            if(listeUrunlerFiyat[i].checked){
                toplamTutar+=Number(listeUrunlerFiyat[i].value);
                eklenecekler.push(listeUrunlerAd[i].innerHTML);
                fiyatlar.push(listeUrunlerFiyat[i].value);
            }
        }

        console.log(eklenecekler);
        console.log(fiyatlar);

    let adet=document.getElementById("urunAdet").value;
    console.log(adet);

    
    for(i=0;i<adet;i++)
    {
        let sepeteEklenecekUrun;
        
        for(i=0;i<eklenecekler.length;i++){
            sepeteEklenecekUrun=document.createElement("option");
            listeSepet.options.add(sepeteEklenecekUrun);
            sepeteEklenecekUrun.text=eklenecekler[i];
            sepeteEklenecekUrun.value=fiyatlar[i];
        }
        }

    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}

function sepettenCikar(){
    let seciliIndeks=listeSepet.selectedIndex;
    let silinecekUrununFiyati=listeSepet.options[seciliIndeks].value;
    listeSepet.options.remove(seciliIndeks);
    toplamTutar=toplamTutar-silinecekUrununFiyati;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
}


function sepetiBosalt(){
    document.querySelectorAll('#pastaneMarket option').forEach(eleman => eleman.remove());
    toplamTutar=0;
    document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";

}

function koduEkle(){
    let girilenKod=document.getElementById("txtIndirim").value;
    if(girilenKod == kod)
    {
        toplamTutar=toplamTutar-10;
        document.getElementById("sepetTutar").innerHTML=toplamTutar+" TL";
        document.getElementById("sonuc").innerHTML="İndirim uygulandı.";
    }
    else{
        document.getElementById("sonuc").innerHTML="Geçerli bir kod girmediniz!";
    }
}



