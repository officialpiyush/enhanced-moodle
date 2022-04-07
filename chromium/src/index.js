window.addEventListener("load", () => {
  const linkElement = document.querySelector(".fileuploadsubmission a");

  if (!linkElement || !linkElement.getAttribute("href")) {
    console.log("EnhancedMoodle: No link element found");
    return;
  }

  const url = new URL(linkElement.getAttribute("href"));
  const hasForceDownload = url.searchParams.get("forcedownload");

  if (hasForceDownload) {
    url.searchParams.delete("forcedownload");
    linkElement.setAttribute("href", url.toString());
  }
});
