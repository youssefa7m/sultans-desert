
/* =========================================
   SULTANS DESERT
   WEBSITE BOOKING + REVIEWS + PHOTO GALLERY
========================================= */

const WHATSAPP_NUMBER = "212660733375";
const BOOKING_EMAIL = "sultansdesert@gmail.com";

/* =========================================
   BOOKING SYSTEM
========================================= */

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
      alert(
        "Please complete your name, phone, activity, date and number of people."
      );
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

  document.querySelectorAll(".book").forEach((button) => {
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

  function sendEmail(message) {
    const subject = "Sultans Desert Booking Request";

    const url =
      "mailto:" + BOOKING_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(message);

    window.location.href = url;
  }

  function sendWhatsApp(message) {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (!number) {
      alert("WhatsApp number is missing.");
      return;
    }

    const url =
      "https://wa.me/" + number +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = bookingDetails();

    if (message) {
      sendEmail(message);
    }
  });

  document.getElementById("send-email")
    ?.addEventListener("click", () => {
      const message = bookingDetails();

      if (message) {
        sendEmail(message);
      }
    });

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
    footerWhatsApp.addEventListener("click", (event) => {
      event.preventDefault();

      const number = WHATSAPP_NUMBER.replace(/\D/g, "");

      if (!number) return;

      window.open(
        "https://wa.me/" + number,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});

/* =========================================
   SUPABASE CONNECTION
========================================= */

const SUPABASE_URL =
  "https://rnytitvqrtliwtsnkaqs.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_MUi5AvqpG0iDh4yK_BkvDQ_-2bDez19";

const PHOTO_FUNCTION_URL =
  SUPABASE_URL + "/functions/v1/review-photo";

/* =========================================
   APPROVED CUSTOMER REVIEWS
========================================= */

async function getApprovedReviews() {
  const endpoint =
    SUPABASE_URL + "/rest/v1/reviews" +
    "?select=id,customer_name,rating,comment,created_at,activity_id" +
    "&approved=eq.true" +
    "&order=created_at.desc";

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Could not load reviews");
    }

    return await response.json();

  } catch (error) {
    console.error("Reviews error:", error);
    return [];
  }
}

/* =========================================
   PHOTO GALLERY DESIGN
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");

  style.textContent = `
    .guest-gallery-section {
      max-width: 1150px;
      margin: 55px auto 0;
      text-align: center;
    }

    .guest-gallery-section h2 {
      font-size: clamp(25px, 4vw, 36px);
      margin-bottom: 10px;
      color: #282923;
    }

    .guest-gallery-description {
      color: #777;
      margin-bottom: 28px;
    }

    .guest-gallery-grid {
      display: grid;
      grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 25px;
    }

    .guest-gallery-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      text-align: left;
      box-shadow: 0 5px 25px rgba(0,0,0,0.07);
    }

    .guest-gallery-card img {
      width: 100%;
      height: 230px;
      object-fit: cover;
      display: block;
      cursor: zoom-in;
    }

    .guest-gallery-card-content {
      padding: 15px;
    }

    .guest-gallery-card h3 {
      margin: 5px 0;
      font-size: 16px;
    }

    .guest-gallery-stars {
      color: #e6a529;
      letter-spacing: 2px;
      font-size: 19px;
    }

    .guest-gallery-card small {
      color: #777;
    }

    .review-photo-field {
      margin: 22px 0;
    }

    .review-photo-field label {
      display: block;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .review-photo-field input[type="file"] {
      width: 100%;
      box-sizing: border-box;
      padding: 14px;
      border: 2px dashed #c7a77b;
      border-radius: 10px;
      background: #faf8f3;
      cursor: pointer;
    }

    .review-photo-help {
      color: #777;
      font-size: 13px;
      line-height: 1.6;
      margin-top: 9px;
    }

    #review-photo-preview {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-top: 15px;
    }

    #review-photo-preview img {
      width: 100%;
      height: 105px;
      object-fit: cover;
      border-radius: 9px;
    }

    @media (max-width: 600px) {
      .guest-gallery-grid {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .guest-gallery-card img {
        height: 160px;
      }

      .guest-gallery-card-content {
        padding: 10px;
      }

      #review-photo-preview img {
        height: 85px;
      }
    }
  `;

  document.head.appendChild(style);
});

/* =========================================
   APPROVED PHOTO GALLERY
========================================= */

