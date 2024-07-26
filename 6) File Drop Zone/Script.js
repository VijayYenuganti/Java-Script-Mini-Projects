const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];

const inputFiles = document.querySelectorAll(
  ".dropzone-area input[type='file']"
);

const inputElement = inputFiles[0];

const dropzoneElement = inputElement.closest(".dropzone-area");

inputElement.addEventListener("change", (e) => {
  e.preventDefault();
  dropzoneElement.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
  dropzoneElement.addEventListener(type, (e) => {
    dropzoneElement.classList.remove("dropzone--over");
  });
});

dropzoneElement.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;

    updateDropzoneFileList(dropzoneElement, e.dataTransfer.files[0]);
  }
  dropzoneElement.classList.remove("dropzone--over");
});

const updateDropzoneFileList = (dropzoneElement, file) => {
  let dropzoneFileMessage = dropzoneElement.querySelector(".file-info");

  dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`;
};

dropzoneBox.addEventListener("reset", (e) => {
  let dropzoneFileMessage = dropzoneElement.querySelector(".file-info");

  dropzoneFileMessage.innerHTML = `No Files Selected`
});

dropzoneBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const myfiled = document.getElementById("upload-file");
  console.log(myFiled.files[0]);
})
