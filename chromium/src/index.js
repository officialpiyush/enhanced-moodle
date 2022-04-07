window.addEventListener("load", () => {
  console.log("loaded");
  const linkElement = document.querySelector(".fileuploadsubmission a");

  if (!linkElement || !linkElement.getAttribute("href")) {
    console.log("EnhancedMoodle: No link element found");
    return;
  }

  console.log(linkElement.getAttribute("href"));

  const url = new URL(linkElement.getAttribute("href"));
  const hasForceDownload = url.searchParams.get("forcedownload");

  if (hasForceDownload) {
    url.searchParams.delete("forcedownload");
    linkElement.setAttribute("href", url.toString());
  }
});
