document.getElementById("convertBtn").addEventListener("click", function() {
  const textFileInput = document.getElementById("textFileInput");
  const outputFormat = document.getElementById("outputFormat").value;

  if (textFileInput.files.length === 0) {
    alert("Please select a text file.");
    return;
  }

  const textFile = textFileInput.files[0];
  const fileReader = new FileReader();

  fileReader.onload = function(event) {
    const textContent = event.target.result;
    let convertedContent;

    if (outputFormat === "csv") {
      convertedContent = convertToCSV(textContent);
    } else if (outputFormat === "html") {
      convertedContent = convertToHTML(textContent);
    } else {
      alert("Invalid output format selected.");
      return;
    }

    if (convertedContent) {
      downloadConvertedFile(convertedContent, textFile.name, outputFormat);
    } else {
      alert("Conversion failed.");
    }
  };

  fileReader.readAsText(textFile);
});

function convertToCSV(textContent) {
  return textContent;
}

function convertToHTML(textContent) {
  return textContent;
}

function downloadConvertedFile(content, fileName, fileExtension) {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.${fileExtension}`;
  link.click();
  URL.revokeObjectURL(link.href);
}




  


