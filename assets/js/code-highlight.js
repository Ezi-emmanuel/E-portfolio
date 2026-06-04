/**
 * Syntax highlighting for artefact code blocks (pre.code-block > code.language-*).
 * Requires highlight.js and the matching language pack loaded first.
 */
(function () {
  function highlightCodeBlocks() {
    if (typeof hljs === "undefined") return;

    document.querySelectorAll('pre.code-block code[class*="language-"]').forEach(function (el) {
      hljs.highlightElement(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", highlightCodeBlocks);
  } else {
    highlightCodeBlocks();
  }
})();
