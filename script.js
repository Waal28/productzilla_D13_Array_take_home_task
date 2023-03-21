const Countries = [
  "Indonesia",
  "Malaysia",
  "Singapura",
  "Brunei",
  "Filipina",
  "Kamboja",
  "Amerika Serikat",
  "Inggris",
  "Timor Leste",
];

function findCountry(value) {
  const negara = Countries.toString().indexOf(value) > -1;
  if (negara) {
    console.log("Ada");
  } else {
    console.log("Tidak Ada");
  }
}

findCountry("Pluto");
