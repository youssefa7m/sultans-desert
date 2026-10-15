// Replace this placeholder with the official WhatsApp number in international format, digits only.
const WHATSAPP_NUMBER = "212600000000";
function bookingMessage(activity, date, people, duration, notes) {
  return `Hello Sultans Desert! I would like to request a booking.\nActivity: ${activity}\nDate: ${date}\nPeople: ${people}\nDuration/options: ${duration}\nExtra details: ${notes || "None"}\nPlease confirm availability, final price and free transport from Marrakech.`;
}
function waUrl(message) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }
document.querySelectorAll(".book").forEach(link => link.addEventListener("click", () => { document.getElementById("activity").value = link.dataset.package; }));
document.querySelectorAll(".book-select").forEach(link => link.addEventListener("click", () => { const dur = document.getElementById(link.dataset.base === "Quad Ride" ? "quad-duration" : "buggy-duration").value; document.getElementById("activity").value = link.dataset.base; document.getElementById("duration").value = dur === "1 hour" ? (link.dataset.base === "Quad Ride" ? "Quad — 1 hour" : "Buggy — 1 hour") : (link.dataset.base === "Quad Ride" ? "Quad — 2 hours" : "Buggy — 2 hours"); }));
document.getElementById("booking-form").addEventListener("submit", e => { e.preventDefault(); const activity = document.getElementById("activity").value; const date = document.getElementById("date").value; const people = document.getElementById("people").value; const duration = document.getElementById("duration").value; const notes = document.getElementById("notes").value; window.open(waUrl(bookingMessage(activity,date,people,duration,notes)), "_blank", "noopener"); });
