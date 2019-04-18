var l = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];
var x = new AudioContext();
var a = x.createAnalyser();
a.fftSize = 32;
var d = new Uint8Array(16);
navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
  x.createMediaStreamSource(s).connect(a);
  z();
});
function z() {
  setTimeout(z, 40);
  a.getByteFrequencyData(d);
  var s = [];
  d.forEach(v => s.push(l[Math.floor((v / 255) * 8)]));
  location.hash = document.title = s.join("");
}
