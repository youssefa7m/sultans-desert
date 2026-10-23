
const WHATSAPP_NUMBER = "+212660733375";
const BOOKING_EMAIL = "sultansdesert@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const value = (id) =>
    document.getElementById(id)?.value?.trim() || "";

  function bookingDetails() {
    const name = value("customer-name");
    const phone = value("customer-phone");
    const activity = value("activity");
    const date = value("date");
    const people = value("people");
    const duration = value("duration");
    const notes = value("notes");

    if (!name || !phone || !activity || !date || !people) {
      alert("Please complete your name, phone, activity, date and number of people.");
      return null;
    }

    return [
      "Hello Sultans Desert! I'd like to request a booking.",
      "",
      "Full name: " + name,
      "Phone / WhatsApp: " + phone,
      "Activity: " + activity,
      "Preferred date: " + date,
      "Number of people: " + people,
      "Duration / option: " + (duration || "Not specified"),
      "Pickup area / requests: " + (notes || "Not specified"),
      "",
      "Please confirm availability, pickup details and final price.",
      "Payment method: Cash on Arrival."
    ].join("\n");
  }

  function fillBooking(activity, option) {
    const activityField = document.getElementById("activity");
    const notesField = document.getElementById("notes");

    if (activityField) {
      activityField.value = activity;
    }

    if (option && notesField) {
      notesField.value = [
        notesField.value,
        "Selected option: " + option
      ].filter(Boolean).join("\n");
    }
  }

  document.querySelectorAll(".book").forEach(button => {
    button.addEventListener("click", () => {
      fillBooking(button.dataset.package || "");
      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("quad-book-button")
    ?.addEventListener("click", () => {
      fillBooking(
        "Quad Ride",
        value("quad-duration") + "; " + value("quad-sharing")
      );

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  document.getElementById("buggy-book-button")
    ?.addEventListener("click", () => {
      fillBooking("Buggy Ride", value("buggy-duration"));

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  document.getElementById("camel-book-button")
    ?.addEventListener("click", () => {
      fillBooking("Camel Ride", value("camel-duration"));

      document.getElementById("booking")
        ?.scrollIntoView({ behavior: "smooth" });
    });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const message = bookingDetails();

    if (message) {
      sendEmail(message);
    }
  });

  function sendEmail(message) {
    const subject = "Sultans Desert Booking Request";

    const url = "mailto:" + BOOKING_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(message);

    window.location.href = url;
  }

  document.getElementById("send-email")
    ?.addEventListener("click", () => {
      const message = bookingDetails();

      if (message) {
        sendEmail(message);
      }
    });

  function sendWhatsApp(message) {
    if (
      !WHATSAPP_NUMBER ||
      WHATSAPP_NUMBER === "ADD_YOUR_WHATSAPP_NUMBER"
    ) {
      alert(
        "WhatsApp number has not been added yet. Please use the email button or add your business WhatsApp number in script.js."
      );
      return;
    }

    const url = "https://wa.me/" + WHATSAPP_NUMBER +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  }

  document.getElementById("send-whatsapp")
    ?.addEventListener("click", () => {
      const message = bookingDetails();

      if (message) {
        sendWhatsApp(message);
      }
    });

  const footerWhatsApp =
    document.getElementById("footer-whatsapp");

  if (footerWhatsApp) {
    footerWhatsApp.addEventListener("click", event => {
      event.preventDefault();

      if (WHATSAPP_NUMBER === "ADD_YOUR_WHATSAPP_NUMBER") {
        alert("Please add your real WhatsApp number in script.js first.");
      } else {
        window.open(
          "https://wa.me/" + WHATSAPP_NUMBER,
          "_blank"
        );
      }
    });
  }
});
