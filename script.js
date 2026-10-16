
const WHATSAPP_NUMBER = "212640140173";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");

  if (!form) return;

  const getValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value.trim() : "";
  };

  // Fill the activity field when a package booking button is clicked.
  document.querySelectorAll(".book").forEach((button) => {
    button.addEventListener("click", () => {
      const activity = document.getElementById("activity");
      const packageName = button.dataset.package;

      if (activity && packageName) {
        activity.value = packageName;
      }
    });
  });

  // Select the chosen quad or buggy duration before booking.
  document.querySelectorAll(".book-select").forEach((button) => {
    button.addEventListener("click", () => {
      const base = button.dataset.base || "";
      const activity = document.getElementById("activity");
      const durationId = base.toLowerCase().includes("buggy")
        ? "buggy-duration"
        : "quad-duration";
      const duration = document.getElementById(durationId);

      if (activity) activity.value = base;

      if (duration) {
        const selected = duration.options[duration.selectedIndex].text;
        const notes = document.getElementById("notes");

        if (notes) {
          notes.value = `${notes.value}\nSelected option: ${selected}`.trim();
        }
      }
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = getValue("customer-name");
    const phone = getValue("customer-phone");
    const activity = getValue("activity");
    const date = getValue("date");
    const people = getValue("people");
    const duration = getValue("duration");
    const notes = getValue("notes");

    if (!name || !phone || !activity || !date || !people) {
      alert("Please complete all required booking fields.");
      return;
    }

    const message = [
      "Hello Sultans Desert! I'd like to request a booking.",
      "",
      `Full name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Activity: ${activity}`,
      `Preferred date: ${date}`,
      `Number of people: ${people}`,
      `Duration / option: ${duration || "Not specified"}`,
      `Pickup area / requests: ${notes || "Not specified"}`,
      "",
      "Please confirm availability, pickup details and the final price.",
      "Payment method: Cash on Arrival."
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
});
