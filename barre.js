// Récupération des éléments
const generateButton = document.getElementById('generateButton');
const barcodeText = document.getElementById('barcodeText');
const barcode = document.getElementById('barcode');

// Fonction pour générer un code-barres
function generateBarcode() {
  const text = barcodeText.value.trim();

  if (text) {
    JsBarcode("#barcode", text, {
      format: "CODE128", // Vous pouvez changer le format ici (ex: "EAN13", "UPC", etc.)
      displayValue: true, // Afficher le texte sous le code-barres
      fontSize: 18,
      height: 100,
      margin: 10
    });
  } else {
    alert("Veuillez entrer un texte pour générer un code-barres.");
  }
}

// Ajouter un événement au bouton pour générer le code-barres
generateButton.addEventListener('click', generateBarcode);