async function loadGuestPhotoGallery() {
  const gallery =
    document.getElementById("guest-gallery-grid");

  if (!gallery) return;

  gallery.textContent = "Loading guest photos...";

  try {
    const response = await fetch(PHOTO_FUNCTION_URL, {
      method: "GET",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY
      }
    });

    if (!response.ok) {
      throw new Error("Unable to load gallery");
    }

    const result = await response.json();
    const photos = Array.isArray(result.photos)
      ? result.photos
      : [];

    gallery.replaceChildren();

    if (!photos.length) {
      gallery.textContent =
        "Approved guest photos will appear here soon.";
      return;
    }

    photos.forEach((photo) => {
      if (!photo.image_url) return;

      const card = document.createElement("article");
      card.className = "guest-gallery-card";

      const img = document.createElement("img");
      img.src = photo.image_url;
      img.alt = "Agafay Desert guest experience";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";

      img.addEventListener("click", () => {
        window.open(
          photo.image_url,
          "_blank",
          "noopener,noreferrer"
        );
      });

      const content = document.createElement("div");
      content.className = "guest-gallery-card-content";

      const stars = document.createElement("div");
      stars.className = "guest-gallery-stars";

      const rating = Math.max(
        1,
        Math.min(5, Number(photo.rating) || 1)
      );

      stars.textContent =
        "★".repeat(rating) +
        "☆".repeat(5 - rating);

      const name = document.createElement("h3");
      name.textContent =
        photo.customer_name || "Sultans Desert Guest";

      const activity = document.createElement("small");
      activity.textContent = photo.activity_name || "";

      content.append(stars, name, activity);
      card.append(img, content);
      gallery.appendChild(card);
    });

  } catch (error) {
    console.error("Gallery error:", error);

    gallery.textContent =
      "Guest photos are temporarily unavailable.";
  }
}

