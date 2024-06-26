// Adding Prism to The Code Tags
var addPrismToCodeTag = document.querySelectorAll("code");
function fAddPrismToCodeTag(e) {
    e.classList.toggle("language-javascript");
}
addPrismToCodeTag.forEach(fAddPrismToCodeTag);

// Changing the font of Each H1 & H3 elements
var Hs = ["h1", "h3"];
for (let i = 0; i < Hs.length; i++) {
    var hs = Hs[i];
    var h = document.querySelectorAll(hs);

    function colorRed(element) {
        element.classList.toggle("oswald-font");
        element.classList.toggle("green");
    }
    h.forEach(colorRed);
}

[].forEach.call(document.querySelectorAll("pre"), function ($pre) {
    var lines = $pre.textContent.split("\n");
    var matches;
    var indentation =
        (matches = /^\s+/.exec(lines[0])) != null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function (line) {
            return line.replace(indentation, "");
        });
        return ($pre.textContent = lines.join("\n").trim());
    }
});