/* =========================================
   ADD GALLERY TO WEBSITE AUTOMATICALLY
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const reviewsSection =
    document.getElementById("reviews");

  if (!reviewsSection) return;

  if (!document.getElementById("guest-gallery")) {
    const section = document.createElement("section");
    section.id = "guest-gallery";
    section.className = "guest-gallery-section";

    const heading = document.createElement("h2");
    heading.textContent = "Guest Photo Gallery";

    const description = document.createElement("p");
    description.className = "guest-gallery-description";
    description.textContent =
      "Real moments shared by our guests in Agafay Desert.";

    const grid = document.createElement("div");
    grid.id = "guest-gallery-grid";
    grid.className = "guest-gallery-grid";

    section.append(heading, description, grid);

    const formBox =
      reviewsSection.querySelector(".review-form-box");

    if (formBox) {
      reviewsSection.insertBefore(section, formBox);
    } else {
      reviewsSection.appendChild(section);
    }
  }

  loadGuestPhotoGallery();
});

/* =========================================
   CUSTOMER PHOTO UPLOAD FIELD
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const reviewForm =
    document.getElementById("customer-review-form");

  if (!reviewForm) return;

  const submitButton =
    document.getElementById("review-submit");

  if (!submitButton) return;

  const photoContainer = document.createElement("div");
  photoContainer.className = "review-photo-field";

  const label = document.createElement("label");
  label.htmlFor = "review-photos";
  label.textContent = "Add Your Photos (Optional)";

  const photoInput = document.createElement("input");
  photoInput.type = "file";
  photoInput.id = "review-photos";
  photoInput.name = "review-photos";
  photoInput.accept = "image/jpeg,image/png,image/webp";
  photoInput.multiple = true;

  const help = document.createElement("p");
  help.className = "review-photo-help";
  help.textContent =
    "Choose up to 3 photos. Maximum 5 MB per photo. " +
    "JPEG, PNG or WebP only. " +
    "Photos are published after approval.";

  const preview = document.createElement("div");
  preview.id = "review-photo-preview";

  photoContainer.append(label, photoInput, help, preview);

  reviewForm.insertBefore(photoContainer, submitButton);

  /* PHOTO PREVIEW */

  photoInput.addEventListener("change", () => {
    preview.replaceChildren();

    const files = Array.from(photoInput.files || []);

    if (files.length > 3) {
      alert("Please choose a maximum of 3 photos.");
      photoInput.value = "";
      return;
    }

    for (const file of files) {
      if (
        !["image/jpeg", "image/png", "image/webp"]
          .includes(file.type)
      ) {
        alert("Please use JPEG, PNG or WebP photos.");
        photoInput.value = "";
        preview.replaceChildren();
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("Each photo must be smaller than 5 MB.");
        photoInput.value = "";
        preview.replaceChildren();
        return;
      }
    }

    files.forEach((file) => {
      const image = document.createElement("img");
      const objectUrl = URL.createObjectURL(file);

      image.src = objectUrl;
      image.alt = "Selected photo preview";

      image.addEventListener("load", () => {
        URL.revokeObjectURL(objectUrl);
      }, { once: true });

      preview.appendChild(image);
    });
  });

  /* =========================================
     SEND REVIEW WITH PHOTOS
  ========================================= */

  reviewForm.addEventListener(
    "submit",
    async (event) => {
      const files = Array.from(photoInput.files || []);

      // If no photos were selected, the existing
      // review submission in index.html handles it.
      if (files.length === 0) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const status =
        document.getElementById("review-status");

      const button =
        document.getElementById("review-submit");

      if (!status || !button) return;

      const enteredToken =
        document.getElementById("review-token")
          .value.trim();

      const token = /^SDMMT-/i.test(enteredToken)
        ? enteredToken.toUpperCase()
        : enteredToken;

      const name =
        document.getElementById("review-name")
          .value.trim();

      const rating = Number(
        document.getElementById("review-rating").value
      );

      const comment =
        document.getElementById("review-comment")
          .value.trim();

      const validToken =
        /^(?:SDMMT-[A-F0-9]{16}|[a-f0-9]{64})$/.test(token);

      if (
        !validToken ||
        name.length < 2 ||
        name.length > 80 ||
        !Number.isInteger(rating) ||
        rating < 1 ||
        rating > 5 ||
        comment.length < 1 ||
        comment.length > 2000 ||
        files.length > 3
      ) {
        status.textContent =
          "Please check your review information.";
        return;
      }

      for (const file of files) {
        if (
          !["image/jpeg", "image/png", "image/webp"]
            .includes(file.type) ||
          file.size > 5 * 1024 * 1024 ||
          file.size < 100
        ) {
          status.textContent =
            "Photos must be JPEG, PNG or WebP and under 5 MB.";
          return;
        }
      }

      button.disabled = true;

      let reviewSaved = false;
      let uploadedPhotos = 0;

      try {
        status.textContent =
          "Submitting your review...";

        /* STEP 1: SAVE THE REVIEW */

        const response = await fetch(
          SUPABASE_URL + "/rest/v1/rpc/submit_review",
          {
            method: "POST",
            headers: {
              apikey: SUPABASE_PUBLISHABLE_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              p_token: token,
              p_customer_name: name,
              p_rating: rating,
              p_comment: comment
            })
          }
        );

        if (!response.ok) {
          throw new Error("Review could not be saved");
        }

        const rawResult = await response.text();

        let reviewId;

        try {
          reviewId = JSON.parse(rawResult);
        } catch (_) {
          reviewId = rawResult.trim();
        }

        if (typeof reviewId !== "string") {
          throw new Error("Missing review ID");
        }

        reviewSaved = true;

        /* STEP 2: UPLOAD PHOTOS */

        for (let i = 0; i < files.length; i++) {
          status.textContent =
            "Uploading photo " +
            (i + 1) +
            " of " +
            files.length +
            "...";

          const data = new FormData();

          data.append("token", token);
          data.append("review_id", reviewId);
          data.append("photo", files[i]);

          const uploadResponse = await fetch(
            PHOTO_FUNCTION_URL,
            {
              method: "POST",
              headers: {
                apikey: SUPABASE_PUBLISHABLE_KEY
              },
              body: data
            }
          );

          if (!uploadResponse.ok) {
            throw new Error(
              "Photo " + (i + 1) + " upload failed"
            );
          }

          uploadedPhotos++;
        }

        /* STEP 3: SUCCESS */

        reviewForm.reset();
        preview.replaceChildren();

        status.textContent =
          "Thank you! Your review and " +
          uploadedPhotos +
          " photo(s) were submitted successfully. " +
          "They are waiting for approval.";

      } catch (error) {
        console.error("Review/photo upload error:", error);

        if (reviewSaved) {
          status.textContent =
            "Your review was saved, but only " +
            uploadedPhotos +
            " of " +
            files.length +
            " photos uploaded. " +
            "Please contact Sultans Desert for help. " +
            "Do not submit the review again.";
        } else {
          status.textContent =
            "Unable to submit your review. " +
            "Please check your invitation code and try again.";
        }

      } finally {
        button.disabled = false;
      }
    },
    true
  );
});
